"use client";
import { Dialog, Text, Title, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const CookiesModule = () => {
  let hasShownCookies = false;
  //hasShownCookies = localStorage.getItem("shownCookies") == "shown" || false;
  const [opened, { toggle, close }] = useDisclosure(!hasShownCookies);
  return (
    <>
      <Dialog opened={opened} withCloseButton onClose={close} w={"auto"}>
        <Title order={5}>INFORMACJE O PLIKACH COOKIE I RODO</Title>
        <Text>
          Działając w zgodzie z przepisami RODO zaktualizowaliśmy naszą politykę
          prywatności. Dowiedz się o tym jakie informacje o Tobie i w jakiej
          formie możemy posiadać i do czego je wykorzystujemy.
        </Text>
        <Link href={"/polityka-prywatnosci"}>
          <UnstyledButton>Czytaj więcej...</UnstyledButton>
        </Link>
      </Dialog>
    </>
  );
};

export default CookiesModule;
