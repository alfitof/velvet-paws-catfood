import css from "../styles/Footer.module.css";
import { UilInstagram, UilWhatsapp } from "@iconscout/react-unicons";
import Image from "next/image";
import Logo from "../assets/kucing 2.png";

export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilInstagram size={45} />
        <UilWhatsapp size={45} />
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <span>Velvet Paws</span>
      </div>
    </div>
  );
}
