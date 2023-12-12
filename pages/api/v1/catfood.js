// pages/api/catFood.js
import product1 from "../../../assets/product1.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";
import product5 from "../../../assets/product5.png";
import product6 from "../../../assets/product6.png";
import product7 from "../../../assets/product7.png";
import product8 from "../../../assets/product8.png";
import product9 from "../../../assets/product9.png";
import product10 from "../../../assets/product10.png";
import product11 from "../../../assets/product11.png";
import product12 from "../../../assets/product12.png";
import product13 from "../../../assets/product13.png";
import product14 from "../../../assets/product14.png";
import product15 from "../../../assets/product15.png";
import product16 from "../../../assets/product16.png";
import product17 from "../../../assets/product17.png";
import product18 from "../../../assets/product18.png";
import product19 from "../../../assets/product19.png";

const catFoods = [
  {
    id: 1,
    name: "Royal Canin Adult",
    image: product1,
    price: 250000,
    category: "Dry Food",
  },
  {
    id: 2,
    name: "Hill's Science Diet",
    image: product2,
    price: 189000,
    category: "Dry Food",
  },
  {
    id: 3,
    name: "Purina Pro Plan",
    image: product3,
    price: 225000,
    category: "Dry Food",
  },
  {
    id: 4,
    name: "Fancy Feast Gravy",
    image: product4,
    price: 129000,
    category: "Wet Food",
  },
  {
    id: 5,
    name: "Iams ProActive",
    image: product5,
    price: 179000,
    category: "Dry Food",
  },
  {
    id: 6,
    name: "Whiskas Pouch",
    image: product6,
    price: 95000,
    category: "Wet Food",
  },
  {
    id: 7,
    name: "Blue Buffalo",
    image: product7,
    price: 275000,
    category: "Dry Food",
  },
  {
    id: 8,
    name: "Sheba Perfect",
    image: product8,
    price: 135000,
    category: "Wet Food",
  },
  {
    id: 9,
    name: "Nutro Wholesome",
    image: product9,
    price: 198000,
    category: "Dry Food",
  },
  {
    id: 10,
    name: "Purina Fancy Feast",
    image: product10,
    price: 120000,
    category: "Wet Food",
  },
  {
    id: 11,
    name: "Wellness Grain",
    image: product11,
    price: 255000,
    category: "Dry Food",
  },
  {
    id: 12,
    name: "Friskies Classic",
    image: product12,
    price: 85000,
    category: "Wet Food",
  },
  {
    id: 13,
    name: "Purina ONE Indoor",
    image: product13,
    price: 210000,
    category: "Dry Food",
  },
  {
    id: 14,
    name: "Meow Mix Tender",
    image: product14,
    price: 98000,
    category: "Wet Food",
  },
  {
    id: 15,
    name: "Science Diet",
    image: product15,
    price: 265000,
    category: "Dry Food",
  },
  {
    id: 16,
    name: "Purina Friskies",
    image: product16,
    price: 115000,
    category: "Wet Food",
  },
  {
    id: 17,
    name: "Nulo Freestyle",
    image: product17,
    price: 289000,
    category: "Dry Food",
  },
  {
    id: 18,
    name: "Hill's Science Diet",
    image: product18,
    price: 205000,
    category: "Dry Food",
  },
  {
    id: 19,
    name: "Purina Beyond",
    image: product19,
    price: 220000,
    category: "Dry Food",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    const { category } = req.query;

    const filteredCatFoods = category
      ? catFoods.filter((food) => food.category === category)
      : catFoods;

    res.status(200).json(filteredCatFoods);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
