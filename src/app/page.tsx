"use client";
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
} from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// const images: string[] = [
//   "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
//   "/Zdjęcia dilige/dilige jpg/DSC00024.jpg",
//   "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
//   "/Zdjęcia dilige/dilige jpg/DSC00024.jpg",
// ];

import { personBasic } from "../data/data";
import Link from "next/link";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const slides = personBasic.map((person, index) => (
    <Carousel.Slide key={index}>
      <Link href={person.link}>
        <Image
          // component={NextImage}
          src={person.image}
          alt={person.name}
          // width={"100%"}
          // height={"100%"}
        />
      </Link>
    </Carousel.Slide>
  ));

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
              <Carousel
                m={{
                  base: rem(20),
                  xs: rem(30),
                  md: rem(40),
                  lg: rem(40),
                  xl: rem(40),
                }}
                styles={{
                  root: { height: "100%" },
                  viewport: { height: "100%" },
                }}
                loop={true}
                plugins={[autoplay.current]}
                withControls={false}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
              >
                {slides}
              </Carousel>
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
          src={"/stockOne.jpg"}
          alt="background"
          //
          // w={{ base: 200, sm: 400, lg: 500 }}
          //w={"auto"}
          //h={533}
          //visibleFrom="md"
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
      {/* <Group
        visibleFrom="lg"
        justify="space-between"
        //gap={"xl"}
        align="center"
        wrap="nowrap"
        //classNames={{ root: styles.containerLeft }}
      >
        {displayContent()}
      </Group>
      <Stack hiddenFrom="lg">{displayContent()}</Stack> */}
      {/* <div className={styles.container}>
        <div className={styles.containerLeft}>
          <Title order={1} c={{ base: "black", md: "white" }} size="h1">
            Kompleksowa, specjalistyczna opieka nad zdrowiem psychicznym
          </Title>
          <h1 className={styles.h1}>
            Kompleksowa, specjalistyczna opieka nad zdrowiem psychicznym
          </h1>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.imageOuterContainer}>
            <div className={styles.imageContainer}>
              <Carousel
                m={{ md: rem(30), lg: rem(30), xl: rem(50) }}
                styles={{
                  root: { height: "100%" },
                  viewport: { height: "100%" },
                }}
                loop={true}
                plugins={[autoplay.current]}
                withControls={false}
              >
                {slides}
              </Carousel>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
