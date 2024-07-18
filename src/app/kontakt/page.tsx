"use client";
import Image from "next/image";
import stockTwo from "/public/stockTwo.jpg";
import styles from "@/app/kontakt/page.module.css";
import { useForm } from "@mantine/form";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconPhoto,
} from "@tabler/icons-react";
import {
  Button,
  Checkbox,
  Group,
  rem,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
export default function Kontakt() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
      termsOfService: false,
      captcha: false,
    },

    validate: {
      name: (value) => (value.length != 0 ? null : "Need Name"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      topic: (value) => (value.length != 0 ? null : "Need Topic"),
      message: (value) => (value.length != 0 ? null : "Need Message"),
    },
  });
  return (
    <main className="" style={{}}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h1 className={styles.h1}>Kontakt</h1>
          <p>
            Zadzwoń i umów się na wizytę do swojego specjalisty. Możesz również
            za pomocą formularza wysłać prośbę o kontakt z naszej strony.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconMapPin size={40} stroke={1} />
            {/* <ThemeIcon>
              <IconPhoto />
            </ThemeIcon> */}
            <p>
              ul. Parkowa 5A/1 <br /> 71-600 Szczecin
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconMapPin size={40} stroke={1} />
            <p>
              ul. Piłsudskiego 20/2 <br /> 70-462 Szczecin
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconMail size={40} stroke={1} />
            <p>kontakt@klinikadilige.pl</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconPhone size={40} stroke={1} />
            <p>+48 501 023 653</p>
          </div>
        </div>
        <div className={styles.formOuterContainer}>
          <div className={styles.formContainer}>
            <form
              className={styles.form}
              onSubmit={form.onSubmit((values) => console.log(values))}
            >
              <input
                className={styles.formInput}
                placeholder="imię i nazwisko"
                key={form.key("name")}
                {...form.getInputProps("name")}
              ></input>
              {/* <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                key={form.key("email")}
                {...form.getInputProps("email")}
              /> */}
              <input
                className={styles.formInput}
                placeholder="Email"
                key={form.key("email")}
                {...form.getInputProps("email")}
              ></input>
              <input
                className={styles.formInput}
                placeholder="Temat"
                key={form.key("topic")}
                {...form.getInputProps("topic")}
              ></input>
              <textarea
                className={styles.formTextArea}
                placeholder="Treść wiadomości"
                key={form.key("message")}
                {...form.getInputProps("message")}
              ></textarea>

              <Checkbox
                mt="md"
                label="I agree to sell my privacy"
                key={form.key("termsOfService")}
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
              />
              <Button type="submit">Submit</Button>
              {/* <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
              </Group> */}
            </form>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className="brightness-75"
            src={stockTwo}
            alt="Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* <div className=" fixed z-[-10] top-0 w-screen h-screen">
        <Image
          className="brightness-75"
          src="/stockOne.jpg"
          alt="Logo"
          fill
          // style={{ zIndex: -10 }}
        />
      </div> */}

      {/* <div className="flex flex-col items-center">
        <div className="">
          <h1>Skontaktuj się z nami</h1>
          <p>
            Zadzwoń i umów się na wizytę do swojego specjalisty. Możesz również
            za pomocą formularza wysłać prośbę o kontakt z naszej strony.
          </p>
        </div>
        <div className="flex">
          <div>
            <div>+48 501 023 653</div>
          </div>
          <div>
            <div>ul. Parkowa 5A/1 71-600 Szczecin</div>
          </div>
          <div>
            <div>kontakt@klinikadilige.pl</div>
          </div>
        </div>
        <div className="max-w-[500px] bg-blue-400 border border-solid border-slate-600">
          <form className="flex flex-col">
            <input
              className={`${test} mt-6`}
              placeholder="imię i nazwisko"
            ></input>
            <input className={test} placeholder="Email"></input>
            <input className={test} placeholder="Temat"></input>
            <textarea
              className="m-4 h-44 pl-3 pt-1 border border-solid border-slate-600"
              placeholder="Treść wiadomości"
            ></textarea>
            <button className="ml-4 mr-4 mb-6 h-12 bg-white">Submit</button>
          </form>
        </div>
      </div> */}

      {/* <div className="flex">
        <div className="flex-1">
          <div className="pl-14">
            <h1 className="text-6xl">Skontaktuj się z nami</h1>
            <p className="text-xl">
              Zadzwoń i umów się na wizytę do swojego specjalisty. Możesz
              również za pomocą formularza wysłać prośbę o kontakt z naszej
              strony.
            </p>
            <div className="flex flex-col">
              <div>+48 501 023 653</div>
              <div>ul. Parkowa 5A/1 71-600 Szczecin</div>
              <div>kontakt@klinikadilige.pl</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-[500px] bg-blue-400 border border-solid border-slate-600">
            <form className="flex flex-col">
              <input
                className={`${test} mt-6`}
                placeholder="imię i nazwisko"
              ></input>
              <input className={test} placeholder="Email"></input>
              <input className={test} placeholder="Temat"></input>
              <textarea
                className="m-4 h-44 pl-3 pt-1 border border-solid border-slate-600"
                placeholder="Treść wiadomości"
              ></textarea>
              <button className="ml-4 mr-4 mb-6 h-12 bg-white">Submit</button>
            </form>
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-col items-center">
        <h1 className=" text-6xl pb-4">Skontaktuj się z nami</h1>
        <p className="text-2xl">
          Zadzwoń i umów się na wizytę do swojego specjalisty. Możesz również za
          pomocą formularza wysłać prośbę o kontakt z naszej strony.
        </p>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="flex flex-col pl-64 py-20">
            <div className="border">
              <h2 className="text-3xl pb-4">Klinika Dilige</h2>
              <div className="text-xl pb-4">+48 501 023 653</div>
              <div className="text-xl pb-4">
                ul. Parkowa 5A/1 71-600 Szczecin
              </div>
              <div className="text-xl pb-4">kontakt@klinikadilige.pl</div>
            </div>
          </div>
        </div>

        <div className="flex-1"></div>
      </div>
      <div className=" max-w-[500px] bg-blue-400 border border-solid border-slate-600">
        <form className="flex flex-col">
          <input
            className={`${test} mt-6`}
            placeholder="imię i nazwisko"
          ></input>
          <input className={test} placeholder="Email"></input>
          <input className={test} placeholder="Temat"></input>
          <textarea
            className="m-4 h-44 pl-3 pt-1 border border-solid border-slate-600"
            placeholder="Treść wiadomości"
          ></textarea>
          <button className="ml-4 mr-4 mb-6 h-12 bg-white">Submit</button>
        </form>
      </div> */}
    </main>
  );
}
