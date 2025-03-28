import NextImage from "next/image";
import styles from "./page.module.css";
import { Carousel } from "@mantine/carousel";
import {
  AppShell,
  BackgroundImage,
  Group,
  Image,
  rem,
  Stack,
  Title,
  Text,
  Flex,
  Transition,
} from "@mantine/core";

import CarouselShow from "@/components/ui/CarouselShow";

export default function Home() {

  const displayContent = () => {
    return (
      <>
        <div className={styles.containerLeft}>
          <Title
            order={1}
            //c={{ base: "black", md: "white" }}
            c="white"
            textWrap="balance"
            // ml={rem(200)}
            // mt={rem(-70)}
            mb={{ base: rem(10) }}
            classNames={{ root: styles.h1 }}
            styles={
              {
                // root: { fontSize: rem(120), lineHeight: rem(250) },
              }
            }
          >
            Kompleksowa, specjalistyczna opieka nad zdrowiem psychicznym
          </Title>
          <Text c={"white"} size={"xl"} classNames={{ root: styles.text }}>
            „Dilige et quod vis fac” <br /> „Miłuj i czyń, co chcesz” -
            św.Augustyn
          </Text>
          {/* <h1 className={styles.h1}>
            Kompleksowa, specjalistyczna opieka nad zdrowiem psychicznym
          </h1> */}
        </div>
        <div className={styles.containerRight}>
          <div className={styles.imageOuterContainer}>
            <div className={styles.imageContainer}>
              <CarouselShow />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className={styles.backgroundImageContainer}>
        {/* <BackgroundImage src="/stockOne.jpg" /> */}
        {/* <NextImage
          className={styles.backgroundImage}
          src="/stockOne.jpg"
          alt="Logo"
          fill
          // style={{ zIndex: -10 }}
        /> */}
        <Image
          src={"/images/stockOne.webp"}
          alt="Obraz tła"
          component={NextImage}
          //
          //w={{ base: 200, sm: 400, lg: 500 }}
          // w={"auto"}
          // h={533}
          //visibleFrom="md"
          width = {6000}
          height = {4000}
          priority
          loading={"eager"}
          // style={{height:"auto"}}
          classNames={{ root: styles.backgroundImage }}
        />
      </div>
      <Flex
        direction={{ base: "column", lg: "row", xl: "row" }}
        justify={{ lg: "space-between", xl: "space-between" }}
        align={{ lg: "center", xl: "center" }}
        wrap={{ lg: "nowrap", xl: "nowrap" }}
      >
        {displayContent()}
      </Flex>
    </>
  );
}
