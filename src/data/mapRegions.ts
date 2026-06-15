import type { Location } from "./locations";

export type MapRegionSlug = "extremadura" | "favoritos" | "caceres" | "badajoz" | "espana" | "europa";

export type MapRegion = {
  slug: MapRegionSlug;
  title: string;
  shortTitle: string;
  subtitle: string;
  center: [number, number];
  zoom: number;
  cities: Location[];
  source?: "static" | "favorites";
  fitPadding?: [number, number];
  fitMaxZoom?: number;
  singlePlaceZoom?: number;
};

const caceresCities: Location[] = [
  { slug: "caceres", name: "Caceres", province: "Caceres", latitude: 39.4753, longitude: -6.3724 },
  { slug: "plasencia", name: "Plasencia", province: "Caceres", latitude: 40.0312, longitude: -6.0885 },
  { slug: "piornal", name: "Piornal", province: "Caceres", latitude: 40.1178, longitude: -5.8486 },
  { slug: "navezuelas", name: "Navezuelas", province: "Caceres", latitude: 39.5117, longitude: -5.4386 },
  {
    slug: "navalmoral-de-la-mata",
    name: "Navalmoral de la Mata",
    province: "Caceres",
    latitude: 39.8916,
    longitude: -5.5406,
  },
  { slug: "trujillo", name: "Trujillo", province: "Caceres", latitude: 39.4579, longitude: -5.882 },
  { slug: "coria", name: "Coria", province: "Caceres", latitude: 39.9841, longitude: -6.536 },
  { slug: "miajadas", name: "Miajadas", province: "Caceres", latitude: 39.1513, longitude: -5.9084 },
  { slug: "jaraiz-de-la-vera", name: "Jaraiz de la Vera", province: "Caceres", latitude: 40.0605, longitude: -5.7543 },
  { slug: "moraleja", name: "Moraleja", province: "Caceres", latitude: 40.0668, longitude: -6.6596 },
  { slug: "valencia-de-alcantara", name: "Valencia de Alcantara", province: "Caceres", latitude: 39.4115, longitude: -7.2444 },
  { slug: "logrosan", name: "Logrosan", province: "Caceres", latitude: 39.3365, longitude: -5.4928 },
];

const badajozCities: Location[] = [
  { slug: "badajoz", name: "Badajoz", province: "Badajoz", latitude: 38.8786, longitude: -6.9703 },
  { slug: "merida", name: "Merida", province: "Badajoz", latitude: 38.9161, longitude: -6.3437 },
  { slug: "don-benito", name: "Don Benito", province: "Badajoz", latitude: 38.9563, longitude: -5.8616 },
  { slug: "zafra", name: "Zafra", province: "Badajoz", latitude: 38.4254, longitude: -6.4173 },
  { slug: "almendralejo", name: "Almendralejo", province: "Badajoz", latitude: 38.6832, longitude: -6.4075 },
  {
    slug: "villanueva-de-la-serena",
    name: "Villanueva de la Serena",
    province: "Badajoz",
    latitude: 38.9739,
    longitude: -5.8008,
  },
  { slug: "montijo", name: "Montijo", province: "Badajoz", latitude: 38.9084, longitude: -6.6179 },
  { slug: "olivenza", name: "Olivenza", province: "Badajoz", latitude: 38.6844, longitude: -7.1009 },
  {
    slug: "jerez-de-los-caballeros",
    name: "Jerez de los Caballeros",
    province: "Badajoz",
    latitude: 38.3206,
    longitude: -6.7724,
  },
  { slug: "llerena", name: "Llerena", province: "Badajoz", latitude: 38.2333, longitude: -6.0159 },
];

const extremaduraCities = [...badajozCities, ...caceresCities];

export const mapRegions: MapRegion[] = [
  {
    slug: "extremadura",
    title: "Mapa de Extremadura",
    shortTitle: "Extremadura",
    subtitle: "Animacion horaria con temperatura, lluvia, viento y ciclos de dia/noche en municipios extremenos",
    center: [39.12, -6.28],
    zoom: 8,
    fitPadding: [42, 42],
    fitMaxZoom: 8,
    singlePlaceZoom: 10,
    cities: extremaduraCities,
  },
  {
    slug: "favoritos",
    title: "Mapa de tus favoritos",
    shortTitle: "Favoritos",
    subtitle: "Tus municipios guardados se muestran en un mapa animado propio, usando solo este navegador",
    center: [39.15, -6.25],
    zoom: 8,
    fitPadding: [46, 46],
    fitMaxZoom: 10,
    singlePlaceZoom: 10,
    source: "favorites",
    cities: [],
  },
  {
    slug: "caceres",
    title: "Mapa de la provincia de Caceres",
    shortTitle: "Caceres",
    subtitle: "Evolucion meteorologica por horas en localidades de la provincia de Caceres",
    center: [39.72, -6.08],
    zoom: 8,
    fitPadding: [38, 38],
    fitMaxZoom: 9,
    singlePlaceZoom: 10,
    cities: caceresCities,
  },
  {
    slug: "badajoz",
    title: "Mapa de la provincia de Badajoz",
    shortTitle: "Badajoz",
    subtitle: "Evolucion meteorologica por horas en localidades de la provincia de Badajoz",
    center: [38.7, -6.42],
    zoom: 8,
    fitPadding: [38, 38],
    fitMaxZoom: 9,
    singlePlaceZoom: 10,
    cities: badajozCities,
  },
  {
    slug: "espana",
    title: "Mapa de Espana",
    shortTitle: "Espana",
    subtitle: "Principales ciudades con temperatura, estado del cielo y evolucion horaria",
    center: [39.7, -3.75],
    zoom: 5,
    fitPadding: [18, 18],
    fitMaxZoom: 5,
    singlePlaceZoom: 9,
    cities: [
      { slug: "madrid", name: "Madrid", province: "Madrid", latitude: 40.4165, longitude: -3.7026 },
      { slug: "caceres", name: "Caceres", province: "Caceres", latitude: 39.4753, longitude: -6.3724 },
      { slug: "plasencia", name: "Plasencia", province: "Caceres", latitude: 40.0312, longitude: -6.0885 },
      { slug: "badajoz", name: "Badajoz", province: "Badajoz", latitude: 38.8786, longitude: -6.9703 },
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
    shortTitle: "Europa",
    subtitle: "Capitales y grandes ciudades europeas con evolucion horaria",
    center: [50.1, 9.5],
    zoom: 4,
    fitPadding: [18, 18],
    fitMaxZoom: 4,
    singlePlaceZoom: 8,
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
