"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/styles/footer.module.css";
import { AppShell, Text } from "@mantine/core";

const Footer = () => {
  let pStyle: string = "pb-1 text-base text-white";
  let h3Style: string = "font-bold mb-3 mt-7 text-lg text-white";
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.section}>
          <Image
            className=""
            src="/logo.png"
            alt="Logo"
            width={180}
            height={80}
            priority
          />
          <p className={styles.p}>Infolinia - +48 501 023 653</p>
          <p className={styles.p}>ul. Parkowa 5A/1 71-600 Szczecin</p>
          <p className={styles.p}>
            Terapia i zajęcia grupowe <br /> ul. Piłsudskiego 20/2 70-462
            Szczecin
          </p>
          <p className={styles.p}>+48 690 077 653</p>
          <p className={styles.p}>kontakt@klinikadilige.pl</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>Godziny otwarcia</h3>
          <p className={styles.p}>
            Od poniedziałku do piątku w dni robocze. Godzina wizyty - po
            uprzednim ustaleniu.
          </p>
          {/* <p className={styles.p}>Poniedziałek : od 14.00</p>
          <p className={styles.p}>Wtorek : od 14.00</p>
          <p className={styles.p}>Środa : od 14.00</p>
          <p className={styles.p}>Czwartek : od 14.00</p>
          <p className={styles.p}>Piątek : od 14.00</p> */}
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>Na skróty</h3>
          <nav>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link className={styles.link} href={"/"}>
                  Strona główna
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"/oferta"}>
                  Oferta
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"o-nas"}>
                  O nas
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"specjalisci"}>
                  Specjaliści
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"aktualnosci"}>
                  Aktualności
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"kontakt"}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
