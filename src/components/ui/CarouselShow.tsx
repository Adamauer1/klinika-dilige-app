"use client";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import NextImage from "next/image";
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { rem, Image } from "@mantine/core";
import { personBasic } from "@/data/data";
import { relative } from "path";

const CarouselShow = () => {
  const autoplay = useRef(Autoplay({ delay: 4000, playOnInit: true }));
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
  return (
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
  );
};

export default CarouselShow;
