// import fitur1 from "../assets/s1.png";
// import fitur2 from "../assets/s2.png";
import fitur2 from "../assets/service2.png";
import fitur1 from "../assets/service1.png";
import fitur3 from "../assets/service3.png";
import Image from "next/image";
import css from "../styles/Service.module.css";

export default function Services() {
  return (
    <div>
      <div className={css.heading} id="heading">
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partners</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className={css.fitur}>
          <div className={css.imageWrapper}>
            <Image
              src={fitur1}
              objectFit="cover"
              layout="intrinsic"
              alt=""
              className="w-[20rem]"
            />
          </div>
          <span>Real-time Tracking</span>
          <span>
            Pelanggan dapat melacak pesanan mereka secara real-time dan
            mendapatkan pembaruan yang akurat tentang status pengiriman
          </span>
        </div>
        <div className={css.fitur}>
          <div className={css.imageWrapper}>
            <Image
              src={fitur2}
              objectFit="cover"
              layout="intrinsic"
              alt=""
              className="w-[20rem]"
            />
          </div>
          <span>Fast and Reliable Delivery</span>
          <span>
            Pengiriman pada waktu yang tepat dan dapat diandalkan untuk
            memastikan pelanggan puas
          </span>
        </div>
        <div className={css.fitur}>
          <div className={css.imageWrapper}>
            <Image
              src={fitur3}
              objectFit="cover"
              layout="intrinsic"
              alt=""
              className="w-[20rem]"
            />
          </div>
          <span>Easy to Order</span>
          <span>
            Pengguna untuk melakukan pesanan atau pembelian dengan lebih mudah
            dan cepat.
          </span>
        </div>
      </div>
    </div>
  );
}
