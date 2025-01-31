import NextImage from "next/image";
import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/o-nas/page.module.css";
import {
  Button,
  Flex,
  Title,
  UnstyledButton,
  Text,
  Image,
  rem,
} from "@mantine/core";
import Link from "next/link";

export default function ONas() {
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row", xl: "row" }}
        h={{ xl: "100vh" }}
        // p={{ base: rem(20) }}
      >
        <div className={styles.containerLeft}>
          <Flex
            direction={"column"}
            justify={{ base: "center" }}
            align={{ base: "center", lg: "start" }}
            w={{ xl: "65%" }}
            h={{ lg: "100%" }}
          >
            <Title
              order={1}
              ta={"center"}
              pb={{ base: rem(10), lg: rem(20), xl: rem(30) }}
              fz={{ xs: rem(50), lg: rem(70) }}
            >
              O nas
            </Title>
            <Text fz={{ xs: rem(20) }}>
              Zapraszamy do Kliniki Dilige, która oferuje kompleksową pomoc
              medyczną, psychologiczną, psychoterapeutyczną. Nasi specjaliści
              mają duże doświadczenie kliniczne, ale są także nauczycielami
              akademickimi, szkoleniowcami, naukowcami. Stale rozszerzają swoją
              wiedzę, doskonalą swoje umiejętności i kompetencje. Zachęcamy do
              zapoznania się z naszą ofertą.
            </Text>
            <Title
              order={3}
              ta={"center"}
              pt={{ base: rem(30) }}
              pb={{ base: rem(10) }}
              fz={{ xs: rem(35), lg: rem(30) }}
            >
              Doświadczenie i wiedza
            </Title>
            <Text mb={{ base: rem(50) }} fz={{ xs: rem(20) }}>
              Wieloletnie doświadczenie poparte gruntowną wiedzą to największe
              atuty specjalistów Kliniki Dilige.
            </Text>
            <UnstyledButton
              component={Link}
              href={"/specjalisci"}
              className={styles.button}
              // mb={{ base: rem(30) }}
            >
              Specjaliści
            </UnstyledButton>
          </Flex>
        </div>
        <div className={styles.containerRight}>
          <Image
            className="brightness-75"
            // src={"/stockTwo.jpg"}
            src={"/Zdjęcia dilige/jpg przestrzenie/DSC00122.jpg"}
            alt="Logo"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </Flex>

      {/* <div className={styles.container}>
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
            <button className={styles.button}>Specjaliści</button>
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
      </div> */}
    </>
  );
}
