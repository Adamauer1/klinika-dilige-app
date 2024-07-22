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
  AppShell,
} from "@mantine/core";
import { useState, useEffect } from "react";

import { names, infoData } from "../../data/data";
import { IconSearch } from "@tabler/icons-react";

export default function Specjalisci(params: {
  searchParams: any;
  params: any;
}) {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [specValue, setSpecValue] = useState<string | null>(
    params.searchParams.spec
  );
  const [genderValue, setGenderValue] = useState<string | null>();
  //console.log(specValue);
  const handleFilterData = () => {
    let newData = infoData;
    //console.log(newData);
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
    //console.log(searchValue);
    //console.log(specValue);
    //console.log(genderValue);
    console.log(newData);
    // setData(newData);
    return newData;
  };

  const [data, setData] = useState(handleFilterData());

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
      <>
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
                    //onClick={handleFilterData}
                    onClick={() => {
                      setData(handleFilterData());
                    }}
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
                {/* <h2>{specValue}</h2> */}
                <Select
                  placeholder="SPECJALIZACJA"
                  defaultValue={specValue}
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
      </>
    </>
  );
}
