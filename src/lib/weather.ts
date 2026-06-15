import type { Location } from "../data/locations";

export type WeatherSnapshot = {
  slug: string;
  name: string;
  province: string;
  href: string;
  updatedAt: string;
  current: {
    temperature: number | null;
    apparentTemperature: number | null;
    humidity: number | null;
    precipitation: number | null;
    weatherCode: number | null;
    cloudCover: number | null;
    windSpeed: number | null;
    windDirection: number | null;
    windGusts: number | null;
    description: string;
    image: string;
  };
  today: {
    max: number | null;
    min: number | null;
    precipitationSum: number | null;
    precipitationProbability: number | null;
    windMax: number | null;
    gustsMax: number | null;
    uvMax: number | null;
  };
  hourly: HourlyPoint[];
  daily: DailyPoint[];
};

export type HourlyPoint = {
  time: string;
  temperature: number | null;
  rainProbability: number | null;
  precipitation: number | null;
  weatherCode: number | null;
  windSpeed: number | null;
  windGusts: number | null;
  description: string;
  image: string;
};

export type DailyPoint = {
  date: string;
  weatherCode: number | null;
  description: string;
  image: string;
  max: number | null;
  min: number | null;
  precipitationSum: number | null;
  precipitationProbability: number | null;
  windMax: number | null;
  gustsMax: number | null;
  uvMax: number | null;
};

type OpenMeteoResponse = {
  current?: Record<string, number | string>;
  hourly?: Record<string, Array<number | string>>;
  daily?: Record<string, Array<number | string>>;
};

export const forecastFields = {
  current: [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "precipitation",
    "weather_code",
    "cloud_cover",
    "wind_speed_10m",
    "wind_direction_10m",
    "wind_gusts_10m",
    "is_day",
  ],
  hourly: [
    "temperature_2m",
    "relative_humidity_2m",
    "precipitation_probability",
    "precipitation",
    "weather_code",
    "cloud_cover",
    "wind_speed_10m",
    "wind_gusts_10m",
  ],
  daily: [
    "weather_code",
    "temperature_2m_max",
    "temperature_2m_min",
    "apparent_temperature_max",
    "apparent_temperature_min",
    "precipitation_sum",
    "precipitation_probability_max",
    "wind_speed_10m_max",
    "wind_gusts_10m_max",
    "uv_index_max",
  ],
};

export function buildForecastUrl(location: Pick<Location, "latitude" | "longitude">) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    timezone: "Europe/Madrid",
    current: forecastFields.current.join(","),
    hourly: forecastFields.hourly.join(","),
    daily: forecastFields.daily.join(","),
    forecast_days: "7",
    wind_speed_unit: "kmh",
    precipitation_unit: "mm",
    temperature_unit: "celsius",
  }).toString();

  return url;
}

export function buildGeocodingUrl(query: string) {
  const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
  url.search = new URLSearchParams({
    name: query,
    count: "8",
    language: "es",
    format: "json",
    countryCode: "ES",
  }).toString();

  return url;
}

export function buildGenericLocationHref(location: Pick<Location, "name" | "province" | "latitude" | "longitude">) {
  const params = new URLSearchParams({
    name: location.name,
    province: location.province,
    lat: String(location.latitude),
    lon: String(location.longitude),
  });

  return `/localidad/?${params.toString()}`;
}

export function describeWeatherCode(code: number | null) {
  if (code === null) return "Sin datos";

  const descriptions: Record<number, string> = {
    0: "Despejado",
    1: "Mayormente despejado",
    2: "Parcialmente nuboso",
    3: "Cubierto",
    45: "Niebla",
    48: "Niebla con escarcha",
    51: "Llovizna debil",
    53: "Llovizna",
    55: "Llovizna intensa",
    56: "Llovizna helada debil",
    57: "Llovizna helada intensa",
    61: "Lluvia debil",
    63: "Lluvia",
    65: "Lluvia intensa",
    66: "Lluvia helada debil",
    67: "Lluvia helada intensa",
    71: "Nieve debil",
    73: "Nieve",
    75: "Nieve intensa",
    77: "Granizo menudo",
    80: "Chubascos debiles",
    81: "Chubascos",
    82: "Chubascos intensos",
    85: "Nevadas debiles",
    86: "Nevadas intensas",
    95: "Tormenta",
    96: "Tormenta con granizo",
    99: "Tormenta fuerte con granizo",
  };

  return descriptions[code] ?? "Tiempo variable";
}

export function weatherImageForCode(code: number | null) {
  return `/weather/open-meteo-${weatherStateForCode(code)}.svg`;
}

