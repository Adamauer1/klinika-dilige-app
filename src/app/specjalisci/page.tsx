"use client";
//import Image from "next/image";
import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/specjalisci/page.module.css";
import Link from "next/link";
import {
  Autocomplete,
  Card,
  Image,
  Group,
  Radio,
  Text,
  rem,
  Paper,
} from "@mantine/core";
import { useState } from "react";
export default function Specjalisci() {
  const [officeValue, setOfficeValue] = useState("");
  const [specValue, setSpecValue] = useState("");
  const [genderValue, setGenderValue] = useState("");

  const createPapers = () => {
    return Array.from({ length: 10 }).map((_, index) => (
      <Paper
        key={index}
        style={{
          width: 400,
          height: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          style={{ borderRadius: 20 }}
          src={"/stockThree.jpg"}
          alt="image"
          h={450}
          w={"100%"}
        />
        <Text styles={{ root: { margin: 10 } }}>Jan Kowalski</Text>
      </Paper>
    ));
  };

  return (
    <>
      <Link href={"/specjalisci/1"}>Test</Link>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw",
          }}
        >
          <h1>Search for Specjalisci</h1>
          <div style={{ display: "flex", width: "40%", paddingBottom: 50 }}>
            <Autocomplete
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                },
                // wrapper: { height: "3rem", width: "100%" },
              }}
              placeholder="Search"
              data={["React", "Angular", "Vue", "Svelte"]}
              defaultDropdownOpened={false}
            />
            <button>Search</button>
          </div>
          {/* <div>
            <div>
              <div>Wyszukiwanie...</div>
              <div>
                <h2>GABINET</h2>
                <Radio.Group value={officeValue} onChange={setOfficeValue}>
                  <Radio value="psychiatra" label="Psychiatra"></Radio>
                  <Radio value="psycholog" label="Psycholog"></Radio>
                  <Radio
                    value="Psychoterapeuta"
                    label="Psychoterapeuta"
                  ></Radio>
                  <Radio value="" label="Terapeuta uzależnień"></Radio>
                  <Radio value="" label="Psychoseksuolog"></Radio>
                  <Radio value="" label="EEG biofeedback"></Radio>
                </Radio.Group>
              </div>
              <div>
                <h2>SPECJALIZACJA</h2>
                <Radio.Group value={specValue} onChange={setSpecValue}>
                  <Radio value="" label="psychiatra"></Radio>
                  <Radio value="" label="psycholog"></Radio>
                  <Radio value="" label="pedagog specjalny"></Radio>
                  <Radio value="" label="neuroterapeuta"></Radio>
                  <Radio value="" label="psychoterapeuta"></Radio>
                  <Radio value="" label="psychoterapia uzależnień"></Radio>
                  <Radio value="" label="terapeuta środowiskowy"></Radio>
                  <Radio
                    value=""
                    label="specjalista terapii uzależnień"
                  ></Radio>
                  <Radio value="" label="pedagog"></Radio>
                  <Radio value="" label="socjoterapeuta"></Radio>
                  <Radio value="" label="psychoseksuolog"></Radio>
                </Radio.Group>
              </div>
              <div>
                <h2>PŁEĆ</h2>
                <Radio.Group value={genderValue} onChange={setGenderValue}>
                  <Radio value="" label="Mężczyzna"></Radio>
                  <Radio value="" label="Kobieta"></Radio>
                </Radio.Group>
              </div>
              <div>
                <button>Search</button>
                <button>Reset</button>
              </div>
            </div>
          </div> */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {/* <Paper
              style={{
                width: 250,
                height: 250,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                style={{ borderRadius: 20 }}
                src={"/stockThree.jpg"}
                alt="image"
                h={250}
                w={"100%"}
              />
              <Text styles={{ root: { margin: 10 } }}>Jan Kowalski</Text>
            </Paper> */}
            {createPapers()}
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
