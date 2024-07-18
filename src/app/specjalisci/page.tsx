"use client";
import NextImage from "next/image";
//import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/specjalisci/page.module.css";
import Link from "next/link";
import {
  Autocomplete,
  Image,
  Text,
  Paper,
  Select,
  Button,
  UnstyledButton,
  ActionIcon,
  rem,
} from "@mantine/core";
import { useState } from "react";

import { names, infoData } from "../../data/data";
import { IconSearch } from "@tabler/icons-react";

// interface person {
//   id: number;
//   name: string;
//   specjalisci: string[];
//   plec: string;
//   image: string;
//   link: string;
// }

// const names: string[] = [
//   "Klaudia Bakunowska",
//   "Tomasz Grąźlewski",
//   "Agata Handzlik",
//   "Agata Bąba Kubiś",
//   "Jolanta Kucharska-Mazur",
//   "Jacek Kurpisz",
//   "Alicja Kusztykiewicz",
//   "Aleksandra Mazur",
//   "Mirosława Pankiewicz",
//   "Artur Reginia",
//   "Krzysztof Rudkowski",
//   "Ewelina Skierczyńska",
//   "Agnieszka Słuczanowska",
//   "Daria Suchecka",
// ];

// const infoData: person[] = [
//   {
//     id: 1,
//     name: "Klaudia Bakunowska",
//     specjalisci: ["Psycholog", "Psychoterapeuta"],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09913.jpg",
//     link: "1-klaudia-bakunowska",
//   },
//   {
//     id: 2,
//     name: "Tomasz Grąźlewski",
//     specjalisci: ["psychiatra"],
//     plec: "Mężczyzna",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09857.jpg",
//     link: "2-tomasz-grazlewski",
//   },
//   {
//     id: 3,
//     name: "Agata Handzlik",
//     specjalisci: [
//       "specjalista terapii uzależnień",
//       "pedagog",
//       "socjoterapeuta",
//     ],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09977.jpg",
//     link: "3-agata-handzlik",
//   },
//   {
//     id: 4,
//     name: "Agata Bąba Kubiś",
//     specjalisci: ["psychiatra"],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09989.jpg",
//     link: "4-agata-baba-kubis",
//   },
//   {
//     id: 5,
//     name: "Jolanta Kucharska-Mazur",
//     specjalisci: ["psychiatra"],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
//     link: `5-jolanta-kucharska-mazur`,
//   },
//   {
//     id: 6,
//     name: "Jacek Kurpisz",
//     specjalisci: ["psycholog", "psychoseksuolog"],
//     plec: "Mężczyzna",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09953.jpg",
//     link: "6-jacek-kurpisz",
//   },
//   {
//     id: 7,
//     name: "Alicja Kusztykiewicz",
//     specjalisci: ["psychoterapia uzależnień", "terapeuta środowiskowy"],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09810.jpg",
//     link: "7-alicja-kusztykiewicz",
//   },
//   {
//     id: 8,
//     name: "Aleksandra Mazur",
//     specjalisci: [],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09847.jpg",
//     link: "8-aleksandra-mazur",
//   },
//   {
//     id: 9,
//     name: "Mirosława Pankiewicz",
//     specjalisci: ["psycholog"],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09924.jpg",
//     link: "9-mirosława-pankiewicz",
//   },
//   {
//     id: 10,
//     name: "Artur Reginia",
//     specjalisci: ["psychiatra"],
//     plec: "Mężczyzna",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09741.jpg",
//     link: "10-artur-reginia",
//   },
//   {
//     id: 11,
//     name: "Krzysztof Rudkowski",
//     specjalisci: ["psychiatra"],
//     plec: "Mężczyzna",
//     image: "/Zdjęcia dilige/dilige jpg/DSC00027.jpg",
//     link: "11-krzysztof-rudkowski",
//   },
//   {
//     id: 12,
//     name: "Ewelina Skierczyńska",
//     specjalisci: ["psycholog"],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09726.jpg",
//     link: "12-ewelina-skierczynska",
//   },
//   {
//     id: 13,
//     name: "Agnieszka Słuczanowska",
//     specjalisci: ["pedagog specjalny", "neuroterapeuta", "psychoterapeuta"],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09784.jpg",
//     link: "13-agnieszka-sluczanowska",
//   },
//   {
//     id: 14,
//     name: "Daria Suchecka",
//     specjalisci: ["psycholog"],
//     plec: "Kobieta",
//     image: "/Zdjęcia dilige/dilige jpg/DSC09908.jpg",
//     link: "14-daria-suchecka",
//   },
// ];

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
        // component={Link}
        // href={`/specjalisci/${person.link}`}
        key={person.id}
        className={styles.dataPaper}
        // style={{
        //   width: 400,
        //   height: 550,
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        // }}
      >
        <div className={styles.dataImageContainer}>
          <UnstyledButton
            component={Link}
            href={`/specjalisci/${person.link}`}
            className={styles.dataProfileButton}
          >
            Profile
          </UnstyledButton>
          {/* <button className={styles.dataProfileButton}>Profile</button> */}
          <Image
            component={NextImage}
            className={styles.dataImage}
            // style={{ borderRadius: 20 }}
            src={person.image}
            alt="image"
            height={"500"}
            width={"400"}
          />
        </div>
        <Text styles={{ root: { margin: 10 } }}>{person.name}</Text>
      </Paper>
    ));
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
          className={styles.container}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   width: "100vw",
          // }}
        >
          <div
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   width: "100%",
            //   paddingBottom: 50,
            // }}
            className={styles.searchContainer}
          >
            <h1>Search for Specjalisci</h1>
            <div
              className={styles.searchInputContainer}
              //style={{ display: "flex", width: "40%", paddingBottom: 5 }}
            >
              <Autocomplete
                styles={{
                  root: {
                    width: "100%",
                    height: 45,
                  },
                  input: {
                    borderRadius: "30px",
                    // borderTopLeftRadius: "30px",
                    // borderBottomLeftRadius: "30px",
                    height: 45,
                  },
                  section: {
                    width: 100,
                    // paddingRight: 10,
                  },
                  // wrapper: { height: "3rem", width: "100%" },
                }}
                rightSection={
                  <ActionIcon
                    onClick={handleFilterData}
                    variant="filled"
                    color="#7cc1d8"
                    styles={{
                      root: {
                        height: 45,
                        width: "100%",
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                      },
                      icon: { height: 45 },
                    }}
                  >
                    {/* <IconSearch size={36} /> */}
                    <IconSearch />
                  </ActionIcon>
                }
                placeholder="Search"
                data={names}
                value={searchValue}
                onChange={setSearchValue}
                defaultDropdownOpened={false}
                withScrollArea={false}
              />
              {/* <div>
                <UnstyledButton>
                  <IconSearch
                    style={{ width: rem(1), height: rem(1) }}
                  ></IconSearch>
                </UnstyledButton>
              </div> */}
              {/* <ActionIcon
                onClick={handleFilterData}
                styles={{
                  root: { height: 45 },
                  icon: { height: 45 },
                }}
              >
                <IconSearch size={36} />
                <IconSearch style={{ height: 45, width: 45 }} />
              </ActionIcon> */}
              {/* <button onClick={handleFilterData}>Search</button> */}
            </div>
            <div
              className={styles.filterContainer}
              //style={{ display: "flex" }}
            >
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
            className={styles.dataContainer}
            // style={{
            //   display: "flex",
            //   gap: 20,
            //   flexWrap: "wrap",
            //   justifyContent: "center",
            // }}
          >
            {data.length != 0 ? createPapers() : noPapers()}
            {/* {createPapers()} */}
          </div>
        </div>
      </main>
    </>
  );
}
