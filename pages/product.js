import css from "../styles/Home.module.css";
import Head from "next/head";
import Layout from "../components/Layout";
import CardMenu from "../components/CardMenu";
import { useState, useEffect } from "react";

export default function Product() {
  const [catFoods, setCatFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/v1/catfood${
            selectedCategory ? `?category=${selectedCategory}` : ""
          }`
        );
        const data = await response.json();
        setCatFoods(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch function
    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>Velvet Paws - Menu</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
        </Head>
        <main>
          <section className="mt-28 md:mt-36 flex flex-col items-center">
            <h2 className="font-bold text-4xl text-base-sub-title">
              Our Product
            </h2>

            {/* Pilihan kategori */}
            <div className="mt-8 mb-10 flex gap-4">
              <button
                className={`px-4 py-2 rounded-full font-semibold focus:outline-none ${
                  selectedCategory === null
                    ? "bg-orange-500 text-white"
                    : "border-[2px] border-orange-500 text-orange-500"
                }`}
                onClick={() => handleCategoryChange(null)}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-full font-semibold focus:outline-none ${
                  selectedCategory === "Dry Food"
                    ? "bg-orange-500 text-white"
                    : "border-[2px] border-orange-500 text-orange-500"
                }`}
                onClick={() => handleCategoryChange("Dry Food")}
              >
                Dry Food
              </button>
              <button
                className={`px-4 py-2 rounded-full font-semibold focus:outline-none ${
                  selectedCategory === "Wet Food"
                    ? "bg-orange-500 text-white"
                    : "border-[2px] border-orange-500 text-orange-500"
                }`}
                onClick={() => handleCategoryChange("Wet Food")}
              >
                Wet Food
              </button>
            </div>

            {/* Daftar makanan */}
            <div className="grid mb-14 lg:mx-20 grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {catFoods.map((food) => {
                return <CardMenu key={food.id} food={food} loading={loading} />;
              })}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
