import {Flex, List, ListItem, rem, Text, Title} from "@mantine/core";
import styles from "./page.module.css";

const PolitykaPrywatnosci = () => {
  return (
    <>
      <Flex
        direction={"column"}
        pl={{ base: rem(50), lg: rem(200) }}
        pr={{ base: rem(50), lg: rem(200) }}
        pt={{ base: rem(10), lg: rem(50) }}
        pb={{ base: rem(50), lg: rem(100) }}
        ta={{ base: "center", lg: "start", xl: "start" }}
        align={{ base: "center", lg: "start", xl: "start" }}
        gap={{ base: rem(15) }}
      >
        <Title order={1} fz={{ base: rem(20), xs: rem(30) }}>
          Polityka prywatności RODO
        </Title>
        <Title order={2} classNames={{ root: styles.title }}>
          Polityka prywatności RODO
          <br />z 25.05.2018
          <br />
          Wstęp – postanowienia ogólne
        </Title>
        <Text classNames={{ root: styles.text }}>
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
        </Text>
        <List type="ordered" classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Podstawą przetwarzania danych osobowych przez Administratora w
              celu
            </Text>
            <List size="xs">
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  - rejestracji konta w serwisie jest art. 6 ust. 1 lit. a RODO,
                  tj. wyraźna zgoda Użytkownika na przetwarzanie tych danych,
                  Wspomniana zgoda potwierdzana jest poprzez akceptację treści
                  warunków korzystania z serwisu,
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  - niezbędnym do wypełnienia uzasadnionych interesów
                  Administratora w tym prowadzenia działań marketingowych i
                  kampanii reklamowych produktów lub usług Administratora drogą
                  elektroniczną lub telefoniczną na podstawie odrębnej wyrażonej
                  zgody zgodnie z art. 6 ust. 1 lit. a RODO, tj. wyraźna zgoda
                  Użytkownika na przetwarzanie tych danych udzielana przez
                  formularze umieszczone na stronie serwisu,
                </Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Administrator przetwarza dane osobowe dobrowolnie podane przez
              Użytkowników oraz zbierane automatycznie dane na temat sposobu
              korzystania z Serwisu (w tym narzędzi użytych do korzystania z
              Serwisu) zgodnie z art. 6 ust. 1 lit. f RODO, tj. ze względu na
              prawnie usprawiedliwione cele realizowane przez Administratora, a
              w szczególności w celu marketingu bezpośredniego produktów lub
              usług Administratora, jak również w celu optymalizacji,
              usprawnienia i personalizacji funkcji Serwisu i oraz w celu
              tworzenia statystyk. Administrator zapewnia, że takie
              przetwarzanie nie będzie naruszać praw i wolności osób, których
              dane dotyczą.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Dane osobowe podawane dobrowolnie przez Użytkownika nie są łączone
              ze zbieranymi automatycznie danymi na temat sposobu korzystania
              przez tego Użytkownika z Serwisu. Administrator informuje, że ze
              względów technicznych czasami może dojść do takiego połączenia,
              jednakże w takiej sytuacji tak połączone dane będą przetwarzane
              przez Administratora wyłącznie ze względu na prawnie
              usprawiedliwione cele realizowane przez Administratora, a w
              szczególności w celu optymalizacji, usprawnienia i personalizacji
              funkcji Serwisu i oraz w celu tworzenia statystyk na wew. potrzeby
              Administratora.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Za odrębnie wyrażonymi zgodami Użytkownika, jego dane osobowe mogą
              być przetwarzane w celu przesyłania mu drogą elektroniczną
              informacji handlowych na temat Usług Administratora. Użytkownik ma
              prawo w każdym czasie żądać zaprzestania wysyłania mu informacji
              handlowych drogą elektroniczną lub zaprzestania wykorzystywania
              jego numeru telefonu do celów marketingu bezpośredniego.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Dane przetwarzane dla celów Rejestracji w serwisie będą
              przetwarzane do czasu ewentualnego usunięcia konta serwisowego
              (czego skutkiem będzie rozwiązanie umowy o świadczenie Usług
              Elektronicznych).
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Dane przetwarzane w celach marketingowych Spółki drogą
              elektroniczną lub telefoniczną będą przetwarzane do czasu
              ewentualnego cofnięcia odpowiednich zgód.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Dane osobowe dla celów kontaktu z Administratorem będą
              przetwarzane w okresie prowadzenia tego kontaktu, a później będą
              archiwizowane przez okres 3 lat od zakończenia kontaktu, co jest
              uzasadnione koniecznością odtworzenie treści takiego kontaktu w
              związku z dochodzeniem ewentualnych roszczeń.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Dane przetwarzane w związku z dochodzeniem ewentualnych roszczeń,
              jak również w celach archiwizacyjnych będą przetwarzane przez 3
              lata od zakończenia umowy.
            </Text>
          </ListItem>
        </List>
        <Title order={2} classNames={{ root: styles.title }}>
          Cel i zakres zbierania danych oraz odbiorcy danych
        </Title>
        <List type="ordered" classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              {`Każdorazowo cel, zakres oraz odbiorcy danych przetwarzanych przez Administratora wynikają ze zgody Użytkownika lub przepisów prawa oraz doprecyzowywane są w wyniku działań podejmowanych przez Użytkownika w Serwisie lub w ramach innych kanałów komunikacji z Użytkownikiem.2. Administrator dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą, a w szczególności zapewnia, że zbierane przez niego dane są przetwarzane:`}
            </Text>
            <List type="ordered" classNames={{ root: styles.list }}>
              <ListItem>
                <Text
                  classNames={{ root: styles.text }}
                >{`zgodnie z prawem, rzetelnie i w sposób przejrzysty dla osoby, której dane dotyczą („zgodność z prawem, rzetelność i przejrzystość”);`}</Text>
              </ListItem>
              <ListItem>
                <Text
                  classNames={{ root: styles.text }}
                >{`w konkretnych, wyraźnych i prawnie uzasadnionych celach i nieprzetwarzane dalej w sposób niezgodny z tymi celami (,,ograniczenie celu’’);`}</Text>
              </ListItem>
              <ListItem>
                <Text
                  classNames={{ root: styles.text }}
                >{`adekwatnie, stosownie oraz ograniczone do tego, co niezbędne do celów, w których są przetwarzane („minimalizacja danych”);`}</Text>
              </ListItem>
              <ListItem>
                <Text
                  classNames={{ root: styles.text }}
                >{`prawidłowo, a w razie potrzeby dane osobowe są uaktualniane („prawidłowość”);`}</Text>
              </ListItem>
              <ListItem>
                <Text
                  classNames={{ root: styles.text }}
                >{`w formie umożliwiającej identyfikację osoby, której dane dotyczą, przez okres nie dłuższy, niż jest to niezbędne do celów, w których dane te są przetwarzane. („ograniczenie przechowywania”);`}</Text>
              </ListItem>
              <ListItem>
                <Text
                  classNames={{ root: styles.text }}
                >{`w sposób zapewniający odpowiednie bezpieczeństwo danych osobowych, w tym ochronę przed niedozwolonym lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą, zniszczeniem lub uszkodzeniem, za pomocą odpowiednich środków technicznych lub organizacyjnych („integralność i poufność”).`}</Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Użytkownik podaje następujące dane osobowe:
            </Text>
            <List classNames={{ root: styles.list }}>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  w procesie rejestracji w Serwisie: adres e-mail, imię,
                  nazwisko, adres oraz numer telefonu.
                </Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Możliwe cele zbierania danych osobowych Użytkowników przez
              Administratora:
            </Text>
            <List type="ordered" classNames={{ root: styles.list }}>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  zakładanie konta Użytkownika w Serwisie
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  realizacji działań marketingowych własnych produktów i usług
                  (w formie elektronicznej lub telefonicznej), za odrębnie
                  wyrażoną zgodą Użytkownika
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  realizacji działań marketingowych produktów i usług partnera
                  Administratora (w formie elektronicznej lub telefonicznej), za
                  odrębnie wyrażoną zgodą Użytkownika
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  budowanie i realizacja rankingów przy akceptacji regulaminu
                  danego wydarzenia
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  realizacja konkursów przy akceptacji regulaminu danego
                  wydarzenia
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  przygotowanie i realizacja konferencji i szkoleń przy
                  akceptacji regulaminu danego wydarzenia
                </Text>
                <List classNames={{ root: styles.list }}>
                  <ListItem>
                    <Text classNames={{ root: styles.text }}>
                      Dane osobowe na tej stronie pobierane są tylko w
                      technicznie koniecznym zakresie. W żadnym wypadku pobrane
                      dane nie są sprzedawane ani przekazywane podmiotom trzecim
                      w innych celach niż opisane w niniejszym dokumencie.
                    </Text>
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </ListItem>
        </List>
        <Text classNames={{ root: styles.text }}>
          Możliwi odbiorcy danych osobowych Użytkowników:
        </Text>
        <List classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              pracownicy i współpracownicy Administratora,
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              podmioty uprawnione do ich otrzymania na mocy obowiązujących
              przepisów prawa,
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              firmy bądź osoby na podstawie odpowiednich umów tj. umowy
              powierzenia danych m.in. w celu ich archiwizacji, niszczenia,
              przechowywania, dostarczania, realizacji usług handlowych dla
              utrzymania relacji z Użytkownikami w imieniu Administratora lub
              partnerów handlowych Administratora.
            </Text>
          </ListItem>
        </List>
        <Text classNames={{ root: styles.text }}>
          Podmioty, którym powierzono przetwarzanie danych osobowych na mocy
          odrębnej umowy, zobowiązane są do przestrzegania zasad poufności i
          bezpieczeństwa danych osobowych, w szczególności nieudostępniania
          danych osobom nieuprawnionym, oraz do stosowania fizycznych i
          technicznych środków bezpieczeństwa, adekwatnych do sposobu
          przetwarzania tych danych. Administrator zapewnia Użytkownikowi na
          jego życzenie szczegółową informację o podmiocie, któremu powierzył
          przetwarzanie danych, zakresie powierzonych danych oraz terminie ich
          przekazania. Ponadto, w tym trybie Administrator zapewnia także dostęp
          do aktualnej i szczegółowej informacji o wykorzystanych lub
          udostępnianych przez Administratora środkach technicznych
          zapobiegających pozyskiwaniu i modyfikowaniu przez osoby
          nieuprawnione, danych osobowych przesyłanych przez Użytkownika drogą
          elektroniczną.
          <br /> <br />
          Pobieramy dane osobowe w ramach procesów zamówień, rejestracji dostępu
          do konta osobistego, abonamentu Newslettera bądź innego rodzaju
          informacji handlowej. Ponadto zapisujemy dalsze dane nieosobowe, aby
          nieustannie ulepszać naszą ofertę. W naszych plikach Server Log Files
          zapisujemy informacje, które Państwa przeglądarka z przyczyn
          technicznych automatycznie nam przekazuje. Są to następujące
          informacje:
        </Text>
        <List classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Typ/wersja przeglądarki
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Stosowany system operacyjny
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              URL (wcześniej odwiedzona strona)
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Nazwa hosta komputera (adres IP)
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Godzina zapytania serwera
            </Text>
          </ListItem>
        </List>
        <Text classNames={{ root: styles.text }}>
          Spersonalizowany zapis wyżej wskazanych danych nie następuje. Nie ma
          miejsca połączenie tych danych z innymi źródłami danych, w tym Państwa
          danymi osobowymi. Po odwiedzeniu naszej strony Państwa adres IP
          zostaje niezwłocznie wykasowany.
          <br /> <br />
          O ile na naszej stronie istnieje możliwość samodzielnego określenia
          zakresu podawanych danych osobowych, prosimy o sprawdzenie, które z
          nich chcecie nam Państwo ujawnić. Dane w polach oznaczonych jako pola
          obowiązkowe są dla nas niezbędne do przetworzenia danego zapytania
          albo realizacji Państwa zamówienia. Podanie pozostałych danych, w
          szczególności – przetwarzanych dla celów marketingowych towarów i
          usług oraz przekazywania informacji handlowych, jest dobrowolne i
          wykorzystywane do optymalizacji naszej oferty, w tym – serwisowej, i
          ewentualnie do celów statystycznych.
          <br /> <br />W ramach procesu zamówienia przeprowadzamy regularną
          ocenę jakości poprzez m.in. uwzględnienie danych osobowych przy
          zastosowaniu naukowo uznawanych procesów matematycznych.
          <br /> <br />
          Newsletter i inne informacje handlowe
          <br /> <br />
          Nasz Newsletter oraz innego rodzaju informację handlową otrzymają
          Państwo po wyrażeniu zgody na ich przysłanie na podany przez siebie
          adres e-mail. Przekazanie adresu e-mail oraz potwierdzenie wyrażenia
          zgody na otrzymywanie informacji handlowej przez kliknięcie w link,
          który otrzymają Państwo na podany przez siebie adres e-mail, oznacza
          wyrażenie zgody:
        </Text>
        <List classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              na przesyłanie informacji handlowej , w tym Newslettera;
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              na przetwarzanie danych osobowych w zakresie podanego adresu
              e-mail przez Prowend.com w celach związanych z wysyłką Newslettera
              i informacji handlowej.
            </Text>
          </ListItem>
        </List>
        <Text classNames={{ root: styles.text }}>
          Oczywiście w każdym czasie mają Państwo możliwość dostępu do treści
          swoich danych i ich poprawiania, a także rezygnacji z przechowywania
          Państwa adresu e-mail w celu wysyłki Newslettera i innego rodzaju
          informacji handlowej na pocztę e-mail, nie ponosząc przy tym żadnych
          dodatkowych kosztów. W celu rezygnacji z Newslettera i innego rodzaju
          informacji handlowej przesyłanej na podany adres e-mail prosimy o
          skorzystanie z odnośnika znajdującego się na końcu każdego
          Newslettera. Zarejestrowani użytkownicy mogą złożyć rezygnację z
          Newslettera i innego rodzaju informacji handlowej telefonicznie, lub
          mailowo a także poprzez formularz kontaktowy na stronie sklepu Swojska
          Piwniczka
          <br /> <br />
          Dzięki funkcjonalności naszego Newslettera możemy automatycznie
          śledzić, jakie zawartości naszego Newslettera są dla naszych klientów
          szczególnie interesujące. Wyniki pseudoanimowej analizy stosujemy
          wyłącznie do celów polepszenia oferty. Dokładne przyporządkowanie
          wyników do osoby nie ma miejsca. Mają Państwo prawo do wyrażenia
          sprzeciwu odnośnie do analizowania Państwa danych w celu polepszenia
          oferty, wysyłając krótką informację na adres mailowy naszego sklepu.
        </Text>
        <Title order={2} classNames={{ root: styles.title }}>
          Prawa Użytkowników
        </Title>
        <List type="ordered" classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Każdej osobie, której dane osobowe dotyczą, przysługuje prawo:
            </Text>
            <List type="ordered" classNames={{ root: styles.list }}>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  dostępu do danych,
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  sprostowania danych,
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  usunięcia danych,
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  ograniczenia przetwarzania danych,
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  prawo sprzeciwu wobec przetwarzania danych,
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  prawo wniesienia skargi do organu nadzorczego.
                </Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Odwołanie lub sprzeciw w zakresie przetwarzania danych osobowych
              następuje poprzez wysłanie wiadomości e-mail na adres:
              kontakt@klinikadilige.pl
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Po odwołaniu zgody lub wyrażeniu sprzeciwu, dane osobowe
              Użytkownika nie będą więcej używane do tych celów.
              Zmianę/uzupełnienie danych osobowych Użytkownik może przeprowadzić
              w drodze przesłania wniosku e-mail na adres:
              kontakt@klinikadilige.pl
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              W przypadku stwierdzenia nieprawidłowości w stosunku do
              przetwarzania danych przez Administratora Użytkownik ma prawo
              wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Kontakt z osobą nadzorującą przetwarzanie danych osobowych w
              organizacji Administratora jest możliwy drogą elektroniczną pod
              adresem e-mail:kontakt@klinikadilige.pl
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Kontakt z Administratorem i Inspektorem Danych Osobowych
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Użytkownik W każdej chwili ma możliwość bezpośredniego kontaktu z
              Administratorem poprzez przesłanie stosownej wiadomości pisemnie
              lub pocztą elektroniczną na adres Administratora wskazany na
              wstępie Polityki Prywatności.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Użytkownik w każdej chwili ma możliwość bezpośredniego kontaktu z
              Inspektorem Ochrony Danych poprzez przesłanie stosownej wiadomości
              pisemnie, adres korespondencyjny Klinika Dilige ul. Parkowa 5a
              Szczecin lub e-mail: kontakt@klinikadilige.pl
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Administrator przechowuje korespondencję z Użytkownikiem w celach
              statystycznych oraz jak najlepszej i najszybszej reakcji na
              pojawiające się zapytania, a także w zakresie rozstrzygnięć
              reklamacyjnych i podejmowanych na podstawie zgłoszeń ewentualnych
              decyzji o interwencjach administracyjnych we wskazanych danych.
              Adresy oraz dane w ten sposób gromadzone nie będą wykorzystywane
              do komunikacji z Użytkownikiem w celu innym niż realizacja
              zgłoszenia.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Gdy Użytkownik kontaktuje się w celu dokonania danych czynności,
              Administrator może ponownie zwrócić się do Użytkownika o
              przekazanie danych, w tym osobowych, np. w postaci imienia,
              nazwiska, adresu e-mail, etc., celem potwierdzenia tożsamości
              Użytkownika i umożliwienia zwrotnego kontaktu w danej sprawie.
              Powyższe dotyczy tych samych danych, w tym osobowych, które
              wcześniej zostały przekazane przez Użytkownika, i na których
              przetwarzanie Użytkownik wyraził zgodę. Podanie tych danych nie
              jest obowiązkowe, lecz może być niezbędne do dokonania czynności
              lub uzyskania informacji, które interesują Użytkownika.
            </Text>
          </ListItem>
        </List>
        <Title order={2} classNames={{ root: styles.title }}>
          Zabezpieczenia
        </Title>
        <Text classNames={{ root: styles.text }}>
          Nasze standardy techniczne
          <br /> <br />
          Transfer Państwa danych odbywa się z zastosowaniem bezpiecznego
          protokołu transmisji SSL (Secure Socket Layer) z zastosowaniem 256
          bitowego klucza. Ta technika oferuje najwyższe bezpieczeństwo i
          dlatego stosowana jest również przez, przykładowo, banki do ochrony
          danych bankowości internetowej. Przekaz zaszyfrowanych danych poznacie
          Państwo przez przedstawienie zaszyfrowanych kluczy ew. symboli kluczy
          w dolnym pasku stanu przeglądarki.
        </Text>
        <List type="ordered" classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Administrator stosuje odpowiednie środki techniczne i
              organizacyjne zapewniające bezpieczeństwo ochrony przetwarzanych
              Danych Osobowych odpowiednią do zagrożeń oraz kategorii danych
              objętych ochroną, a w szczególności zabezpiecza dane przed ich
              udostępnieniem osobom nieupoważnionym, zabraniem przez osobę
              nieuprawnioną, przetwarzaniem z naruszeniem obowiązujących
              przepisów oraz zmianą, utratą, uszkodzeniem lub zniszczeniem.
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Uwzględniając stan wiedzy technicznej, koszt wdrażania oraz
              charakter, zakres, kontekst i cele przetwarzania oraz ryzyko
              naruszenia praw lub wolności osób fizycznych o różnym
              prawdopodobieństwie wystąpienia i wadze zagrożenia, Administrator
              wdraża odpowiednie środki techniczne i organizacyjne, aby zapewnić
              stopień bezpieczeństwa odpowiadający temu ryzyku, w tym między
              innymi w stosownym przypadku:
            </Text>
            <List type="ordered" classNames={{ root: styles.list }}>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  szyfrowanie danych osobowych,
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  zdolność do ciągłego zapewnienia poufności, integralności,
                  dostępności i odporności systemów i usług przetwarzania,
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  zdolność do szybkiego przywrócenia dostępności danych
                  osobowych i dostępu do nich w razie
                </Text>
              </ListItem>
              <ListItem>
                <Text classNames={{ root: styles.text }}>
                  incydentu fizycznego lub technicznego, regularne testowanie,
                  mierzenie i ocenianie skuteczności środków technicznych i
                  organizacyjnych mających zapewnić bezpieczeństwo przetwarzania
                </Text>
              </ListItem>
            </List>
          </ListItem>
        </List>
        <Title order={2} classNames={{ root: styles.title }}>
          Polityka Cookies
        </Title>
        <Text classNames={{ root: styles.text }}>
          W Serwisie wykorzystywane są pliki typu Cookies. Pliki Cookies są
          plikami o charakterze tekstowym, przechowywanymi w urządzeniu końcowym
          Użytkownika i służą do korzystania ze stron Serwisu. Celem
          wykorzystywania plików Cookies przez Serwis jest:
        </Text>
        <List classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              przystosowanie zawartości strony do indywidualnych potrzeb i
              preferencji Użytkownika;
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              utrzymanie sesji zalogowanego Użytkownika tak, aby na
              poszczególnych podstronach Serwisu nie było konieczne ponowne
              logowanie się;
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              prezentowanie reklam dostosowanych do preferencji Użytkownika;
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              tworzenie analiz, raportów i statystyk dotyczących sposobów
              korzystania ze strony przez Użytkowników;
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              popularyzacja sklepu internetowego za pomocą serwisu
              społecznościowego Facebook.
            </Text>
          </ListItem>
        </List>
        <Text classNames={{ root: styles.text }}>
          Podczas odwiedzin Serwisu, system Serwisu wysyła do komputera
          Użytkownika co najmniej jeden plik Cookies w celu jednoznacznego
          zidentyfikowania przeglądarki. Informacje przesyłane przez
          przeglądarkę Użytkownika są automatycznie rejestrowane na Serwerze.
          Każdy Użytkownik ma możliwość zablokowania odbierania plików Cookies,
          dzięki czemu może pozostać anonimowy, jednakże wówczas Serwis nie
          będzie mógł zidentyfikować Użytkownika ani jego preferencji.
          Ograniczenie przesyłania plików Cookies może tym samym wpłynąć na
          niektóre funkcjonalności Serwisu. Aby zablokować możliwość dbierania
          plików Cookies lub otrzymywać informacje o ich każdorazowym
          umieszczeniu w urządzeniu końcowym Użytkownika, należy zmodyfikować
          odpowiednie ustawienia przeglądarki internetowej.
          <br /> <br />
          Pliki Cookies są dostępne dla Administratora. Pliki Cookies
          zamieszczane w urządzeniu końcowym mogą być wykorzystane również przez
          Google Inc z siedzibą w USA (dostawca usługi Google Analitics ) oraz
          Facebook Inc z siedzibą w USA.
          <br /> <br />
          Pliki Cookies zewnętrzne są wykorzystywane zgodnie z Politykami
          prywatności podmiotów, od których pochodzą.
          <br /> <br />
          Pliki Cookies i przechowywana w nich informacja lub uzyskiwanie do
          niej dostępu nie powoduje zmian konfiguracyjnych w urządzeniu i
          oprogramowaniu zainstalowanym w tym urządzeniu.
          <br /> <br />
          Jeżeli Użytkownik nie dokona zmiany ustawień domyślnych przeglądarki
          internetowej dotyczących plików Cookies, to zostaną one umieszczone w
          jego urządzeniu końcowym i będą wykorzystywane zgodnie z zasadami
          wskazanymi przez dostawcę przeglądarki internetowej. Tym samym pliki
          Cookies mogą być przechowywane w urządzeniu końcowym Użytkownika, a
          Administrator może uzyskiwać dostęp do informacji zawartych w tych
          plikach.
          <br /> <br />
          Informacje na temat zarządzania plikami Cookies w poszczególnych
          przeglądarkach można znaleźć na stronach dedykowanych poszczególnym
          przeglądarkom:
        </Text>
        <List classNames={{ root: styles.list }}>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Firefox: http://support.mozilla.org/pl/kb/ciasteczka
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Internet Explorer: http://support.microsoft.com/kb/196955/pl
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Chrome:
              http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Opera: http://help.opera.com/Linux/12.10/pl/cookies.html
            </Text>
          </ListItem>
          <ListItem>
            <Text classNames={{ root: styles.text }}>
              Safari:
              http://support.apple.com/kb/HT1677?viewlocale=pl_PL&locale=pl_PL
            </Text>
          </ListItem>
        </List>
        <Text classNames={{ root: styles.text }}>
          Postanowienia końcowe
          <br /> <br />
          Niniejsza Polityka Cookies może w przyszłości ulec zmianie poprzez
          opublikowanie nowej wersji na stronie klinikadilige.pl W takim
          przypadku otworzeniu strony www.klinikadilige.pl ponownie zostanie
          Państwu wyświetlona informacja o zasadach zamieszczania cookies za
          pośrednictwem strony.
        </Text>
        <Title order={2} classNames={{ root: styles.title }}>
          Zastosowanie Social Pluginów
        </Title>
        <Text classNames={{ root: styles.text }}>
          Tak zwane „Social Pluginy” to technologia umożliwiająca Państwu jako
          użytkownikowi ujawnianie pewnych zawartości o bezpośrednim połączeniu
          uczestników sieci społecznościowych. W naszym Sklepie oferujemy
          Państwu serwis Facebook Inc.(Fa. Facebook Inc., 1601 S. California
          Ave, Palo Alto, CA 94304, USA). „przycisk dzielenia się” na Facebooku
          i „przycisk Tweet” na Twitterze (Twitter, Inc., 795 Folsom St., Suite
          600, San Francisco, CA 94107). Oba Pluginy służą do przeniesienia
          przez kliknięcie przez użytkownika adresu IP ostatnio wyświetlanej na
          przeglądarce użytkownika strony (Facebook / Twitter) na rzecz
          oferenta. Ponadto przenoszone są również informacje o produkcie. Nie
          przenosimy danych osobowych, które podają Państwo na stronie
          www.klinikadilige.pl lub które zostały zapisane na Twitterze lub
          Facebooku.
        </Text>
        <Title order={2} classNames={{ root: styles.title }}>
          Uprawnienia, zmiany oraz usuwanie danych osobowych
        </Title>
        <Text classNames={{ root: styles.text }}>
          W każdej chwili możecie Państwo przeglądać, edytować lub usuwać własne
          dane w obszarze „Twoje Konto” podając adres e-mail i hasło. Jeżeli
          zapomnieliście hasła, prosimy o kontakt z serwisem: w zakładce „Twoje
          Konto” na stronie logowania znajduje się zwrot „Nie pamiętam hasła”.
          Zwrot ten przekierowuje Państwo do formularza, który należy wypełnić
          oraz wysłać po wpisaniu podanego przy rejestracji adresu e-mail. Wtedy
          na Państwa adres e-mail zostanie wysłane hasło zastępcze. Uwaga: Dla
          bezpieczeństwa nie należy podawać hasła osobom trzecim, należy zawsze
          wylogować się z konta osobistego po korzystaniu z witryny, a podczas
          procesu zamawiania należy korzystać z szyfrowania SSL, które zawsze
          oferujemy.
        </Text>
        <Title order={2} classNames={{ root: styles.title }}>
          Prawo do informacji i sprzeciwu
        </Title>
        <Text classNames={{ root: styles.text }}>
          Państwa zaufanie jest dla nas bardzo ważne. Z tego powodu w godzinach
          naszej pracy odpowiemy na każde pytanie w kwestii przetwarzania
          Państwa danych osobowych. Macie Państwo prawo do uzyskania informacji
          o danych zapisanych u nas, ich pochodzeniu oraz odbiorcach, a także o
          celu, zakresie i sposobach przetwarzania. Jeżeli chcecie Państwo
          uzyskać informacje odnośnie do przechowywanych u nas danych, prosimy o
          kontakt z naszym działem ochrony danych (e-mail:
          kontakt@klinikadilige.pl). Jesteśmy również zobowiązani do
          korygowania, zapisywania oraz usuwania danych na Państwa życzenie, o
          ile inne przepisy rangi ustawowej (np. ustawowy obowiązek
          przechowywania danych) nie stanowią inaczej.
          <br /> <br />
          Jeżeli macie Państwo jakiekolwiek pytania lub chcecie skorzystać z
          prawa sprzeciwu bądź zrezygnować z otrzymywania Newslettera wraz z
          innego rodzaju informacją handlową , prosimy o kontakt.
          <br /> <br />
          Sławomir Szczepański
          <br /> <br />
          e-mail: admin@klinikadilige.pl
          <br /> <br />
          Tel.:91 123 456
          <br /> <br />
          (z tel. stacjonarnych opłata jak za połączenie na tel. komórkowy, z
          tel. komórkowych wg taryfy danego operatora)
        </Text>
        <Title order={2} classNames={{ root: styles.title }}>
          Aktualizacja
        </Title>
        <Text classNames={{ root: styles.text }}>
          Zastrzegamy sobie prawo do aktualizacji lub modyfikacji niniejszych
          zasad dotyczących ochrony danych osobowych w dowolnym czasie i bez
          uprzedniego zawiadomienia poprzez umieszczenie zmienionej wersji na
          naszej witrynie internetowej www.klinikadilige.pl Nowe brzmienie zasad
          obowiązuje od momentu ich opublikowania na naszej witrynie
          internetowej.
          <br /> <br />
          Dane osobowe Użytkownika mogą być przetwarzane także w sposób
          zautomatyzowany, w tym również w formie profilowania. Konsekwencją
          profilowania będzie przypisanie danej osobie profilu dla potrzeb
          dokonywania analiz lub przewidywania preferencji Użytkownika, jego
          zachowań, postaw i dostosowywania informacji przekazywanych
          Użytkownikowi za pośrednictwem Serwisu.
        </Text>
      </Flex>
    </>
  );
};

export default PolitykaPrywatnosci;
