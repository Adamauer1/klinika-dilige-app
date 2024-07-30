"use client";
import { Flex, List, Text, Title } from "@mantine/core";

const PolitykaPrywatnosci = () => {
  return (
    <>
      <Flex direction={"column"}>
        <Title order={1}>Polityka prywatności RODO</Title>
        <Title order={2}>
          Polityka prywatności RODO
          <br />z 25.05.2018
          <br />
          Wstęp – postanowienia ogólne
        </Title>
        <Text>
          Niniejsze zasady dotyczące ochrony danych osobowych mają na celu
          wyjaśnić i uregulować zagadnienia związane z przetwarzaniem danych
          osobowych osób odwiedzających stronę klinikadilige.pl i korzystających
          z tej witryny. Doceniamy Państwa zaufanie i niezwykle starannie i z
          zachowaniem najwyższych standardów chronimy Państwa dane przed
          dostępem osób nieupoważnionych. Państwa dane osobowe i informacje
          chronione są przez techniczne systemy bezpieczeństwa i dodatkowe
          procesy uprawniające. Dotyczy to zarówno transferu danych, jak i ich
          zapisywania na naszych serwerach.
          <br />
          <br />
          Administratorem, czyli podmiotem decydującym o tym, jak będą
          wykorzystywane Państwa dane osobowe, jest Serwis IT operator
          internetowej strony www dostępnej pod adresem www.klinikadilige.pl
          <br />
          <br />
          Dane osobowe Użytkowników są przetwarzane z poszanowaniem zasad
          przewidzianych w RODO, tzn. Rozporządzeniu Parlamentu Europejskiego i
          Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
          fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
          swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
          (ogólne rozporządzenie o ochronie danych, dalej „RODO”), jak również
          przewidzianych w polskiej ustawie o ochronie danych osobowych, aktów
          wykonawczych do tej ustawy oraz ustawie o świadczeniu usług drogą
          elektroniczną z dnia 18 lipca 2002 r. (Dz. U. z 2002r., nr 144, poz.
          1204, ze zm.).
          <br />
          <br />
          W celu realizacji wymogów ustawowych, Administrator dobiera i stosuje
          odpowiednie środki techniczne i organizacyjne zapewniające ochronę
          przetwarzanych danych oraz zabezpiecza dane przed ich udostępnieniem
          osobom nieupoważnionym, jak również przed ich przetwarzaniem z
          naruszeniem obowiązujących przepisów prawa.
          <br />
          <br />
          <List withPadding type="ordered">
            <List.Item>
              <Text>
                Podstawą przetwarzania danych osobowych przez Administratora w
                celu
              </Text>
              <List>
                <List.Item>
                  <Text>
                    - rejestracji konta w serwisie jest art. 6 ust. 1 lit. a
                    RODO, tj. wyraźna zgoda Użytkownika na przetwarzanie tych
                    danych, Wspomniana zgoda potwierdzana jest poprzez
                    akceptację treści warunków korzystania z serwisu,
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>
                    - niezbędnym do wypełnienia uzasadnionych interesów
                    Administratora w tym prowadzenia działań marketingowych i
                    kampanii reklamowych produktów lub usług Administratora
                    drogą elektroniczną lub telefoniczną na podstawie odrębnej
                    wyrażonej zgody zgodnie z art. 6 ust. 1 lit. a RODO, tj.
                    wyraźna zgoda Użytkownika na przetwarzanie tych danych
                    udzielana przez formularze umieszczone na stronie serwisu,
                  </Text>
                </List.Item>
              </List>
            </List.Item>
            <List.Item></List.Item>
          </List>
        </Text>
      </Flex>
    </>
  );
};

export default PolitykaPrywatnosci;
