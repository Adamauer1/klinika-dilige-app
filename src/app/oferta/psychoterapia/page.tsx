import Link from "next/link";

export default function Psychoterapia() {
  return (
    <>
      <div>
        <h1>Psychoterapeuta</h1>
        <ol>
          <li>
            <h2>Psychoterapia systemowa</h2>
          </li>
          <p>
            Psychoterapia systemowa opiera się ma założeniu, że człowiek i
            otaczająca go rzeczywistość stanowią zbiór dynamicznie połączonych
            ze sobą elementów, które nieustannie na siebie wpływają według
            określonych zasad. Jak każda szkoła psychoterapii, dąży do pomocy
            klientowi w uzyskaniu pożądanej przez siebie zmiany w zachowaniu i
            odczuwaniu. W wykorzystywanych metodach skupia się głównie na
            wykorzystaniu potencjału człowieka, na wzorcach jego komunikowania
            się z innymi oraz na wykorzystaniu jego mocnych stron w radzeniu
            sobie z problemami. Jest wykorzystywana w pracy indywidualnej,
            grupowej, terapii par i rodzin.
          </p>
          <li>
            <h2>Psychoterapia psychodynamiczna</h2>
          </li>
          <p>
            Psychoterapia psychodynamiczna oparta jest na psychoanalizie Z.
            Freuda. Jest tzw. terapią wglądową, gdyż jej istotą jest
            wprowadzanie do świadomości treści tkwiących w sferze podświadomej.
            Ponieważ przyczyn problemów upatruje się w nieprawidłowym rozwoju
            osobowości, w dzieciństwie, sporo czasu poświęca się zwykle relacjom
            z rodzicami i innymi osobami znaczącymi. Praca koncentruje się na
            uświadomieniu sobie przez pacjenta jego wewnętrznych konfliktów
            emocjonalnych, daje możliwość uświadomienia wypartych przeżyć oraz
            pragnień wyrażanych poprzez objawy. Osiągnięcie wglądu daje
            możliwość zrozumienia, zaakceptowania dotychczasowych doświadczeń
            oraz wprowadzenia prozdrowotnych zmian w stylu funkcjonowania, co
            skutkuje poprawą samopoczucia. Psychoterapia ma na celu korygowanie
            zaburzonego przeżywania i zachowania, postaw, sposobów reagowania
            oraz usunięcie objawów i ich przyczyn. Narzędziem leczniczym są
            bodźce, których źródłem jest psychoterapeuta. Psychoterapia dąży
            także do rozwoju poczucia sprawstwa, tożsamości, poczucia własnej
            wartości, umiejętności radzenia sobie z emocjami, zdolności do
            miłości, pracy i zabawy oraz poczucia ogólnego dobrostanu.
          </p>
          <p>
            Psychoterapia psychodynamiczna opiera się o relację, której istotą
            jest więź pomiędzy terapeutą a pacjentem i dialog terapeutyczny.
            Pacjent jest zachęcany do swobodnego dzielenia się swoimi myślami,
            wspomnieniami, uczuciami, fantazjami i skojarzeniami.
            Psychoterapeuta podczas sesji zachowuje powściągliwość, w atmosferze
            poczucia bezpieczeństwa swoimi krótkimi wypowiedziami próbuje
            sprowokować u pacjenta wgląd (zrozumienie siebie, poszerzenie
            „dostępu” do siebie). Relację terapeutyczną kształtują wzajemne
            reakcje pacjenta i terapeuty na swoje zachowania. Umożliwia to
            pacjentowi przepracowanie wzorców budowania relacji oraz
            przeprowadzenie zmian w przeżywaniu. Niekiedy proces terapeutyczny
            zostaje zakłócony poprzez pojawienie się zjawiska przeniesienia,
            czyli wprowadzenia w relacje osoby z życia pacjenta i jej realnego
            wpływu na aktualne emocje i reakcje. Celem jest uświadomienie
            pacjentowi występującego zjawiska, które powoduje zniekształcenia w
            odbiorze rzeczywistości.
          </p>
          <p>
            Sesje terapeutyczne odbywają się raz w tygodniu, w stałym terminie
            oraz miejscu. Czas trwania procesu terapeutycznego jest
            zindywidualizowany, może trwać od kilku miesięcy do kilku lat.
            Ważnym elementem terapii jest motywacja pacjenta do zmiany.
          </p>
          <li>
            <h2>Psychoterapia behawioralno-poznawcza (CBT)</h2>
          </li>
          <p>
            CBT jest zalecana jako metoda psychoterapii skutecznie wspierająca
            leczenie zaburzeń psychicznych. Stosuje się ją także w sytuacjach
            kryzysowych, pomaga uporać się z trudnymi emocjami i niekorzystnymi
            schematami zachowań. Jest metodą ustrukturyzowaną, krótkoterminową,
            zmierzającą do realizacji ustalonych celów, poprzez zmianę schematów
            myślenia i działania.
          </p>
          <li>
            <h2>Terapia par</h2>
          </li>
          <p>
            Jest skierowana do par i małżeństw, które znalazły się w sytuacji
            kryzysu i aktualnie samodzielnie nie są w stanie go przezwyciężyć.
            Polega na zastosowaniu metod psychologicznych i
            psychoterapeutycznych, dostosowanych do pracy z obojgiem partnerów.
            Terapia przebiega głównie w postaci szczerej, obiektywnej i
            nieoceniającej rozmowy z terapeutą lub zespołem terapeutycznym.
            Pozwala na wzajemne zrozumienie partnerów w aktualnej, często
            skomplikowanej sytuacji oraz na znalezienie akceptowanych przez
            obojga rozwiązań. Często jest uzupełniana poradnictwem lub
            psychoterapią indywidualną każdego z partnerów, co zwiększa jej
            skuteczność.
          </p>
        </ol>
        <button>
          <Link
            href={{
              pathname: "/specjalisci",
              query: { spec: "Psychoterapeuta" },
            }}
          >
            Search for Spec
          </Link>
        </button>
      </div>
    </>
  );
}
