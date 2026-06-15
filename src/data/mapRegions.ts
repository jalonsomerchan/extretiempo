import type { Location } from "./locations";

export type MapRegion = {
  slug: "extremadura" | "espana" | "europa";
  title: string;
  subtitle: string;
  center: [number, number];
  zoom: number;
  cities: Location[];
};

export const mapRegions: MapRegion[] = [
  {
    slug: "extremadura",
    title: "Mapa de Extremadura",
    subtitle: "Tiempo actual y evolucion horaria en ciudades extremenas",
    center: [39.15, -6.25],
    zoom: 8,
    cities: [
      { slug: "badajoz", name: "Badajoz", province: "Badajoz", latitude: 38.8786, longitude: -6.9703 },
      { slug: "caceres", name: "Caceres", province: "Caceres", latitude: 39.4753, longitude: -6.3724 },
      { slug: "merida", name: "Merida", province: "Badajoz", latitude: 38.9161, longitude: -6.3437 },
      { slug: "plasencia", name: "Plasencia", province: "Caceres", latitude: 40.0312, longitude: -6.0885 },
      { slug: "don-benito", name: "Don Benito", province: "Badajoz", latitude: 38.9563, longitude: -5.8616 },
      { slug: "zafra", name: "Zafra", province: "Badajoz", latitude: 38.4254, longitude: -6.4173 },
      {
        slug: "navalmoral-de-la-mata",
        name: "Navalmoral de la Mata",
        province: "Caceres",
        latitude: 39.8916,
        longitude: -5.5406,
      },
      { slug: "almendralejo", name: "Almendralejo", province: "Badajoz", latitude: 38.6832, longitude: -6.4075 },
    ],
  },
  {
    slug: "espana",
    title: "Mapa de Espana",
    subtitle: "Principales ciudades con temperatura, maximas, minimas y estado del cielo",
    center: [40.1, -3.7],
    zoom: 5,
    cities: [
      { slug: "madrid", name: "Madrid", province: "Madrid", latitude: 40.4165, longitude: -3.7026 },
      { slug: "barcelona", name: "Barcelona", province: "Barcelona", latitude: 41.3888, longitude: 2.159 },
      { slug: "valencia", name: "Valencia", province: "Valencia", latitude: 39.4698, longitude: -0.3774 },
      { slug: "sevilla", name: "Sevilla", province: "Sevilla", latitude: 37.3828, longitude: -5.9732 },
      { slug: "zaragoza", name: "Zaragoza", province: "Zaragoza", latitude: 41.6561, longitude: -0.8773 },
      { slug: "malaga", name: "Malaga", province: "Malaga", latitude: 36.7202, longitude: -4.4203 },
      { slug: "murcia", name: "Murcia", province: "Murcia", latitude: 37.987, longitude: -1.13 },
      { slug: "palma", name: "Palma", province: "Illes Balears", latitude: 39.5694, longitude: 2.6502 },
      { slug: "bilbao", name: "Bilbao", province: "Bizkaia", latitude: 43.2627, longitude: -2.9253 },
      { slug: "valladolid", name: "Valladolid", province: "Valladolid", latitude: 41.6552, longitude: -4.7237 },
      { slug: "vigo", name: "Vigo", province: "Pontevedra", latitude: 42.2328, longitude: -8.7226 },
      { slug: "las-palmas", name: "Las Palmas", province: "Las Palmas", latitude: 28.0997, longitude: -15.4134 },
    ],
  },
  {
    slug: "europa",
    title: "Mapa de Europa",
    subtitle: "Capitales y grandes ciudades europeas con evolucion horaria",
    center: [50.5, 10.5],
    zoom: 4,
    cities: [
      { slug: "madrid", name: "Madrid", province: "Espana", latitude: 40.4165, longitude: -3.7026 },
      { slug: "lisboa", name: "Lisboa", province: "Portugal", latitude: 38.7167, longitude: -9.1333 },
      { slug: "paris", name: "Paris", province: "Francia", latitude: 48.8534, longitude: 2.3488 },
      { slug: "londres", name: "Londres", province: "Reino Unido", latitude: 51.5085, longitude: -0.1257 },
      { slug: "berlin", name: "Berlin", province: "Alemania", latitude: 52.5244, longitude: 13.4105 },
      { slug: "roma", name: "Roma", province: "Italia", latitude: 41.8919, longitude: 12.5113 },
      { slug: "amsterdam", name: "Amsterdam", province: "Paises Bajos", latitude: 52.374, longitude: 4.8897 },
      { slug: "bruselas", name: "Bruselas", province: "Belgica", latitude: 50.8505, longitude: 4.3488 },
      { slug: "viena", name: "Viena", province: "Austria", latitude: 48.2085, longitude: 16.3721 },
      { slug: "praga", name: "Praga", province: "Chequia", latitude: 50.088, longitude: 14.4208 },
      { slug: "varsovia", name: "Varsovia", province: "Polonia", latitude: 52.2298, longitude: 21.0118 },
      { slug: "atenas", name: "Atenas", province: "Grecia", latitude: 37.9838, longitude: 23.7275 },
      { slug: "dublin", name: "Dublin", province: "Irlanda", latitude: 53.3331, longitude: -6.2489 },
      { slug: "estocolmo", name: "Estocolmo", province: "Suecia", latitude: 59.3326, longitude: 18.0649 },
    ],
  },
];

export function getMapRegion(slug: string) {
  return mapRegions.find((region) => region.slug === slug);
}
