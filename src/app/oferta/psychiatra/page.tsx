import {
  Container,
  Flex,
  List,
  ListItem,
  rem,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import styles from "@/app/oferta/psychiatra/page.module.css";

export default function Psychiatra() {
  return (
    <>
      <Flex
        direction={"column"}
        align={{ base: "center", md: "start" }}
        p={rem(20)}
        gap={{ base: rem(40) }}
      >
        {/* <h1>Psychiatra</h1> */}
        <Title order={1}>Psychiatra</Title>
        {/* <div> */}
        <div>
          <Text tw="balance">
            Nasze doświadczenie kliniczne pozwala nam zaproponować pomoc w
            następujących problemach:
          </Text>
          {/* <p>
          Nasze doświadczenie kliniczne pozwala nam zaproponować pomoc w
          następujących problemach:
        </p> */}
          <List withPadding>
            <ListItem>Zaburzenia nastroju</ListItem>
            <ListItem>Zaburzenia lękowe (nerwice)</ListItem>
            <ListItem>Zaburzenia snu</ListItem>
            <ListItem>Zaburzenia osobowości</ListItem>
            <ListItem>Uzależnienia</ListItem>
            <ListItem>Reakcja na ciężki stres, zaburzenia adaptacyjne</ListItem>
            <ListItem>Zaburzenia występujące pod postacią somatyczną</ListItem>
            <ListItem>Schizofrenia i inne zaburzenia psychotyczne</ListItem>
            <ListItem>Zaburzenia odżywiania się</ListItem>
            <ListItem>Zaburzenia psychiczne wieku podeszłego</ListItem>
          </List>
        </div>
        {/* <ul>
          <li>Zaburzenia nastroju</li>
          <li>Zaburzenia lękowe (nerwice)</li>
          <li>Zaburzenia snu</li>
          <li>Zaburzenia osobowości</li>
          <li>Uzależnienia</li>
          <li>Reakcja na ciężki stres, zaburzenia adaptacyjne</li>
          <li>Zaburzenia występujące pod postacią somatyczną</li>
          <li>Schizofrenia i inne zaburzenia psychotyczne</li>
          <li>Zaburzenia odżywiania się</li>
          <li>Zaburzenia psychiczne wieku podeszłego</li>
        </ul> */}
        <UnstyledButton
          component={Link}
          href={{
            pathname: "/specjalisci",
            query: { spec: "Psychiatra" },
          }}
          className={styles.searchButton}
        >
          Search for Spec
        </UnstyledButton>
        {/* <button>
          <Link
            href={{
              pathname: "/specjalisci",
              query: { spec: "Psychiatra" },
            }}
          >
            Search for Spec
          </Link>
        </button> */}
        {/* </div> */}
      </Flex>
    </>
  );
}
