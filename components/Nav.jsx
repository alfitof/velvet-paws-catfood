import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UilShoppingBag } from "@iconscout/react-unicons";
import Image from "next/image";
import Logo from "../assets/kucing 2.png";
import css from "../styles/Header.module.css";
import { useRouter } from "next/router";
import useCartStore from "../store/cartStore";

const Nav = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const router = useRouter();
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30  transition-all " +
          (scrollActive
            ? " shadow-md pt-0 bg-[#ffeee3]"
            : " pt-4 bg-transparent")
        }
      >
        <nav className="max-w-screen-xl mx-auto grid grid-flow-col py-5 px-5">
          <Link href="/">
            <div className={css.logo}>
              <Image src={Logo} alt="Logo" width={55} height={55} />
              <span>Velvet Paws Delight</span>
            </div>
          </Link>
          <ul className="hidden lg:flex col-start-3 col-end-8 text-black-500  items-center justify-center">
            <Link activeClassName="active" href="/">
              <div
                className={
                  "px-4 py-2 mx-2 cursor-pointer font-semibold animation-hover inline-block relative" +
                  (router.pathname == "/"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500")
                }
              >
                Home
              </div>
            </Link>
            <Link activeClassName="active" href="/menu">
              <div
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover font-semibold inline-block relative" +
                  (router.pathname == "/menu"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Menu
              </div>
            </Link>
            <Link activeClassName="active" href="/contact">
              <div
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover font-semibold inline-block relative" +
                  (router.pathname == "/contact"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Contact
              </div>
            </Link>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div className={css.navright}>
              <Link href="/cart">
                <div className={css.cart2}>
                  <UilShoppingBag size={38} color="#2e2e2e" />
                  <div className={css.badge2}>{cartItems.length}</div>
                </div>
              </Link>

              {/* <Button /> */}
              <button className="btn" id="buttonLog" onClick={() => signIn()}>
                Login
              </button>
            </div>
            {/* <ButtonOutline>Sign Up</ButtonOutline> */}
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed sm:hidden bottom-0 left-0 right-0 z-20 sm:px-8 ">
        <div className="bg-white sm:px-3">
          <ul className="flex w-full justify-between items-center px-8 text-black-500">
            <Link activeClassName="active" href="/">
              <div
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (router.pathname == "/"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="home"
                  className="mb-1"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023"
                    transform="translate(2.5 2)"
                  ></path>
                </svg>
                Home
              </div>
            </Link>
            <Link activeClassName="active" href="/menu">
              <div
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (router.pathname == "/menu"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="spoon"
                  width="28"
                  height="28"
                >
                  <path
                    fill="currentColor"
                    d="M15.53,14.13a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l6.18,6.18a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41Zm1.23-2.49a3,3,0,0,0,2.12-.88l2.83-2.83a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L17.46,9.35a1,1,0,0,1-1.41,0l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L14.64,7.93h0a1,1,0,0,1,0-1.41l2.82-2.83a1,1,0,1,0-1.41-1.41L13.22,5.11a3,3,0,0,0,0,4.24h0L12,10.59,10.44,9.05a4.16,4.16,0,0,0-.74-5C8.26,2.61,4.53,1,2.77,2.79S2.6,8.27,4,9.72A4.36,4.36,0,0,0,6.94,11h.14A3.88,3.88,0,0,0,9,10.46L10.57,12,2.29,20.28a1,1,0,1,0,1.42,1.41l9-9,0,0,0,0,1.92-1.92A3,3,0,0,0,16.76,11.64ZM8.43,8.44A1.93,1.93,0,0,1,7,9,2.26,2.26,0,0,1,5.46,8.3C4.38,7.22,3.62,4.77,4.19,4.2A1,1,0,0,1,4.85,4,5.87,5.87,0,0,1,8.29,5.47,2.12,2.12,0,0,1,8.43,8.44Z"
                  ></path>
                </svg>
                Menu
              </div>
            </Link>

            <Link activeClassName="active" href="/contact">
              <div
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (router.pathname == "/contact"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  id="phone"
                  className="mb-1"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M21 15.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.92z"
                  ></path>
                </svg>
                Contact
              </div>
            </Link>
            <Link activeClassName="active" href="/cart">
              <div
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (router.pathname == "/cart"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <div className={css.badge}>{cartItems.length}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="cart"
                  width="28"
                  height="28"
                  style={{ marginBottom: "0.12rem" }}
                >
                  <path
                    fill="currentColor"
                    d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"
                  ></path>
                </svg>
                Cart
              </div>
            </Link>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Nav;
