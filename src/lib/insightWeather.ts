import type { Location } from "../data/locations";

export const forecastCacheTtl = 30 * 60 * 1000;
export const airQualityCacheTtl = 60 * 60 * 1000;
export const historyCacheTtl = 24 * 60 * 60 * 1000;
export const climateCacheTtl = 7 * 24 * 60 * 60 * 1000;

export function buildAirQualityUrl(location: Pick<Location, "latitude" | "longitude">) {
  const url = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  url.search = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    timezone: "Europe/Madrid",
    current: [
      "european_aqi",
      "pm10",
      "pm2_5",
      "nitrogen_dioxide",
      "ozone",
      "uv_index",
      "grass_pollen",
      "olive_pollen",
      "birch_pollen",
      "ragweed_pollen",
    ].join(","),
    hourly: [
      "european_aqi",
      "pm10",
      "pm2_5",
      "nitrogen_dioxide",
      "ozone",
      "uv_index",
      "grass_pollen",
      "olive_pollen",
      "birch_pollen",
      "ragweed_pollen",
    ].join(","),
    forecast_days: "4",
  }).toString();
  return url;
}

export function buildHistoricalUrl(location: Pick<Location, "latitude" | "longitude">, startDate: string, endDate: string) {
  const url = new URL("https://archive-api.open-meteo.com/v1/archive");
  url.search = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    timezone: "Europe/Madrid",
    start_date: startDate,
    end_date: endDate,
    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
    ].join(","),
    wind_speed_unit: "kmh",
    precipitation_unit: "mm",
    temperature_unit: "celsius",
  }).toString();
  return url;
}

export function buildClimateUrl(location: Pick<Location, "latitude" | "longitude">) {
  const url = new URL("https://climate-api.open-meteo.com/v1/climate");
  url.search = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    start_date: "2035-01-01",
    end_date: "2050-12-31",
    models: "EC_Earth3P_HR",
    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
      "reference_evapotranspiration",
    ].join(","),
    wind_speed_unit: "kmh",
    precipitation_unit: "mm",
    temperature_unit: "celsius",
  }).toString();
  return url;
}

export function buildFloodUrl(location: Pick<Location, "latitude" | "longitude">) {
  const url = new URL("https://flood-api.open-meteo.com/v1/flood");
  url.search = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    daily: ["river_discharge", "river_discharge_max", "river_discharge_p75"].join(","),
    forecast_days: "30",
  }).toString();
  return url;
}

export async function cachedJson(url: URL | string, ttlMs: number) {
  const key = `extretiempo:cache:${String(url)}`;
  const cached = readCache(key);
  if (cached && Date.now() - cached.savedAt < ttlMs) {
    return { data: cached.data, cache: true };
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    writeCache(key, data);
    return { data, cache: false };
  } catch (error) {
    if (cached) return { data: cached.data, cache: true };
    throw error;
  }
}

export async function mapLimit<T, R>(items: T[], limit: number, mapper: (item: T, index: number) => Promise<R>) {
  const results: R[] = [];
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

export function lastCompleteDateRange(days: number) {
  const end = new Date();
  end.setDate(end.getDate() - 2);
  const start = new Date(end);
  start.setDate(start.getDate() - days + 1);
  return { startDate: isoDate(start), endDate: isoDate(end) };
}

export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function average(values: Array<number | null | undefined>) {
  const valid = values.filter((value): value is number => typeof value === "number" && Number.isFinite(value));
  if (valid.length === 0) return null;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

export function sum(values: Array<number | null | undefined>) {
  return values.reduce((total, value) => total + (typeof value === "number" && Number.isFinite(value) ? value : 0), 0);
}

export function max(values: Array<number | null | undefined>) {
  const valid = values.filter((value): value is number => typeof value === "number" && Number.isFinite(value));
  return valid.length ? Math.max(...valid) : null;
}

export function min(values: Array<number | null | undefined>) {
  const valid = values.filter((value): value is number => typeof value === "number" && Number.isFinite(value));
  return valid.length ? Math.min(...valid) : null;
}

export function formatMetric(value: number | null | undefined, suffix = "", decimals = 0) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "--";
  return `${decimals === 0 ? Math.round(value) : Math.round(value * 10 ** decimals) / 10 ** decimals}${suffix}`;
}

export function aqiLabel(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Sin datos";
  if (value <= 20) return "Buena";
  if (value <= 40) return "Aceptable";
  if (value <= 60) return "Moderada";
  if (value <= 80) return "Mala";
  if (value <= 100) return "Muy mala";
  return "Extremadamente mala";
}

export function riskTone(value: number | null | undefined, thresholds: [number, number]) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "neutral";
  if (value >= thresholds[1]) return "danger";
  if (value >= thresholds[0]) return "warn";
  return "good";
}

function readCache(key: string): { savedAt: number; data: unknown } | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.savedAt !== "number") return null;
    return parsed;
  } catch (error) {
    return null;
  }
}

function writeCache(key: string, data: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify({ savedAt: Date.now(), data }));
  } catch (error) {}
}
