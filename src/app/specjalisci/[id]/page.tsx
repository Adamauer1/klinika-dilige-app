import NextImage from "next/image";
import { AspectRatio, Flex, Image, rem, Text, Title } from "@mantine/core";
import styles from "@/app/specjalisci/[id]/page.module.css";
import { infoData } from "../../../data/data";

export default function SpecjalisciPage({
  params,
}: {
  params: { id: string };
}) {
  const extractId = () => {
    return parseInt(params.id.split("-")[0]);
  };
  const findInfoFromId = () => {
    return infoData.find((person) => person.id == extractId());
  };
  let data = findInfoFromId();
  // console.log(data);
  return (
    <>
      {/* <div>{data?.id}</div> */}
      <>
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
                //component={NextImage}
                src={data?.image}
                // width={3738}
                // height={4983}
                w={{ lg: rem(400), xl: rem(500) }}
                h={"auto"}
                alt="person"

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
        {/* <div className={styles.container}>
          <div className={styles.containerLeft}>
            <div className={styles.infoContainer}>
              <div className={styles.imageContainer}>
                <Image
                  //component={NextImage}
                  src={data?.image}
                  // width={3738}
                  // height={4983}
                  alt="person"
                  // fill={true}
                /> */}
        {/* <Image
                  className=""
                  src={data?.image}
                  alt="Logo"
                  fill={true}
                  sizes="lg"
                  style={{}}
                /> */}
        {/* </div>
              <h2>{data?.name}</h2> */}
        {/* <h3>Prof. dr hab. n. med. i n. zdr.</h3> */}
        {/* <h3>{data?.title}</h3> */}
        {/* </div>
          </div>
          <div className={styles.containerRight}>
            <div>
              <h1 className="text-4xl pb-10">O specjaliście</h1>
              {data?.desc.split("\n").map((text, index) => (
                <p key={index}>
                  {text}
                  <br />
                </p>
              ))} */}
        {/* <p>
                Prof. dr hab. n. med. i n. zdr. Jolanta Kucharska-Mazur,
                specjalista psychiatra, specjalista psychiatrii środowiskowej.{" "}
                <br />
                <br />
                Kieruje Oddziałem Całodobowym CD Kliniki Psychatrii PUM. Od
                ponad 20 lat prowadzi zajęcia ze studentami Wydziału Lekarskiego
                oraz Wydziału Nauk o Zdrowiu PUM. <br />
                <br />
                Obroniła pracę habilitacyjną pod tytułem:&quot;Poszukiwanie
                nowych markerów pierwszego epizodu psychotycznego - ocena
                mobilizacji komórek macierzystych ze szpiku kostnego do krwi
                obwodowej oraz poziomu czynników osoczowych wpływających na ich
                przemieszczanie się&quot;, której efektem jest europejski patent
                na metodę wykrywania pierwszych epizodów psychotycznych. Autorka
                i współautorka 130 monografii i artykułów naukowych,
                publikowanych w czasopismach krajowych i zagranicznych, o
                łącznym IF 67,7. <br /> <br />
                Członek Zarządu Oddziału Szczecińskiego Polskiego Towarzystwa
                Psychiatrycznego, członek Głównego Sądu Koleżeńskiego Polskiego
                Towarzystwa Psychiatrycznego, członek European Psychiatric
                Association i Członek założyciel Polskiego Towarzystwa Badań nad
                Uzależnieniami. <br />
                <br /> Miłośniczka żeglarstwa, nurkowania, podróży i wędrówek
                górskich.
              </p> */}
        {/* </div>
          </div>
        </div> */}
      </>
    </>
  );
}
