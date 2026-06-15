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
    name: "Caceres",
    province: "Caceres",
    latitude: 39.4753,
    longitude: -6.3724,
    featured: true,
  },
  {
    slug: "merida",
    name: "Merida",
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
];

export const featuredLocations = locations.filter((location) => location.featured);

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug);
}
