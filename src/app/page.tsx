"use client";
import NextImage from "next/image";
import styles from "./page.module.css";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// const images: string[] = [
//   "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
//   "/Zdjęcia dilige/dilige jpg/DSC00024.jpg",
//   "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
//   "/Zdjęcia dilige/dilige jpg/DSC00024.jpg",
// ];

import { personImages } from "../data/data";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const slides = personImages.map((image, index) => (
    <Carousel.Slide key={index}>
      <Image
        // component={NextImage}
        src={image}
        alt="person"
        // width={"100%"}
        // height={"100%"}
      />
    </Carousel.Slide>
  ));
  return (
    <main>
      <div className={styles.backgroundImageContainer}>
        <NextImage
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
              <Carousel
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
              {/* <Image
                className=""
                src="/stockThree.jpg"
                alt="Logo"
                fill={true}
                style={{}}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
