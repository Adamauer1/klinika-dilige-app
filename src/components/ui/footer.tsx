import Image from "next/image";
import Link from "next/link";
import styles from "@/components/styles/footer.module.css";

const Footer = () => {
  let pStyle: string = "pb-1 text-base text-white";
  let h3Style: string = "font-bold mb-3 mt-7 text-lg text-white";
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.section}>
          <Image
            className="mb-3"
            src="/logo.png"
            alt="Logo"
            width={180}
            height={37}
            priority
          />
          <p className={styles.p}>ul. Parkowa 5A/1 71-600 Szczecin</p>
          <p className={styles.p}>
            Terapia i zajęcia grupowe <br /> ul. Piłsudskiego 20/2 70-462
            Szczecin
          </p>
          <p className={styles.p}>Infolinia - +48 501 023 653</p>
          <p className={styles.p}>kontakt@klinikadilige.pl</p>
        </div>
        <div className="mt-10">
          <h3 className={styles.title}>Godziny otwarcia</h3>
          <p className={styles.p}>Poniedziałek : od 14.00</p>
          <p className={styles.p}>Wtorek : od 14.00</p>
          <p className={styles.p}>Środa : od 14.00</p>
          <p className={styles.p}>Czwartek : od 14.00</p>
          <p className={styles.p}>Piątek : od 14.00</p>
        </div>
        <div className="mt-10">
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
        {/* <div className="mt-10">
        <h3 className={h3Style}>Poradnie</h3>
        <p className={pStyle}>Psychiatra</p>
        <p className={pStyle}>Psycholog</p>
        <p className={pStyle}>Psychoterapeuta</p>
        <p className={pStyle}>Terapeuta uzależnień</p>
        <p className={pStyle}>Psychoseksuolog</p>
        <p className={`${pStyle} mb-10`}>EEG biofeedback</p>
      </div> */}
      </div>
    </>
  );
};

export default Footer;
