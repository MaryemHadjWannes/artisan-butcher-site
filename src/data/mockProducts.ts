import beefSteak from "@/assets/products/beef-steak.jpg";
import charcuterie from "@/assets/products/charcuterie.jpg";
import chicken from "@/assets/products/chicken.jpg";
import lamb from "@/assets/products/lamb.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Entrecôte de Bœuf",
    category: "Bœuf",
    price: 28.90,
    unit: "kg",
    image: beefSteak,
    description: "Entrecôte persillée issue de bœuf français, maturation 21 jours.",
  },
  {
    id: 2,
    name: "Côtelettes d'Agneau",
    category: "Agneau",
    price: 32.50,
    unit: "kg",
    image: lamb,
    description: "Côtelettes d'agneau français, tendres et savoureuses.",
  },
  {
    id: 3,
    name: "Poulet Fermier",
    category: "Volaille",
    price: 14.90,
    unit: "kg",
    image: chicken,
    description: "Poulet fermier Label Rouge, élevé en plein air.",
  },
  {
    id: 4,
    name: "Saucisson Artisanal",
    category: "Charcuterie",
    price: 24.90,
    unit: "kg",
    image: charcuterie,
    description: "Saucisson sec fabriqué dans notre atelier selon tradition.",
  },
  {
    id: 5,
    name: "Filet de Bœuf",
    category: "Bœuf",
    price: 42.90,
    unit: "kg",
    image: beefSteak,
    description: "Pièce noble et tendre, idéale pour vos grandes occasions.",
  },
  {
    id: 6,
    name: "Gigot d'Agneau",
    category: "Agneau",
    price: 29.90,
    unit: "kg",
    image: lamb,
    description: "Gigot d'agneau français, parfait pour vos rôtis.",
  },
  {
    id: 7,
    name: "Cuisses de Poulet",
    category: "Volaille",
    price: 9.90,
    unit: "kg",
    image: chicken,
    description: "Cuisses de poulet fermier, goûteuses et moelleuses.",
  },
  {
    id: 8,
    name: "Pâté de Campagne",
    category: "Charcuterie",
    price: 18.50,
    unit: "kg",
    image: charcuterie,
    description: "Pâté maison préparé selon notre recette traditionnelle.",
  },
];

export const categories = ["Tous", "Bœuf", "Veau", "Volaille", "Agneau", "Charcuterie"];
