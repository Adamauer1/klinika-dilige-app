import Image from "next/image";
import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/oferta/page.module.css";

export default function Oferta() {
  return (
    <main className="" style={{}}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <h1>Co oferujemy?</h1>
          <ul>
            <li className=" place-self-center text-center">
              <div></div>
              <p>Psychiatria</p>
            </li>
            <li>
              <div></div>
              <p>Psychologia</p>
            </li>
            <li>
              <div></div>
              <p>Psychoterapia</p>
            </li>
            <li>
              <div></div>
              <p>Psychoseksuologia</p>
            </li>
            <li>
              <div></div>
              <p>Terapia uzależnień</p>
            </li>
            <li>
              <div></div>
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
