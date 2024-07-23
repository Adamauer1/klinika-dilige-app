import NextImage from "next/image";
import { Flex, Grid, Image, rem, SimpleGrid, Title } from "@mantine/core";
import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/oferta/page.module.css";
import Link from "next/link";
import { ThemeIcon } from "@mantine/core";

export default function Oferta() {
  return (
    <>
      <Flex
        wrap={{ lg: "nowrap", xl: "nowrap" }}
        direction={{ base: "column", lg: "row", xl: "row" }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          pl={{ base: rem(20), md: rem(40), xl: rem(60) }}
          pr={{ base: rem(20), md: rem(40), xl: rem(60) }}
          gap={{ base: rem(30), lg: rem(50), xl: rem(50) }}
          classNames={{ root: styles.containerLeft }}
        >
          {/* <h1>Co oferujemy?</h1> */}
          <Title order={1} classNames={{ root: styles.title }}>
            Co oferujemy?
          </Title>
          <SimpleGrid
            cols={{ base: 2, sm: 3 }}
            verticalSpacing={{ base: "lg", lg: "xl", xl: rem(50) }}
            spacing={{ lg: "xl", xl: rem(100) }}
          >
            <div>
              <Link href={"/oferta/psychiatra"}>
                <Image src={"/icons/pills_507469.png"} alt="" />
              </Link>
              <p className={styles.text}>Psychiatra</p>
            </div>
            <div>
              <Link href={"/oferta/psychologia"}>
                <Image src={"/icons/empathy_1491198.png"} alt="" />
              </Link>
              <p className={styles.text}>Psychologia</p>
            </div>
            <div>
              <Link href={"/oferta/psychoterapia"}>
                <Image src={"/icons/autism_1491171.png"} alt="" />
              </Link>
              <p className={styles.text}>Psychoterapia</p>
            </div>
            <div>
              <Link href={"/oferta/psychoseksuologia"}>
                <Image src={"/icons/single-bed_9828083.png"} alt="" />
              </Link>
              <p className={styles.text}>Psychoseksuologia</p>
            </div>
            <div>
              <Link href={"/oferta/terapia-uzaleznien"}>
                <Image src={"/icons/drugs_1022360.png"} alt="" />
              </Link>
              <p className={styles.text}>Terapia uzależnień</p>
            </div>
            <div>
              <Link href={"/oferta/terapia-grupowa"}>
                <Image src={"/icons/armchair_5376974.png"} alt="" />
              </Link>
              <p className={styles.text}>Terapia grupowa</p>
            </div>
          </SimpleGrid>
        </Flex>
        <div className={styles.containerRight}>
          <Image
            className="brightness-75"
            src={"/stockTwo.jpg"}
            alt="Logo"
            width={"100%"}
            height={"100%"}
            // fit="contain"
          />
        </div>
      </Flex>
      {/* <div className={styles.container}>
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
      </div> */}
    </>
  );
}
