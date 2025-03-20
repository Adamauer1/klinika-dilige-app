import NextImage from "next/image";
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Container,
  Flex,
  Grid,
  Group,
  HoverCard,
  HoverCardTarget,
  Image,
  List,
  ListItem,
  rem,
  SimpleGrid,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import styles from "@/app/oferta/page.module.css";
import Link from "next/link";
import { ThemeIcon } from "@mantine/core";
import { ReactElement, ReactNode } from "react";
const charactersList = [
  {
    id: "psychiatria",
    image: "/icons/pills_507469.png",
    label: "Psychiatria",

    content: (
      <Container p={rem(5)}>
        <div style={{ paddingBottom: rem(20) }}>
          <Text tw="balance">
            Nasze doświadczenie kliniczne pozwala nam zaproponować pomoc w
            następujących problemach:
          </Text>

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
          <Text>
            Prosimy o kontakt telefoniczny z naszą rejestracją celem wyboru
            najlepszego specjalisty,który pomoże rozwiązać Państwa problem
          </Text>
        </div>
        <UnstyledButton
          component={Link}
          href={{
            pathname: "/specjalisci",
            query: { spec: "Psychiatra" },
          }}
          className={styles.searchButton}
        >
          Wyszukiwanie specjalistów
        </UnstyledButton>
        <div style={{ marginTop: rem(15) }}>
          <a
            href="https://www.freepik.com/icon/pills_507469#fromView=search&page=1&position=43&uuid=ea63215e-2e07-4148-a78a-1e68b961ec42"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: rem(10),
            }}
          >
            Ikona według Dreamstale
          </a>
        </div>
      </Container>
    ),
  },

  {
    id: "psychologia",
    image: "/icons/empathy_1491198.png",
    label: "Psychologia",

    content: (
      <>
        <Container p={rem(5)}>
          <div style={{ paddingBottom: rem(20) }}>
            <Text>
              Wśród naszych profesjonalistów są psychologowie o różnych
              specjalizacjach. Jeśli poszukują Państwo psychoterapii, proszę
              przejść do zakładki Psychoterapia. Ponadto oferujemy:
            </Text>
            <List>
              <ListItem>badania neuropsychologiczne</ListItem>
              <ListItem>badania w kierunku ADHD</ListItem>
              <ListItem>badania osobowości</ListItem>
              <ListItem>badania formalnych zaburzeń myślenia</ListItem>
            </List>
          </div>
          <UnstyledButton
            component={Link}
            href={{
              pathname: "/specjalisci",
              query: { spec: "Psycholog" },
            }}
            className={styles.searchButton}
          >
            Wyszukiwanie specjalistów
          </UnstyledButton>
          <div style={{ marginTop: rem(15) }}>
            <a
              href="https://www.freepik.com/icon/empathy_1491198#fromView=family&page=1&position=48&uuid=5cdb57e2-f005-4d2d-b2f9-6c01a676a084"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: rem(10),
              }}
            >
              Ikona według Smashicons
            </a>
          </div>
        </Container>
      </>
    ),
  },

  {
    id: "psychoseksuologia",
    image: "/icons/single-bed_9828083.png",
    label: "Psychoseksuologia",
    content: (
      <>
        <Container p={rem(5)}>
          <div style={{ paddingBottom: rem(20) }}>
            <Title order={4}>Poradnictwo i terapia psychoseksuologiczna</Title>
            <Text>
              Seksualność to nierozerwalne połączenie ciała i umysłu. Terapia
              psychoseksuologiczna polega na zastosowaniu psychologicznych metod
              diagnozy i leczenia zaburzeń i problemów seksualnych, w oparciu o
              najnowsze standardy postępowania. Zwykle jest prowadzona po
              wykluczeniu biologicznego podłoża trudności seksualnych lub
              stanowi wartościowe uzupełnienie leczenia prowadzonego przez
              lekarza. Dotyczy pokonywania takich trudności jak:
            </Text>

            <List withPadding>
              <ListItem>dysforia płciowa</ListItem>
              <ListItem>
                emocjonalne, poznawcze i społeczne podłoże dysfunkcji
                seksualnych - pożądania, uzyskiwania podniecenia i prawidłowej
                reakcji narządów płciowych, orgazmu,
              </ListItem>
              <ListItem>brak zadowolenia ze swojego życia seksualnego</ListItem>
              <ListItem>
                problemy w związkach (hetero i homoseksualnych)
              </ListItem>
              <ListItem>
                brak pełnej akceptacji swojej tożsamości seksualnej i płciowej
                (np. terapia afirmatywna i działania rozwojowe dla osób LGBT)
              </ListItem>
              <ListItem>zaburzenia preferencji seksualnych</ListItem>
              <ListItem>inne, specyficzne problemy natury seksualnej</ListItem>
            </List>
          </div>
          <UnstyledButton
            component={Link}
            href={{
              pathname: "/specjalisci",
              query: { spec: "Psychoseksuolog" },
            }}
            className={styles.searchButton}
          >
            Wyszukiwanie specjalistów
          </UnstyledButton>
          <div style={{ marginTop: rem(15) }}>
            <a
              href="https://www.freepik.com/icon/drugs_1022360#fromView=search&page=1&position=5&uuid=4f47d283-db6d-433d-a2b9-408bbf41cad4"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: rem(10),
              }}
            >
              Ikona według Freepik
            </a>
          </div>
        </Container>
      </>
    ),
  },
  {
    id: "psychoterapia",
    image: "/icons/autism_1491171.png",
    label: "Psychoterapia",
    content: (
      <>
        <Container p={rem(5)}>
          <div style={{ paddingBottom: rem(20) }}>
            <List type="ordered">
              <ListItem>
                <Title order={4}>Psychoterapia systemowa</Title>
              </ListItem>
              <Text>
                Psychoterapia systemowa opiera się ma założeniu, że człowiek i
                otaczająca go rzeczywistość stanowią zbiór dynamicznie
                połączonych ze sobą elementów, które nieustannie na siebie
                wpływają według określonych zasad. Jak każda szkoła
                psychoterapii, dąży do pomocy klientowi w uzyskaniu pożądanej
                przez siebie zmiany w zachowaniu i odczuwaniu. W
                wykorzystywanych metodach skupia się głównie na wykorzystaniu
                potencjału człowieka, na wzorcach jego komunikowania się z
                innymi oraz na wykorzystaniu jego mocnych stron w radzeniu sobie
                z problemami. Jest wykorzystywana w pracy indywidualnej,
                grupowej, terapii par i rodzin.
              </Text>
              <ListItem>
                <Title order={4}>Psychoterapia psychodynamiczna</Title>
              </ListItem>
              <Text>
                Psychoterapia psychodynamiczna oparta jest na psychoanalizie Z.
                Freuda. Jest tzw. terapią wglądową, gdyż jej istotą jest
                wprowadzanie do świadomości treści tkwiących w sferze
                podświadomej. Ponieważ przyczyn problemów upatruje się w
                nieprawidłowym rozwoju osobowości, w dzieciństwie, sporo czasu
                poświęca się zwykle relacjom z rodzicami i innymi osobami
                znaczącymi. Praca koncentruje się na uświadomieniu sobie przez
                pacjenta jego wewnętrznych konfliktów emocjonalnych, daje
                możliwość uświadomienia wypartych przeżyć oraz pragnień
                wyrażanych poprzez objawy. Osiągnięcie wglądu daje możliwość
                zrozumienia, zaakceptowania dotychczasowych doświadczeń oraz
                wprowadzenia prozdrowotnych zmian w stylu funkcjonowania, co
                skutkuje poprawą samopoczucia. Psychoterapia ma na celu
                korygowanie zaburzonego przeżywania i zachowania, postaw,
                sposobów reagowania oraz usunięcie objawów i ich przyczyn.
                Narzędziem leczniczym są bodźce, których źródłem jest
                psychoterapeuta. Psychoterapia dąży także do rozwoju poczucia
                sprawstwa, tożsamości, poczucia własnej wartości, umiejętności
                radzenia sobie z emocjami, zdolności do miłości, pracy i zabawy
                oraz poczucia ogólnego dobrostanu.
              </Text>
              <Text>
                Psychoterapia psychodynamiczna opiera się o relację, której
                istotą jest więź pomiędzy terapeutą a pacjentem i dialog
                terapeutyczny. Pacjent jest zachęcany do swobodnego dzielenia
                się swoimi myślami, wspomnieniami, uczuciami, fantazjami i
                skojarzeniami. Psychoterapeuta podczas sesji zachowuje
                powściągliwość, w atmosferze poczucia bezpieczeństwa swoimi
                krótkimi wypowiedziami próbuje sprowokować u pacjenta wgląd
                (zrozumienie siebie, poszerzenie „dostępu” do siebie). Relację
                terapeutyczną kształtują wzajemne reakcje pacjenta i terapeuty
                na swoje zachowania. Umożliwia to pacjentowi przepracowanie
                wzorców budowania relacji oraz przeprowadzenie zmian w
                przeżywaniu. Niekiedy proces terapeutyczny zostaje zakłócony
                poprzez pojawienie się zjawiska przeniesienia, czyli
                wprowadzenia w relacje osoby z życia pacjenta i jej realnego
                wpływu na aktualne emocje i reakcje. Celem jest uświadomienie
                pacjentowi występującego zjawiska, które powoduje
                zniekształcenia w odbiorze rzeczywistości.
              </Text>
              <Text>
                Sesje terapeutyczne odbywają się raz w tygodniu, w stałym
                terminie oraz miejscu. Czas trwania procesu terapeutycznego jest
                zindywidualizowany, może trwać od kilku miesięcy do kilku lat.
                Ważnym elementem terapii jest motywacja pacjenta do zmiany.
              </Text>
              <ListItem>
                <Title order={4}>
                  Psychoterapia behawioralno-poznawcza (CBT)
                </Title>
              </ListItem>
              <Text>
                CBT jest zalecana jako metoda psychoterapii skutecznie
                wspierająca leczenie zaburzeń psychicznych. Stosuje się ją także
                w sytuacjach kryzysowych, pomaga uporać się z trudnymi emocjami
                i niekorzystnymi schematami zachowań. Jest metodą
                ustrukturyzowaną, krótkoterminową, zmierzającą do realizacji
                ustalonych celów, poprzez zmianę schematów myślenia i działania.
              </Text>
              <Text>
                Proponujemy także terapię schematów, będącą rozszerzeniem
                klasycznej terapii behawioralno-poznawczej. Jest ona dedykowana
                szczególnie dla pacjentów z nieprawidłowym rozwojem osobowości
                lub z zaburzeniami osobowości.
              </Text>
              <ListItem>
                <Title order={4}>Terapia par</Title>
              </ListItem>
              <Text>
                Jest skierowana do par i małżeństw, które znalazły się w
                sytuacji kryzysu i aktualnie samodzielnie nie są w stanie go
                przezwyciężyć. Polega na zastosowaniu metod psychologicznych i
                psychoterapeutycznych, dostosowanych do pracy z obojgiem
                partnerów. Terapia przebiega głównie w postaci szczerej,
                obiektywnej i nieoceniającej rozmowy z terapeutą lub zespołem
                terapeutycznym. Pozwala na wzajemne zrozumienie partnerów w
                aktualnej, często skomplikowanej sytuacji oraz na znalezienie
                akceptowanych przez obojga rozwiązań. Często jest uzupełniana
                poradnictwem lub psychoterapią indywidualną każdego z partnerów,
                co zwiększa jej skuteczność.
              </Text>
            </List>
          </div>
          <UnstyledButton
            component={Link}
            href={{
              pathname: "/specjalisci",
              query: { spec: "Psychoterapeuta" },
            }}
            className={styles.searchButton}
          >
            Wyszukiwanie specjalistów
          </UnstyledButton>
          <div style={{ marginTop: rem(15) }}>
            <a
              href="https://www.freepik.com/icon/single-bed_9828083#fromView=search&page=1&position=52&uuid=97ceed06-3bf6-4bb7-baf5-9d6ed73ddb2a"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: rem(10),
              }}
            >
              Ikona według Mayor Icons
            </a>
          </div>
        </Container>
      </>
    ),
  },
  {
    id: "terapia-uzaleznien",
    image: "/icons/drugs_1022360.png",
    label: "Terapia uzależnień",
    content: (
      <>
        <Container p={rem(5)}>
          <div style={{ paddingBottom: rem(20) }}>
            <List>
              <ListItem>
                sesje indywidualne dla osób uzależnionych od alkoholu,
                narkotyków, dopalaczy
              </ListItem>
              <ListItem>
                sesje indywidualne dla osób z tzw. uzależnieniami behawioralnymi
                (uzależnienie od Internetu, gier, mediów społecznościowych,
                komputera, uzależnienie od telefonu, smartfona, uzależnienie od
                hazardu (patologiczny hazard), uzależnienie od seksu,
                pracoholizm, zakupoholizm, uzależnienie od opalania się i inne)
              </ListItem>
              <ListItem>
                sesje indywidualne dla osób współuzależnionych i osób DDA -
                dorosłe dziecko alkoholika
              </ListItem>
              <ListItem>
                sesje indywidualne dla osób z uzależnieniem mieszanym
              </ListItem>
              <ListItem>
                sesje indywidualne dla osób z podwójną diagnozą
              </ListItem>
              <ListItem>
                praca terapeutyczna na etapie podstawowym i pogłębionym
              </ListItem>
            </List>
          </div>

          <UnstyledButton
            component={Link}
            href={{
              pathname: "/specjalisci",
              query: { spec: "Specjalista terapii uzależnień" },
            }}
            className={styles.searchButton}
          >
            Wyszukiwanie specjalistów
          </UnstyledButton>
          <div style={{ marginTop: rem(15) }}>
            <a
              href="https://www.freepik.com/icon/autism_1491171#fromView=search&page=1&position=24&uuid=2a21dd56-3eb0-43ff-83df-8c1db541f4db"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: rem(10),
              }}
            >
              Ikona według Smashicons
            </a>
          </div>
        </Container>
      </>
    ),
  },
  {
    id: "terapia-grupowa",
    image: "/icons/armchair_5376974.png",
    label: "Terapia grupowa",
    content: (
      <>
        <Container p={rem(5)}>
          <div style={{ paddingBottom: rem(20) }}>
            <Text>
              terapia grupowa dla osób współuzależnionych, prowadzona przez
              specjalistę terapii uzależnień, w małych grupach terapeutycznych.
              Spotkania odbywają się co tydzień, każde spotkanie składa się z
              trzech sesji terapii.
            </Text>
            {/* <List>
              <ListItem>
                terapia grupowa dla osób współuzależnionych, prowadzona przez
                specjalistę terapii uzależnień, w małych grupach
                terapeutycznych. Spotkania odbywają się co tydzień, każde
                spotkanie składa się z trzech sesji terapii.
              </ListItem>
            </List> */}
          </div>
          <UnstyledButton
            component={Link}
            href={{
              pathname: "/specjalisci",
              query: { spec: "Terapeuta środowiskowy" },
            }}
            className={styles.searchButton}
          >
            Wyszukiwanie specjalistów
          </UnstyledButton>
          <div style={{ marginTop: rem(15) }}>
            <a
              href="https://www.freepik.com/icon/pills_507469#fromView=search&page=1&position=43&uuid=ea63215e-2e07-4148-a78a-1e68b961ec42"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: rem(10),
              }}
            >
              Ikona według Freepik
            </a>
          </div>
        </Container>
      </>
    ),
  },
];
export default function Oferta() {
  const items = charactersList.map((item) => (
    <AccordionItem value={item.id} key={item.label}>
      <AccordionControl>
        <Group wrap="nowrap" display={"flex"}>
          <Avatar src={item.image} alt="test" radius="sm" size="lg" />
          <div>
            <Text>{item.label}</Text>
          </div>
        </Group>
      </AccordionControl>
      <AccordionPanel>{item.content}</AccordionPanel>
    </AccordionItem>
  ));
  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        p={{ base: rem(10), sm: rem(40), lg: rem(60) }}
      >
        <Title
          order={1}
          pb={rem(50)}
          // styles={{ root: { alignSelf: "start" } }}
        >
          Co oferujemy?
        </Title>
        <Accordion
          variant="separated"
          w={{ base: "100%", lg: "50%" }}
          // styles={{ root: { width: rem(1000) } }}
          // styles={{ root: { width: rem(1000) } }}
        >
          {items}
        </Accordion>
      </Flex>
    </>
  );
}
