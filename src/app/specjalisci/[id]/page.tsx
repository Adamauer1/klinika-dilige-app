import NextImage from "next/image";
import { AspectRatio, Flex, Image, rem, Text, Title } from "@mantine/core";
import styles from "@/app/specjalisci/[id]/page.module.css";
import { infoData } from "../../../data/data";
import { use } from "react";

export default function SpecjalisciPage({
  params
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const {id} = use(params)
  const extractId =  () => {
    return parseInt(id.split("-")[0]);
  };
  const findInfoFromId = () => {
    return infoData.find((person) => person.id == extractId());
  };
  let data = findInfoFromId();
  // console.log(data);
  return (
    <>
      {/* <div>{data?.id}</div> */}

        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ base: "center", lg: "start" }}
          //justify={{ lg: "space-around" }}
          p={{ base: rem(20), lg: rem(50), xl: rem(100) }}
          // pt={{ base: rem(20), lg: rem(50), xl: rem(60) }}
          gap={{ base: rem(30) }}
        >
          <Title order={1} hiddenFrom="lg">
            O specjaliście
          </Title>
          <Flex
            direction={{ base: "column" }}
            gap={{ base: rem(10) }}
            flex={{ lg: 0.5 }}
          >
            <div className={styles.imageContainer}>
              {/* <AspectRatio ratio={9 / 16}> */}
              <Image
                component={NextImage}
                src={data?.image}
                // width={3738}
                // height={4983}
                w={{ lg: rem(400), xl: rem(500) }}
                // h={"auto"}
                alt={data?.name || ""}
                width={3711}
                height={4948}
                style={{height:"auto"}}
                priority
                // fill={true}
              />
              {/* </AspectRatio> */}
            </div>

            <Title order={2}>{data?.name}</Title>
            <Title order={3}>{data?.title}</Title>
          </Flex>
          <Flex direction={{ base: "column" }} flex={{ lg: 0.5 }}>
            <div className={styles.containerRight}>
              <Title order={1} visibleFrom="lg" fz={{ xl: rem(60) }} m={0}>
                O specjaliście
              </Title>
              {data?.desc.split("\n").map((text, index) => (
                <p key={index} className={styles.text}>
                  {text}
                  <br />
                </p>
              ))}
            </div>
          </Flex>
        </Flex>
      </>
  );
}
