import React from "react";
import Link from "next/link";
import bannerImage from "../assets/kucing 1.png";
import Image from "next/image";
import css from "../styles/Banner.module.css";

export default function Hero() {
  return (
    <div
      className="grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 mt-16 lg:mt-20"
      id="home"
    >
      <div className="mb-16 text-center lg:mb-0 mt-0 lg:mt-8 lg:text-left lg:pl-20">
        <h1 className=" font-bold" id="banner">
          Goyangkan Ekor Bahagia Kucing Anda dengan{" "}
          <span style={{ color: "var(--themeRed)" }}>Velvet Paws Delight!</span>
        </h1>
        <p className="my-6 text-gray-600 leading-8">
          Velvet Paws Delight hadir dengan jaminan kenyamanan di setiap
          suapannya. Berikan kucing Anda perlakuan istimewa dengan hidangan
          lezat yang memenuhi kebutuhan gizi mereka.
        </p>
        <Link href="/menu">
          <button className={`btn ${css.btn}`}>AYO ORDER!</button>
        </Link>
      </div>

      <div className="mt-2">
        <Image
          src={bannerImage}
          layout="intrinsic"
          alt=""
          className="w-[35rem]"
        />
      </div>
    </div>
  );
}
