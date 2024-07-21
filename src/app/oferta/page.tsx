import NextImage from "next/image";
import { Image } from "@mantine/core";
import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/oferta/page.module.css";
import Link from "next/link";
import { ThemeIcon } from "@mantine/core";

export default function Oferta() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <h1>Co oferujemy?</h1>
          <ul>
            <li className=" place-self-center text-center">
              <Link href={"/oferta/psychiatra"}>
                <div>
                  <Image src={"/icons/pills_507469.png"} alt="" />
                </div>
              </Link>
              <p>Psychiatra</p>
            </li>
            <li>
              <Link href={"/oferta/psychologia"}>
                <div>
                  <Image src={"/icons/empathy_1491198.png"} alt="" />
                </div>
              </Link>
              <p>Psychologia</p>
            </li>
            <li>
              <Link href={"/oferta/psychoterapia"}>
                <div>
                  <Image src={"/icons/autism_1491171.png"} alt="" />
                </div>
              </Link>
              <p>Psychoterapia</p>
            </li>
            <li>
              <Link href={"/oferta/psychoseksuologia"}>
                <div>
                  <Image src={"/icons/single-bed_9828083.png"} alt="" />
                </div>
              </Link>
              <p>Psychoseksuologia</p>
            </li>
            <li>
              <Link href={"/oferta/terapia-uzaleznien"}>
                <div>
                  <Image src={"/icons/drugs_1022360.png"} alt="" />
                </div>
              </Link>
              <p>Terapia uzależnień</p>
            </li>
            <li>
              <Link href={"/oferta/terapia-grupowa"}>
                <div>
                  <Image src={"/icons/armchair_5376974.png"} alt="" />
                </div>
              </Link>
              <p>Terapia grupowa</p>
            </li>
          </ul>
        </div>
        <div className={styles.containerRight}>
          <NextImage
            className="brightness-75"
            src={stockTwo}
            alt="Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
}
