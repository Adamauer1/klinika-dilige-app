import Link from "next/link";

export default function Psychoseksuologia() {
  return (
    <>
      <div>
        <h1>Psychoseksuolog</h1>
        <h3>Poradnictwo i terapia psychoseksuologiczna</h3>
        <p>
          Seksualność to nierozerwalne połączenie ciała i umysłu. Terapia
          psychoseksuologiczna polega na zastosowaniu psychologicznych metod
          diagnozy i leczenia zaburzeń i problemów seksualnych, w oparciu o
          najnowsze standardy postępowania. Zwykle jest prowadzona po
          wykluczeniu biologicznego podłoża trudności seksualnych lub stanowi
          wartościowe uzupełnienie leczenia prowadzonego przez lekarza. Dotyczy
          pokonywania takich trudności jak:
        </p>
        <ul>
          <li>
            emocjonalne, poznawcze i społeczne podłoże dysfunkcji seksualnych -
            pożądania, uzyskiwania podniecenia i prawidłowej reakcji narządów
            płciowych, orgazmu,
          </li>
          <li>brak zadowolenia ze swojego życia seksualnego</li>
          <li>problemy w związkach (hetero i homoseksualnych)</li>
          <li>
            brak pełnej akceptacji swojej tożsamości seksualnej i płciowej (np.
            terapia afirmatywna i działania rozwojowe dla osób LGBT)
          </li>
          <li>zaburzenia preferencji seksualnych</li>
          <li>inne, specyficzne problemy natury seksualnej</li>
        </ul>
        <button>
          <Link
            href={{
              pathname: "/specjalisci",
              query: { spec: "Psychoseksuolog" },
            }}
          >
            Search for Spec
          </Link>
        </button>
      </div>
    </>
  );
}
