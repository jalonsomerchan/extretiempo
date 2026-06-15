export type InsightPageKind =
  | "today"
  | "rankings"
  | "weekend"
  | "rain"
  | "heat"
  | "frost"
  | "wind"
  | "air"
  | "pollen"
  | "field"
  | "history"
  | "climate"
  | "rivers";

export type InsightPage = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  kind: InsightPageKind;
  sourceLabel: string;
  eyebrow: string;
};

export const insightPages: InsightPage[] = [
  {
    slug: "hoy",
    title: "Hoy en Extremadura",
    shortTitle: "Hoy",
    subtitle: "Resumen operativo del dia con calor, lluvia, viento, UV y avisos practicos calculados desde municipios extremenos.",
    kind: "today",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Resumen regional",
  },
  {
    slug: "rankings",
    title: "Rankings meteorologicos",
    shortTitle: "Rankings",
    subtitle: "Los municipios mas calurosos, frios, lluviosos, ventosos y con UV mas alto ahora mismo.",
    kind: "rankings",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Comparativa regional",
  },
  {
    slug: "fin-de-semana",
    title: "El tiempo este fin de semana",
    shortTitle: "Fin de semana",
    subtitle: "Sabado y domingo por localidad, con temperatura media, lluvia acumulada y recomendacion rapida.",
    kind: "weekend",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Planificacion",
  },
  {
    slug: "lluvia",
    title: "Donde va a llover",
    shortTitle: "Lluvia",
    subtitle: "Probabilidad de lluvia, precipitacion prevista y proximas horas mas delicadas en Extremadura.",
    kind: "rain",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Precipitacion",
  },
  {
    slug: "calor",
    title: "Donde hara mas calor",
    shortTitle: "Calor",
    subtitle: "Ranking de maximas, sensacion termica y calor previsto para organizar el dia.",
    kind: "heat",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Temperatura",
  },
  {
    slug: "heladas",
    title: "Riesgo de heladas",
    shortTitle: "Heladas",
    subtitle: "Minimas de los proximos dias y municipios con riesgo de helada o frio intenso.",
    kind: "frost",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Campo y madrugada",
  },
  {
    slug: "viento",
    title: "Viento y rachas",
    shortTitle: "Viento",
    subtitle: "Localidades con mas viento, rachas maximas y franjas horarias a vigilar.",
    kind: "wind",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Viento",
  },
  {
    slug: "calidad-del-aire",
    title: "Calidad del aire",
    shortTitle: "Aire",
    subtitle: "AQI europeo, particulas PM10/PM2.5, ozono y dioxido de nitrogeno con datos CAMS via Open-Meteo.",
    kind: "air",
    sourceLabel: "Open-Meteo Air Quality API",
    eyebrow: "Salud ambiental",
  },
  {
    slug: "polen",
    title: "Polen en Extremadura",
    shortTitle: "Polen",
    subtitle: "Gramineas, olivo, abedul y ambrosia para personas alergicas, cuando CAMS publica datos de temporada.",
    kind: "pollen",
    sourceLabel: "Open-Meteo Air Quality API",
    eyebrow: "Alergias",
  },
  {
    slug: "campo",
    title: "Tiempo para el campo",
    shortTitle: "Campo",
    subtitle: "Riego, heladas, viento y evapotranspiracion estimada para huertos y agricultura local.",
    kind: "field",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Agricultura",
  },
  {
    slug: "historico",
    title: "Historico reciente",
    shortTitle: "Historico",
    subtitle: "Ultimos 30 dias por localidad: lluvia acumulada, dias calurosos, noches frias y extremos recientes.",
    kind: "history",
    sourceLabel: "Open-Meteo Historical Weather API",
    eyebrow: "Climatologia reciente",
  },
  {
    slug: "clima-extremadura",
    title: "Clima y tendencia local",
    shortTitle: "Clima",
    subtitle: "Pagina preparada para comparar proyecciones 2035-2050 con datos climaticos libres de Open-Meteo.",
    kind: "climate",
    sourceLabel: "Open-Meteo Climate API",
    eyebrow: "Cambio climatico",
  },
  {
    slug: "rios",
    title: "Rios y crecidas",
    shortTitle: "Rios",
    subtitle: "Caudal fluvial estimado para puntos del Tajo, Guadiana y afluentes. No sustituye avisos oficiales.",
    kind: "rivers",
    sourceLabel: "Open-Meteo Flood API",
    eyebrow: "Hidrologia",
  },
];

export function getInsightPage(slug: string) {
  return insightPages.find((page) => page.slug === slug);
}
