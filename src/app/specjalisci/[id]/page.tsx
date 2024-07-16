import Image from "next/image";
import styles from "@/app/specjalisci/[id]/page.module.css";
import { infoData } from "@/data/data";

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
      <main className="" style={{}}>
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            <div className={styles.infoContainer}>
              <div className={styles.imageContainer}>
                <Image
                  className=""
                  src={data?.image}
                  alt="Logo"
                  fill={true}
                  style={{}}
                />
              </div>
              <h2>{data?.name}</h2>
              <h3>Prof. dr hab. n. med. i n. zdr.</h3>
            </div>
          </div>
          <div className={styles.containerRight}>
            <div>
              <h1 className="text-4xl pb-10">O specjaliście</h1>
              <p>
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
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
