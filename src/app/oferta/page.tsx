import Image from "next/image";
import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/oferta/page.module.css";
import Link from "next/link";

export default function Oferta() {
  return (
    <main className="" style={{}}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <h1>Co oferujemy?</h1>
          <ul>
            <li className=" place-self-center text-center">
              <Link href={"/oferta/psychiatra"}>
                <div></div>
              </Link>
              <p>Psychiatra</p>
            </li>
            <li>
              <Link href={"/oferta/psychologia"}>
                <div></div>
              </Link>
              <p>Psychologia</p>
            </li>
            <li>
              <Link href={"/oferta/psychoterapia"}>
                <div></div>
              </Link>
              <p>Psychoterapia</p>
            </li>
            <li>
              <Link href={"/oferta/psychoseksuologia"}>
                <div></div>
              </Link>
              <p>Psychoseksuologia</p>
            </li>
            <li>
              <Link href={"/oferta/terapia-uzaleznien"}>
                <div></div>
              </Link>
              <p>Terapia uzależnień</p>
            </li>
            <li>
              <Link href={"/oferta/terapia-grupowa"}>
                <div></div>
              </Link>
              <p>Terapia grupowa</p>
            </li>
          </ul>
        </div>
        <div className={styles.containerRight}>
          <Image
            className="brightness-75"
            src={stockTwo}
            alt="Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </main>
  );
}
