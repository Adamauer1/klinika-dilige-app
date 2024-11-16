"use client";
import NextImage from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
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
  Flex,
  Group,
  rem,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  Image,
  SimpleGrid,
  Textarea,
  Container,
  Dialog,
  LoadingOverlay,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
export default function Kontakt() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
      termsOfService: false,
      // captcha: false,
    },

    validate: {
      name: (value) => (value.length != 0 ? null : "Wymagane imię i nazwisko"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Wymagany e-mail"),
      topic: (value) => (value.length != 0 ? null : "Wymagany temat"),
      message: (value) =>
        value.length != 0 ? null : "Wymagany treść wiadomości",
      termsOfService: (value) => (value ? null : "Akceptuję warunki"),
      // captcha: (value) => (value ? null : "Accept Captcha"),
    },
  });
  const [captcha, setCaptcha] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef: any = useRef(null);
  const [visible, toggle] = useDisclosure();

  const handleReCaptchaChange = (value: any) => {
    setCaptcha(value);
    setCaptchaError(!value);
  };

  const handleSubmit = async (values: any) => {
    // event?.preventDefault();
    if (!captcha) {
      console.log("captcha");
      setCaptchaError(true);
      return;
    }
    toggle.open();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        recaptchaToken: captcha,
      }),
    });
    const res = response.json();
    setTimeout(() => {
      //const message: { success: string; message: string } = res.body;
      console.log(response.status);
      if (response.status === 200) {
        notifications.show({
          title: "Sent",
          message: "Successful Submission",
          color: "green",
          position: "top-center",
          styles: {
            root: { backgroundColor: "green" },
            description: { color: "white" },
            title: { color: "white" },
          },
        });
        form.reset();
      } else {
        notifications.show({
          title: "Error: Submission failed",
          message: response.statusText,
          color: "red",
          position: "top-center",
          styles: {
            root: { backgroundColor: "red" },
            description: { color: "white" },
            title: { color: "white" },
          },
        });
      }
      toggle.close();
      recaptchaRef.current.reset();
    }, 1000);
    // if (response.ok) {
    //   alert("Form submitted successfully!");
    //   form.reset();
    // } else {
    //   alert("Form submission failed!");
    // }
    // toggle;
  };

  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row", xl: "row" }}
        h={{ lg: "93vh" }}

        // align={{ base: "center" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: 0.6,
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          <div className={styles.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
              <div>
                <Title
                  order={1}
                  fz={{ lg: rem(50) }}
                  pb={{ lg: rem(10) }}
                  className={styles.title}
                >
                  Kontakt
                </Title>
                <Text className={styles.description} mt="sm" mb={30}>
                  Zadzwoń i umów się na wizytę do swojego specjalisty. Możesz
                  również za pomocą formularza wysłać prośbę o kontakt z naszej
                  strony.
                </Text>

                {/* <ContactIconsList />

              <Group mt="xl">{icons}</Group> */}
                <SimpleGrid cols={{ base: 1, xs: 2, sm: 1, lg: 1, xl: 1 }}>
                  <Flex align={{ base: "center" }} gap={{ base: rem(10) }}>
                    <IconMapPin size={40} stroke={1} />
                    <p>
                      ul. Parkowa 5A/1 <br /> 71-600 Szczecin
                    </p>
                  </Flex>
                  <Flex align={{ base: "center" }} gap={{ base: rem(10) }}>
                    <IconPhone size={40} stroke={1} />
                    <p>+48 501 023 653</p>
                  </Flex>
                  <Flex align={{ base: "center" }} gap={{ base: rem(10) }}>
                    <IconMapPin size={40} stroke={1} />
                    <p>
                      ul. Piłsudskiego 20/2 <br /> 70-462 Szczecin
                    </p>
                  </Flex>
                  <Flex align={{ base: "center" }} gap={{ base: rem(10) }}>
                    <IconPhone size={40} stroke={1} />
                    <p>+48 690 077 653</p>
                  </Flex>
                  <Flex align={{ base: "center" }} gap={{ base: rem(10) }}>
                    <IconMail size={40} stroke={1} />
                    <p>kontakt@klinikadilige.pl</p>
                  </Flex>
                </SimpleGrid>
              </div>
              <div className={styles.form}>
                <LoadingOverlay
                  visible={visible}
                  zIndex={1000}
                  // overlayProps={{ radius: "sm", blur: 2 }}
                />
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <TextInput
                    h={{ base: rem(70), md: rem(80) }}
                    label="Imię i nazwisko"
                    placeholder="imię i nazwisko"
                    key={form.key("name")}
                    {...form.getInputProps("name")}
                    classNames={{
                      input: styles.input,
                      label: styles.inputLabel,
                    }}
                  />
                  <TextInput
                    h={{ base: rem(70), md: rem(80) }}
                    withAsterisk
                    label="E-mail"
                    placeholder="twój@email.com"
                    key={form.key("email")}
                    {...form.getInputProps("email")}
                    mt={{ base: "md", lg: 0 }}
                    classNames={{
                      input: styles.input,
                      label: styles.inputLabel,
                    }}
                  />
                  <TextInput
                    h={{ base: rem(70), md: rem(80) }}
                    withAsterisk
                    label="Temat"
                    placeholder="Temat"
                    key={form.key("topic")}
                    {...form.getInputProps("topic")}
                    mt={{ base: "md", lg: 0 }}
                    classNames={{
                      input: styles.input,
                      label: styles.inputLabel,
                    }}
                  />
                  <Textarea
                    h={rem(230)}
                    label="Treść wiadomości"
                    placeholder="Treść wiadomości"
                    key={form.key("message")}
                    {...form.getInputProps("message")}
                    minRows={4}
                    mt={{ base: "md", lg: 0 }}
                    classNames={{
                      input: styles.textAreaInput,
                      label: styles.inputLabel,
                    }}
                  />
                  <Container
                    hiddenFrom="md"
                    pt={rem(10)}
                    h={rem(150)}
                    pl={0}
                    styles={{ root: { borderWidth: 200 } }}
                  >
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      // size="invisible"
                      size="compact"

                      // asyncScriptOnLoad={asyncScriptOnLoad}
                    />
                  </Container>
                  <Container
                    visibleFrom="md"
                    pt={rem(10)}
                    h={rem(80)}
                    pl={0}
                    // style={{
                    //   borderColor: captchaError ? "red" : "red",
                    //   borderWidth: 2,
                    // }}
                  >
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                      // size="invisible"
                      size="normal"
                      onChange={handleReCaptchaChange}
                      // asyncScriptOnLoad={asyncScriptOnLoad}
                    />
                    <Text hidden={!captchaError} c={"red"} fz={rem(12)}>
                      Click captcha
                    </Text>
                  </Container>
                  <Checkbox
                    h={{ base: rem(20), md: rem(50) }}
                    mt={rem(30)}
                    mb={{ base: rem(60), md: 0 }}
                    label="Akceptuję zasady i Politykę Prywatności zgodną z RODO."
                    key={form.key("termsOfService")}
                    {...form.getInputProps("termsOfService", {
                      type: "checkbox",
                    })}
                  />
                  <Group justify="flex-end" mt="md">
                    <Button type="submit" className={styles.control}>
                      Wyślij
                    </Button>
                  </Group>
                </form>
              </div>
            </SimpleGrid>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className="brightness-75"
            // src={"/stockTwo.jpg"}
            src={"/Zdjęcia dilige/jpg przestrzenie/DSC09965.jpg"}
            alt="Logo"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </Flex>
    </>
  );
}
