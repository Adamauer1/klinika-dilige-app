import Image from "next/image";
import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/o-nas/page.module.css";
import { Button, UnstyledButton } from "@mantine/core";
import Link from "next/link";

export default function ONas() {
  return (
    <main className="" style={{}}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div>
            <h1>O nas</h1>
            <p style={{ width: "70%", marginBottom: "1.5rem" }}>
              Zapraszamy do Kliniki Dilige, która oferuje kompleksową pomoc
              medyczną, psychologiczną, psychoterapeutyczną, fizjoterapeutyczną
              i dietetyczną. Nasi specjaliści mają duże doświadczenie kliniczne,
              ale są także nauczycielami akademickimi, szkoleniowcami,
              naukowcami. Stale rozszerzają swoją wiedzę, doskonalą swoje
              umiejętności i kompetencje. Zachęcamy do zapoznania się z naszą
              ofertą.
            </p>
            <p>„Dilige et quod vis fac”</p>
            <p style={{ marginBottom: "2.5rem" }}>
              „Miłuj i czyń, co chcesz” - św.Augustyn
            </p>
            <h3>Doświadczenie i wiedza</h3>
            <p style={{ width: "50%", marginBottom: "2.5rem" }}>
              Wieloletnie doświadczenie poparte gruntowną wiedzą to największe
              atuty specjalistów Kliniki Dilige.
            </p>
            <UnstyledButton
              component={Link}
              href={"/specjalisci"}
              className={styles.button}
            >
              Specjaliści
            </UnstyledButton>
            {/* <button className={styles.button}>Specjaliści</button> */}
          </div>
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