export function weatherStateForCode(code: number | null) {
  if (code === null) return "cloudy";
  if (code === 0) return "clear";
  if (code === 1 || code === 2) return "partly-cloudy";
  if (code === 3) return "cloudy";
  if (code === 45 || code === 48) return "fog";
  if (code >= 51 && code <= 57) return "drizzle";
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return "rain";
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow";
  if (code >= 95) return "storm";
  return "cloudy";
}

export function normalizeForecast(location: Location, data: OpenMeteoResponse): WeatherSnapshot {
  const currentCode = toNumber(data.current?.weather_code);

  return {
    slug: location.slug,
    name: location.name,
    province: location.province,
    href: `/localidad/${location.slug}/`,
    updatedAt: String(data.current?.time ?? ""),
    current: {
      temperature: toNumber(data.current?.temperature_2m),
      apparentTemperature: toNumber(data.current?.apparent_temperature),
      humidity: toNumber(data.current?.relative_humidity_2m),
      precipitation: toNumber(data.current?.precipitation),
      weatherCode: currentCode,
      cloudCover: toNumber(data.current?.cloud_cover),
      windSpeed: toNumber(data.current?.wind_speed_10m),
      windDirection: toNumber(data.current?.wind_direction_10m),
      windGusts: toNumber(data.current?.wind_gusts_10m),
      description: describeWeatherCode(currentCode),
      image: weatherImageForCode(currentCode),
    },
    today: getDailyPoint(data, 0),
    hourly: getHourlyPoints(data),
    daily: getDailyPoints(data),
  };
}

export function formatTemperature(value: number | null) {
  return value === null ? "--" : `${Math.round(value)}°`;
}

export function formatPercent(value: number | null) {
  return value === null ? "--" : `${Math.round(value)}%`;
}

export function formatSpeed(value: number | null) {
  return value === null ? "--" : `${Math.round(value)} km/h`;
}

export function formatAmount(value: number | null) {
  return value === null ? "--" : `${roundOne(value)} mm`;
}

export function formatUv(value: number | null) {
  return value === null ? "--" : String(roundOne(value));
}

export function formatHour(value: string) {
  if (!value) return "--";
  return new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Madrid",
  }).format(new Date(value));
}

export function formatDay(value: string, long = false) {
  if (!value) return "--";
  return new Intl.DateTimeFormat("es-ES", {
    weekday: long ? "long" : "short",
    day: "numeric",
    timeZone: "Europe/Madrid",
  }).format(new Date(value));
}

export function formatUpdatedAt(value: string) {
  if (!value) return "Actualizando";
  return `Actualizado ${formatHour(value)}`;
}

export function windDirectionLabel(degrees: number | null) {
  if (degrees === null) return "--";
  const labels = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
  return labels[Math.round(degrees / 45) % 8];
}

function getHourlyPoints(data: OpenMeteoResponse): HourlyPoint[] {
  const times = data.hourly?.time ?? [];

  return times
    .map((time, index) => {
      const weatherCode = toNumber(data.hourly?.weather_code?.[index]);
      return {
        time: String(time),
        temperature: toNumber(data.hourly?.temperature_2m?.[index]),
        rainProbability: toNumber(data.hourly?.precipitation_probability?.[index]),
        precipitation: toNumber(data.hourly?.precipitation?.[index]),
        weatherCode,
        windSpeed: toNumber(data.hourly?.wind_speed_10m?.[index]),
        windGusts: toNumber(data.hourly?.wind_gusts_10m?.[index]),
        description: describeWeatherCode(weatherCode),
        image: weatherImageForCode(weatherCode),
      };
    });
}

function getDailyPoints(data: OpenMeteoResponse): DailyPoint[] {
  const times = data.daily?.time ?? [];
  return times.map((time, index) => getDailyPoint(data, index, String(time)));
}

function getDailyPoint(data: OpenMeteoResponse, index: number, fallbackDate = ""): DailyPoint {
  const weatherCode = toNumber(data.daily?.weather_code?.[index]);

  return {
    date: String(data.daily?.time?.[index] ?? fallbackDate),
    weatherCode,
    description: describeWeatherCode(weatherCode),
    image: weatherImageForCode(weatherCode),
    max: toNumber(data.daily?.temperature_2m_max?.[index]),
    min: toNumber(data.daily?.temperature_2m_min?.[index]),
    precipitationSum: toNumber(data.daily?.precipitation_sum?.[index]),
    precipitationProbability: toNumber(data.daily?.precipitation_probability_max?.[index]),
    windMax: toNumber(data.daily?.wind_speed_10m_max?.[index]),
    gustsMax: toNumber(data.daily?.wind_gusts_10m_max?.[index]),
    uvMax: toNumber(data.daily?.uv_index_max?.[index]),
  };
}

function toNumber(value: number | string | undefined) {
  if (value === undefined || value === null || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function roundOne(value: number) {
  return Math.round(value * 10) / 10;
}
