import { Divider, Flex } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/styles/header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <Image
            className=""
            src="/logo.png"
            alt="Logo"
            width={180}
            height={80}
            priority
          />
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
                <Link className={styles.link} href={"/o-nas"}>
                  O nas
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"/specjalisci"}>
                  Specjaliści
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"/aktualnosci"}>
                  Aktualności
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} href={"/kontakt"}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Divider />
      </div>
    </>
  );
};

export default Header;
