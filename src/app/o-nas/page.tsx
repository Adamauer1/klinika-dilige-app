import NextImage from "next/image";
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
            src={"/Zdjecia-dilige/jpg przestrzenie/DSC00122.jpg"}
            alt="Logo"
            component={NextImage}
            width={6000}
            height={4000}
            style={{height:"100%"}}
            // width={"100%"}
            // height={"100%"}
          />
        </div>
      </Flex>
    </>
  );
}
