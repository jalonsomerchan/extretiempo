export type Location = {
  slug: string;
  name: string;
  province: string;
  latitude: number;
  longitude: number;
  featured?: boolean;
};

export const locations: Location[] = [
  {
    slug: "badajoz",
    name: "Badajoz",
    province: "Badajoz",
    latitude: 38.8786,
    longitude: -6.9703,
    featured: true,
  },
  {
    slug: "caceres",
    name: "Cáceres",
    province: "Caceres",
    latitude: 39.4753,
    longitude: -6.3724,
    featured: true,
  },
  {
    slug: "merida",
    name: "Mérida",
    province: "Badajoz",
    latitude: 38.9161,
    longitude: -6.3437,
    featured: true,
  },
  {
    slug: "plasencia",
    name: "Plasencia",
    province: "Caceres",
    latitude: 40.0312,
    longitude: -6.0885,
    featured: true,
  },
  {
    slug: "don-benito",
    name: "Don Benito",
    province: "Badajoz",
    latitude: 38.9563,
    longitude: -5.8616,
    featured: true,
  },
  {
    slug: "zafra",
    name: "Zafra",
    province: "Badajoz",
    latitude: 38.4254,
    longitude: -6.4173,
    featured: true,
  },
  {
    slug: "navalmoral-de-la-mata",
    name: "Navalmoral de la Mata",
    province: "Caceres",
    latitude: 39.8916,
    longitude: -5.5406,
  },
  {
    slug: "almendralejo",
    name: "Almendralejo",
    province: "Badajoz",
    latitude: 38.6832,
    longitude: -6.4075,
  },
  {
    slug: "villanueva-de-la-serena",
    name: "Villanueva de la Serena",
    province: "Badajoz",
    latitude: 38.9739,
    longitude: -5.8008,
  },
  {
    slug: "montijo",
    name: "Montijo",
    province: "Badajoz",
    latitude: 38.9084,
    longitude: -6.6179,
  },
  {
    slug: "trujillo",
    name: "Trujillo",
    province: "Caceres",
    latitude: 39.4579,
    longitude: -5.882,
  },
  {
    slug: "coria",
    name: "Coria",
    province: "Caceres",
    latitude: 39.9841,
    longitude: -6.536,
  },
  {
    slug: "piornal",
    name: "Piornal",
    province: "Caceres",
    latitude: 40.1178,
    longitude: -5.8486,
  },
  {
    slug: "navezuelas",
    name: "Navezuelas",
    province: "Caceres",
    latitude: 39.5117,
    longitude: -5.4386,
  },
  {
    slug: "miajadas",
    name: "Miajadas",
    province: "Caceres",
    latitude: 39.1513,
    longitude: -5.9084,
  },
  {
    slug: "jaraiz-de-la-vera",
    name: "Jaraíz de la Vera",
    province: "Caceres",
    latitude: 40.0605,
    longitude: -5.7543,
  },
  {
    slug: "moraleja",
    name: "Moraleja",
    province: "Caceres",
    latitude: 40.0668,
    longitude: -6.6596,
  },
  {
    slug: "valencia-de-alcantara",
    name: "Valencia de Alcántara",
    province: "Caceres",
    latitude: 39.4115,
    longitude: -7.2444,
  },
  {
    slug: "logrosan",
    name: "Logrosán",
    province: "Caceres",
    latitude: 39.3365,
    longitude: -5.4928,
  },
  {
    slug: "olivenza",
    name: "Olivenza",
    province: "Badajoz",
    latitude: 38.6844,
    longitude: -7.1009,
  },
  {
    slug: "jerez-de-los-caballeros",
    name: "Jerez de los Caballeros",
    province: "Badajoz",
    latitude: 38.3206,
    longitude: -6.7724,
  },
  {
    slug: "llerena",
    name: "Llerena",
    province: "Badajoz",
    latitude: 38.2333,
    longitude: -6.0159,
  },
];

export const featuredLocations = locations.filter((location) => location.featured);

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug);
}
