import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundImageContainer}>
        <Image
          className={styles.backgroundImage}
          src="/stockOne.jpg"
          alt="Logo"
          fill
          // style={{ zIndex: -10 }}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <h1 className={styles.h1}>
            Kompleksowa, specjalistyczna opieka nad zdrowiem psychicznym
          </h1>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.imageOuterContainer}>
            <div className={styles.imageContainer}>
              <Image
                className=""
                src="/stockThree.jpg"
                alt="Logo"
                fill={true}
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
