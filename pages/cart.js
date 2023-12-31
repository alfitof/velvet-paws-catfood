// pages/cart.js
import useCartStore from "../store/cartStore";
import css from "../styles/Cart.module.css";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [token, setToken] = useState("");

  function handleRemoveFromCart(index) {
    const removedItem = cartItems[index];
    removeFromCart(index);

    toast.success(`${removedItem.name} removed from the cart!`);
  }
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const proses = async () => {
    const data = {
      total: totalPrice,
    };
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.post(
      "http://localhost:3000/api/v1/route",
      data,
      config
    );
    setToken(response.data.token);
  };

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: function (result) {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken("");
          // Handle successful payment
        },
        onPending: function (result) {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken("");
          // Handle pending payment
        },
        onError: function (error) {
          console.error("Payment error:", error);
          setToken("");
          // Handle payment error
        },
        onClose: function () {
          console.log("Belum Menyelesaikan Pembayaran");
          setToken("");
        },
      });
    }
  }, [token]);

  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const midtransClientKey = "SB-Mid-client-YBX8emzO7GA5uYBc";

    const scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;
    scriptTag.setAttribute("data-client-key", midtransClientKey);

    scriptTag.onload = () => {
      // Initialize Snap.js here
      window.snap = window.snap || {};
      window.snap.pay = window.snap.pay || function () {};
    };

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Velvet Paws - Cart</title>
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
      <div className="grid grid-cols-1 mt-18 p-8 text-xs gap-0 lg:grid-cols-3 lg:text-base lg:gap-10 mt-16 lg:mt-28">
        <h2 className="font-bold text-4xl text-base-sub-title text-center mb-6 mt-12 lg:hidden">
          My Cart
        </h2>
        <div className={css.detail}>
          {cartItems.length === 0 ? (
            <p className="text-center font-bold text-lg mb-6">
              Your cart is empty
            </p>
          ) : (
            <table className={css.table}>
              <thead>
                <th>Gambar</th>
                <th>Nama</th>
                <th>Kategori</th>
                <th>Harga</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </thead>
              <tbody className={css.tbody}>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className={css.imageTd}>
                      <Image
                        objectFit="cover"
                        width={85}
                        height={85}
                        className="m-auto"
                        alt=""
                        src={item.image}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.price}</td>
                    <td
                      style={{
                        color: "red",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        handleRemoveFromCart(index);
                      }}
                    >
                      X
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className={css.cart}>
          <span>Summary</span>
          <div className={css.CartDetails}>
            <div>
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{totalPrice}</span>
            </div>
          </div>
          <div className={css.button}>
            <button className="btn" onClick={proses}>
              Pembayaran
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
