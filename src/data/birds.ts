import birdEagle from "@/assets/bird-eagle.jpg";
import birdPuffin from "@/assets/bird-puffin.jpg";
import birdEider from "@/assets/bird-eider.jpg";
import birdTern from "@/assets/bird-tern.jpg";
import birdGull from "@/assets/bird-gull.jpg";
import birdOystercatcher from "@/assets/bird-oystercatcher.jpg";
import birdGannet from "@/assets/bird-gannet.jpg";

export type BirdCategory = "seabirds" | "waterfowl" | "raptors" | "forest_birds" | "waders" | "mountain_birds" | "songbirds";

export const allCategories: { value: BirdCategory; label: string }[] = [
  { value: "seabirds", label: "Seabirds" },
  { value: "waterfowl", label: "Waterfowl" },
  { value: "raptors", label: "Raptors" },
  { value: "forest_birds", label: "Forest Birds" },
  { value: "waders", label: "Waders" },
  { value: "mountain_birds", label: "Mountain Birds" },
  { value: "songbirds", label: "Songbirds" },
];

export interface BirdPhoto {
  id: string;
  species: string;
  commonName: string;
  scientificName: string;
  categories: BirdCategory[];
  image: string;
  location: string;
  lat: number;
  lng: number;
  date: string;
  camera: string;
  lens: string;
  settings: string;
  description: string;
}

export const birdPhotos: BirdPhoto[] = [
  {
    id: "1",
    species: "White-tailed Eagle",
    commonName: "Havørn",
    scientificName: "Haliaeetus albicilla",
    categories: ["raptors"],
    image: birdEagle,
    location: "Lofoten, Nordland",
    lat: 68.2,
    lng: 14.4,
    date: "2024-03-15",
    camera: "Nikon Z9",
    lens: "600mm f/4",
    settings: "1/2000s · f/5.6 · ISO 800",
    description: "White-tailed eagle soaring over the fjords of Lofoten during early spring migration.",
  },
  {
    id: "2",
    species: "Atlantic Puffin",
    commonName: "Lunde",
    scientificName: "Fratercula arctica",
    categories: ["seabirds"],
    image: birdPuffin,
    location: "Runde, Møre og Romsdal",
    lat: 62.4,
    lng: 5.6,
    date: "2024-06-22",
    camera: "Sony A1",
    lens: "200-600mm f/5.6-6.3",
    settings: "1/1600s · f/6.3 · ISO 640",
    description: "Atlantic puffin resting on the clifftops of Runde bird island during nesting season.",
  },
  {
    id: "3",
    species: "Common Eider",
    commonName: "Ærfugl",
    scientificName: "Somateria mollissima",
    categories: ["waterfowl", "seabirds"],
    image: birdEider,
    location: "Vega, Nordland",
    lat: 65.7,
    lng: 11.9,
    date: "2024-05-10",
    camera: "Canon R5",
    lens: "100-500mm f/4.5-7.1",
    settings: "1/1250s · f/7.1 · ISO 500",
    description: "Male common eider in full breeding plumage on the calm waters around Vega archipelago.",
  },
  {
    id: "4",
    species: "Arctic Tern",
    commonName: "Rødnebbterne",
    scientificName: "Sterna paradisaea",
    categories: ["seabirds"],
    image: birdTern,
    location: "Tromsø, Troms",
    lat: 69.6,
    lng: 19.0,
    date: "2024-07-04",
    camera: "Nikon Z8",
    lens: "400mm f/2.8",
    settings: "1/3200s · f/4 · ISO 400",
    description: "Arctic tern in graceful flight over the arctic waters near Tromsø during midnight sun.",
  },
  {
    id: "5",
    species: "Herring Gull",
    commonName: "Gråmåke",
    scientificName: "Larus argentatus",
    categories: ["seabirds"],
    image: birdGull,
    location: "Bergen, Vestland",
    lat: 60.4,
    lng: 5.3,
    date: "2024-04-18",
    camera: "Sony A7RV",
    lens: "70-200mm f/2.8",
    settings: "1/800s · f/4 · ISO 320",
    description: "Herring gull perched at the historic Bergen harbor on a moody overcast morning.",
  },
  {
    id: "6",
    species: "Eurasian Oystercatcher",
    commonName: "Tjeld",
    scientificName: "Haematopus ostralegus",
    categories: ["waders"],
    image: birdOystercatcher,
    location: "Jæren, Rogaland",
    lat: 58.8,
    lng: 5.5,
    date: "2024-04-02",
    camera: "Nikon Z9",
    lens: "500mm f/5.6 PF",
    settings: "1/1000s · f/5.6 · ISO 640",
    description: "Eurasian oystercatcher foraging on the rocky shores of Jæren during spring arrival.",
  },
  {
    id: "7",
    species: "Northern Gannet",
    commonName: "Havsule",
    scientificName: "Morus bassanus",
    categories: ["seabirds"],
    image: birdGannet,
    location: "Runde, Møre og Romsdal",
    lat: 62.39,
    lng: 5.62,
    date: "2024-06-28",
    camera: "Canon R3",
    lens: "600mm f/4",
    settings: "1/4000s · f/5.6 · ISO 1000",
    description: "Northern gannet emerging from a spectacular plunge dive in the rich waters off Runde.",
  },
];
