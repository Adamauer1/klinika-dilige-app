"use client";
import NextImage from "next/image";
//import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/specjalisci/page.module.css";
import Link from "next/link";
import { Autocomplete, Image, Text, Paper, Select } from "@mantine/core";
import { useState } from "react";

interface person {
  id: number;
  name: string;
  specjalisci: string[];
  plec: string;
  image: string;
  link: string;
}

const names: string[] = [
  "Klaudia Bakunowska",
  "Tomasz Grąźlewski",
  "Agata Handzlik",
  "Agata Bąba Kubiś",
  "Jolanta Kucharska-Mazur",
  "Jacek Kurpisz",
  "Alicja Kusztykiewicz",
  "Aleksandra Mazur",
  "Mirosława Pankiewicz",
  "Artur Reginia",
  "Krzysztof Rudkowski",
  "Ewelina Skierczyńska",
  "Agnieszka Słuczanowska",
  "Daria Suchecka",
];

const infoData: person[] = [
  {
    id: 1,
    name: "Klaudia Bakunowska",
    specjalisci: [],
    plec: "",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Tomasz Grąźlewski",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Agata Handzlik",
    specjalisci: [
      "specjalista terapii uzależnień",
      "pedagog",
      "socjoterapeuta",
    ],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 4,
    name: "Agata Bąba Kubiś",
    specjalisci: ["psychiatra"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 5,
    name: "Jolanta Kucharska-Mazur",
    specjalisci: ["psychiatra"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: `5-jolanta-kucharska-mazur`,
  },
  {
    id: 6,
    name: "Jacek Kurpisz",
    specjalisci: ["psycholog", "psychoseksuolog"],
    plec: "Mężczyzna",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 7,
    name: "Alicja Kusztykiewicz",
    specjalisci: ["psychoterapia uzależnień", "terapeuta środowiskowy"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 8,
    name: "Aleksandra Mazur",
    specjalisci: [],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 9,
    name: "Mirosława Pankiewicz",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 10,
    name: "Artur Reginia",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 11,
    name: "Krzysztof Rudkowski",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 12,
    name: "Ewelina Skierczyńska",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 13,
    name: "Agnieszka Słuczanowska",
    specjalisci: ["pedagog specjalny", "neuroterapeuta", "psychoterapeuta"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
  {
    id: 14,
    name: "Daria Suchecka",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: "",
  },
];

export default function Specjalisci() {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [specValue, setSpecValue] = useState<string | null>();
  const [genderValue, setGenderValue] = useState<string | null>();
  const [data, setData] = useState(infoData);

  const handleFilterData = () => {
    let newData = infoData;
    console.log(newData);
    if (specValue) {
      console.log("t1");
      newData = newData.filter((person) =>
        person.specjalisci.includes(specValue.toLowerCase() as string)
      );
    }
    if (genderValue) {
      console.log("t2");
      newData = newData.filter((person) => person.plec == genderValue);
    }

    if (searchValue) {
      console.log("t3");
      const regex = RegExp(searchValue, "i");
      newData = newData.filter((person) => regex.test(person.name));
    }
    console.log(searchValue);
    console.log(specValue);
    console.log(genderValue);
    console.log(newData);
    setData(newData);
  };

  const handleFilterReset = () => {
    setGenderValue(null);
    setSpecValue(null);
    setSearchValue("");
  };

  const createPapers = () => {
    return data.map((person) => (
      <Paper
        key={person.id}
        style={{
          width: 400,
          height: 550,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          component={NextImage}
          style={{ borderRadius: 20 }}
          src={person.image}
          alt="image"
          height={"500"}
          width={"400"}
        />
        <Text styles={{ root: { margin: 10 } }}>{person.name}</Text>
      </Paper>
    ));
    // return Array.from({ length: 10 }).map((_, index) => (
    //   <Paper
    //     key={index}
    //     style={{
    //       width: 400,
    //       height: 550,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Image
    //       component={NextImage}
    //       style={{ borderRadius: 20 }}
    //       src={"/Zdjęcia dilige/dilige jpg/DSC09948.jpg"}
    //       alt="image"
    //       height={"500"}
    //       width={"400"}
    //     />
    //     <Text styles={{ root: { margin: 10 } }}>Jan Kowalski</Text>
    //   </Paper>
    //));
  };

  const noPapers = () => {
    return (
      <div>
        <Text>No results found</Text>
      </div>
    );
  };

  return (
    <>
      {/* <Link href={"/specjalisci/1-jolanta-kucharska-mazur"}>Test</Link> */}
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              paddingBottom: 50,
            }}
          >
            <h1>Search for Specjalisci</h1>
            <div style={{ display: "flex", width: "40%", paddingBottom: 5 }}>
              <Autocomplete
                styles={{
                  root: {
                    width: "100%",
                    height: "100%",
                  },
                  // wrapper: { height: "3rem", width: "100%" },
                }}
                placeholder="Search"
                data={names}
                value={searchValue}
                onChange={setSearchValue}
                defaultDropdownOpened={false}
                withScrollArea={false}
              />
              <button onClick={handleFilterData}>Search</button>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                {/* <h2>SPECJALIZACJA</h2> */}
                <Select
                  placeholder="SPECJALIZACJA"
                  value={specValue}
                  onChange={setSpecValue}
                  data={[
                    "Psychiatra",
                    "Psycholog",
                    "Pedagog Specjalny",
                    "Neuroterapeuta",
                    "Psychoterapeuta",
                    "Psychoterapia Uzależnień",
                    "Terapeuta Środowiskowy",
                    "Specjalista Terapii Uzależnień",
                    "Pedagog",
                    "Socjoterapeuta",
                    "Psychoseksuolog",
                    "Terapeuta Uzależnień",
                    "EEG Biofeedback",
                  ]}
                />
              </div>
              <div>
                {/* <h2>PŁEĆ</h2> */}
                <Select
                  placeholder="PŁEĆ"
                  value={genderValue}
                  onChange={setGenderValue}
                  data={["Mężczyzna", "Kobieta"]}
                />
              </div>
              <button onClick={handleFilterReset}>Reset</button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {data.length != 0 ? createPapers() : noPapers()}
            {/* {createPapers()} */}
          </div>
        </div>
      </main>
    </>
    // <main className="" style={{}}>
    //   <div className={styles.container}>
    //     <div className={styles.containerLeft}>
    //       <div className={styles.infoContainer}>
    //         <div className={styles.imageContainer}>
    //           <Image
    //             className=""
    //             src="/stockThree.jpg"
    //             alt="Logo"
    //             fill={true}
    //             style={{}}
    //           />
    //         </div>
    //         <h2>Jan Kowalski</h2>
    //         <h3>Prof. dr hab. n. med. i n. zdr.</h3>
    //       </div>
    //     </div>
    //     <div className={styles.containerRight}>
    //       <div>
    //         <h1 className="text-4xl pb-10">O specjaliście</h1>
    //         <p>
    //           Prof. dr hab. n. med. i n. zdr. Jolanta Kucharska-Mazur,
    //           specjalista psychiatra, specjalista psychiatrii środowiskowej.{" "}
    //           <br />
    //           <br />
    //           Kieruje Oddziałem Całodobowym CD Kliniki Psychatrii PUM. Od ponad
    //           20 lat prowadzi zajęcia ze studentami Wydziału Lekarskiego oraz
    //           Wydziału Nauk o Zdrowiu PUM. <br />
    //           <br />
    //           Obroniła pracę habilitacyjną pod tytułem:&quot;Poszukiwanie nowych
    //           markerów pierwszego epizodu psychotycznego - ocena mobilizacji
    //           komórek macierzystych ze szpiku kostnego do krwi obwodowej oraz
    //           poziomu czynników osoczowych wpływających na ich przemieszczanie
    //           się&quot;, której efektem jest europejski patent na metodę
    //           wykrywania pierwszych epizodów psychotycznych. Autorka i
    //           współautorka 130 monografii i artykułów naukowych, publikowanych w
    //           czasopismach krajowych i zagranicznych, o łącznym IF 67,7. <br />{" "}
    //           <br />
    //           Członek Zarządu Oddziału Szczecińskiego Polskiego Towarzystwa
    //           Psychiatrycznego, członek Głównego Sądu Koleżeńskiego Polskiego
    //           Towarzystwa Psychiatrycznego, członek European Psychiatric
    //           Association i Członek założyciel Polskiego Towarzystwa Badań nad
    //           Uzależnieniami. <br />
    //           <br /> Miłośniczka żeglarstwa, nurkowania, podróży i wędrówek
    //           górskich.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
