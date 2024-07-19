import Link from "next/link";

export default function TerapiaUzaleznien() {
  return (
    <>
      <div>
        <h1>Terapeuta uzależnień</h1>
        <h2>Terapia uzależnień</h2>
        <ul>
          <li>
            sesje indywidualne dla osób uzależnionych od alkoholu, narkotyków,
            dopalaczy
          </li>
          <li>
            sesje indywidualne dla osób z tzw. uzależnieniami behawioralnymi
            (uzależnienie od Internetu, gier, mediów społecznościowych,
            komputera, uzależnienie od telefonu, smartfona, uzależnienie od
            hazardu (patologiczny hazard), uzależnienie od seksu, pracoholizm,
            zakupoholizm, uzależnienie od opalania się i inne)
          </li>
          <li>sesje indywidualne dla osób współuzależnionych</li>
          <li>sesje indywidualne dla osób z uzależnieniem mieszanym</li>
          <li>sesje indywidualne dla osób z podwójną diagnozą</li>
          <li>praca terapeutyczna na etapie podstawowym i pogłębionym</li>
        </ul>
        <Link
          href={{
            pathname: "/specjalisci",
            query: { spec: "Terapeuta Uzależnień" },
          }}
        >
          Search for Spec
        </Link>
      </div>
    </>
  );
}
