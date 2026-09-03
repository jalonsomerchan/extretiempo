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
    title: "El tiempo hoy en Extremadura",
    shortTitle: "Hoy",
    subtitle: "Resumen operativo del día con calor, lluvia, viento, UV y avisos prácticos calculados desde municipios extremeños.",
    kind: "today",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Resumen regional",
  },
  {
    slug: "rankings",
    title: "Rankings meteorológicos de Extremadura",
    shortTitle: "Rankings",
    subtitle: "Los municipios más calurosos, fríos, lluviosos, ventosos y con UV más alto ahora mismo en Extremadura.",
    kind: "rankings",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Comparativa regional",
  },
  {
    slug: "fin-de-semana",
    title: "El tiempo este fin de semana en Extremadura",
    shortTitle: "Fin de semana",
    subtitle: "Sábado y domingo por localidad, con temperatura media, lluvia acumulada y recomendación rápida para planificar en Extremadura.",
    kind: "weekend",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Planificación",
  },
  {
    slug: "lluvia",
    title: "Dónde va a llover en Extremadura",
    shortTitle: "Lluvia",
    subtitle: "Probabilidad de lluvia, precipitación prevista y próximas horas más delicadas en municipios de Cáceres y Badajoz.",
    kind: "rain",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Precipitación",
  },
  {
    slug: "calor",
    title: "Dónde hará más calor en Extremadura",
    shortTitle: "Calor",
    subtitle: "Ranking de máximas, sensación térmica y calor previsto en municipios extremeños para organizar el día.",
    kind: "heat",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Temperatura",
  },
  {
    slug: "heladas",
    title: "Riesgo de heladas en Extremadura",
    shortTitle: "Heladas",
    subtitle: "Mínimas de los próximos días y municipios con riesgo de helada o frío intenso en Cáceres y Badajoz.",
    kind: "frost",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Campo y madrugada",
  },
  {
    slug: "viento",
    title: "Viento y rachas en Extremadura",
    shortTitle: "Viento",
    subtitle: "Localidades con más viento, rachas máximas y franjas horarias a vigilar en Extremadura.",
    kind: "wind",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Viento",
  },
  {
    slug: "calidad-del-aire",
    title: "Calidad del aire en Extremadura",
    shortTitle: "Aire",
    subtitle: "AQI europeo, partículas PM10/PM2.5, ozono y dióxido de nitrógeno con datos CAMS vía Open-Meteo.",
    kind: "air",
    sourceLabel: "Open-Meteo Air Quality API",
    eyebrow: "Salud ambiental",
  },
  {
    slug: "polen",
    title: "Polen en Extremadura",
    shortTitle: "Polen",
    subtitle: "Gramíneas, olivo, abedul y ambrosía para personas alérgicas, cuando CAMS publica datos de temporada.",
    kind: "pollen",
    sourceLabel: "Open-Meteo Air Quality API",
    eyebrow: "Alergias",
  },
  {
    slug: "campo",
    title: "Tiempo para el campo en Extremadura",
    shortTitle: "Campo",
    subtitle: "Riego, heladas, viento y evapotranspiración estimada para huertos y agricultura local en Extremadura.",
    kind: "field",
    sourceLabel: "Open-Meteo Forecast API",
    eyebrow: "Agricultura",
  },
  {
    slug: "historico",
    title: "Histórico meteorológico reciente en Extremadura",
    shortTitle: "Histórico",
    subtitle: "Últimos 30 días por localidad: lluvia acumulada, días calurosos, noches frías y extremos recientes.",
    kind: "history",
    sourceLabel: "Open-Meteo Historical Weather API",
    eyebrow: "Climatología reciente",
  },
  {
    slug: "clima-extremadura",
    title: "Clima y tendencia local en Extremadura",
    shortTitle: "Clima",
    subtitle: "Página preparada para comparar proyecciones 2035-2050 con datos climáticos libres de Open-Meteo.",
    kind: "climate",
    sourceLabel: "Open-Meteo Climate API",
    eyebrow: "Cambio climático",
  },
  {
    slug: "rios",
    title: "Ríos y crecidas en Extremadura",
    shortTitle: "Ríos",
    subtitle: "Caudal fluvial estimado para puntos del Tajo, Guadiana y afluentes. No sustituye avisos oficiales.",
    kind: "rivers",
    sourceLabel: "Open-Meteo Flood API",
    eyebrow: "Hidrología",
  },
];

export function getInsightPage(slug: string) {
  return insightPages.find((page) => page.slug === slug);
}
