export type ProvincePage = {
  slug: string;
  dataKey: string;
  name: string;
  title: string;
  description: string;
  mapSlug: string;
  intro: string;
};

export const provincePages: ProvincePage[] = [
  {
    slug: "caceres",
    dataKey: "Caceres",
    name: "Cáceres",
    title: "El tiempo en la provincia de Cáceres | ExtreTiempo",
    description:
      "Previsión meteorológica para municipios de la provincia de Cáceres: temperatura, lluvia, viento, heladas, polen, mapas y próximos días.",
    mapSlug: "caceres",
    intro:
      "Consulta el tiempo municipal en el norte de Extremadura: Cáceres capital, Plasencia, Piornal, Navezuelas, Trujillo, Coria, Navalmoral de la Mata y más localidades.",
  },
  {
    slug: "badajoz",
    dataKey: "Badajoz",
    name: "Badajoz",
    title: "El tiempo en la provincia de Badajoz | ExtreTiempo",
    description:
      "Previsión meteorológica para municipios de la provincia de Badajoz: temperatura, lluvia, viento, calor, mapas y próximos días.",
    mapSlug: "badajoz",
    intro:
      "Consulta el tiempo municipal en el sur de Extremadura: Badajoz capital, Mérida, Don Benito, Zafra, Almendralejo, Olivenza, Llerena y más localidades.",
  },
];
