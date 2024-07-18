import Link from "next/link";

export default function Oferta() {
  return (
    <>
      <div>
        <h1>Psychiatra</h1>
        <div>
          <p>
            Nasze doświadczenie kliniczne pozwala nam zaproponować pomoc w
            następujących problemach:
          </p>
          <ul>
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
          </ul>
          <button>
            <Link
              href={{
                pathname: "/specjalisci",
                query: { spec: "Psychiatra" },
              }}
            >
              Search for Spec
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
