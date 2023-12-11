import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import useCartStore from "../store/cartStore";

export default function CardItem({ food, loading }) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  function handleDecreaseQuantity() {
    setQuantity((prevState) => Math.max(prevState - 1, 1));
  }

  function handleIncreaseQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleAddToCart() {
    const cartItem = {
      id: food.id,
      name: food.name,
      image: food.image,
      price: food.price,
      category: food.category,
      quantity: quantity,
    };

    addToCart(cartItem);
    setQuantity(1);
    toast.success(`${quantity} ${food.name}(s) added to the cart!`);
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Menyertakan pecahan hanya jika diperlukan
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      {loading ? (
        <div className="bg-orange-500 bg-opacity-10 h-[17rem] backdrop-filter backdrop-blur-[2.8px] rounded-md mt-20 rounded-tr-3xl rounded-bl-3xl relative flex flex-col gap-7 items-center p-5">
          <div className="invisible">
            <div className="group transition-transform duration-300 transform hover:scale-105">
              <Image
                src={food.image}
                alt=""
                width={120}
                height={120}
                className="-mt-20 transition-transform duration-300 group-hover:scale-125"
                priority
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-center font-bold text-xl text-base-sub-title">
                {food.name}
              </h3>
              <p className="text-center font-normal text-base text-base-label">
                {food.category}
              </p>
            </div>

            <div className="flex gap-2 items-center ">
              <p className="mr-3 text-lg font-semibold">
                {formatCurrency(food.price)}
              </p>
              <div className="flex items-center justify-around p-1 w-16 h-10 bg-white rounded-lg">
                <button
                  className="text-base text-violet-700 p-1 transition-all duration-300 hover:text-black"
                  onClick={handleDecreaseQuantity}
                >
                  <Minus className="text-orange-500" />
                </button>
                <span className="text-base text-base-title">{quantity}</span>
                <button
                  className="text-base text-violet-700 p-1 transition-all duration-300 hover:text-black"
                  onClick={handleIncreaseQuantity}
                >
                  <Plus className="text-orange-500" />
                </button>
              </div>

              <div>
                <button className="bg-orange-500 rounded-md w-9 h-9 flex justify-center items-center transition-all duration-300 hover:bg-orange-600">
                  <ShoppingCart weight="fill" className="text-white text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-orange-500 w-[18rem] bg-opacity-10 backdrop-filter backdrop-blur-[2.8px] rounded-md mt-20 rounded-tr-3xl rounded-bl-3xl relative flex flex-col gap-7 items-center p-5">
          <div className="group transition-transform duration-300 transform hover:scale-105">
            <Image
              src={food.image}
              alt=""
              width={120}
              height={120}
              className="-mt-20 transition-transform duration-300 group-hover:scale-125"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-center font-bold text-xl text-base-sub-title">
              {food.name}
            </h3>
            <p className="text-center font-normal text-base text-base-label">
              {food.category}
            </p>
          </div>

          <div className="flex gap-2 items-center ">
            <p className="mr-3 text-lg font-semibold">
              {formatCurrency(food.price)}
            </p>
            <div className="flex items-center justify-around p-1 w-16 h-10 bg-white rounded-lg">
              <button
                className="text-base text-violet-700 p-1 transition-all duration-300 hover:text-black"
                onClick={handleDecreaseQuantity}
              >
                <Minus className="text-orange-500" weight="bold" />
              </button>
              <span className="text-base text-base-title">{quantity}</span>
              <button
                className="text-base text-violet-700 p-1 transition-all duration-300 hover:text-black"
                onClick={handleIncreaseQuantity}
              >
                <Plus className="text-orange-500" weight="bold" />
              </button>
            </div>

            <div>
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 rounded-md w-9 h-9 flex justify-center items-center transition-all duration-300 hover:bg-orange-600"
              >
                <ShoppingCart weight="fill" className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
