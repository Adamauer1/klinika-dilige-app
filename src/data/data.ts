interface personPaper {
  id: number;
  name: string;
  specjalisci: string[];
  plec: string;
  title: string;
  desc: string;
  image: string;
  link: string;
}

interface PersonBasic {
  name: string;
  image: string;
  link: string;
}

const names: string[] = [
  "Klaudia Bakunowska",
  "Tomasz Grąźlewski",
  "Agata Handzlik",
  "Agata Bąba-Kubiś",
  "Jolanta Kucharska-Mazur",
  "Jacek Kurpisz",
  "Alicja Kusztykiewicz",
  "Aleksandra Mazur",
  "Mirosława Pankiewicz",
  "Artur Reginia",
  "Krzysztof Rudkowski",
  "Ewelina Skierczyńska",
  "Agnieszka Słuczanowska",
  "Daria Suchecka",
];

const personBasic: PersonBasic[] = [
  {
    name: "Jolanta Kucharska-Mazur",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.webp",
    link: "/specjalisci/5-jolanta-kucharska-mazur",
  },
  {
    name: "Klaudia Bakunowska",
    image: "/Zdjęcia dilige/dilige jpg/DSC09913.webp",
    link: "/specjalisci/1-klaudia-bakunowska",
  },
  {
    name: "Tomasz Grąźlewski",
    image: "/Zdjęcia dilige/dilige jpg/DSC09857.webp",
    link: "/specjalisci/2-tomasz-grazlewski",
  },
  {
    name: "Agata Handzlik",
    image: "/Zdjęcia dilige/dilige jpg/DSC09977.webp",
    link: "/specjalisci/3-agata-handzlik",
  },
  {
    name: "Agata Bąba-Kubiś",
    image: "/Zdjęcia dilige/dilige jpg/DSC09989.webp",
    link: "/specjalisci/4-agata-baba-kubis",
  },
  {
    name: "Jacek Kurpisz",
    image: "/Zdjęcia dilige/dilige jpg/DSC09953.webp",
    link: "/specjalisci/6-jacek-kurpisz",
  },
  {
    name: "Alicja Kusztykiewicz",
    image: "/Zdjęcia dilige/dilige jpg/DSC09810.webp",
    link: "/specjalisci/7-alicja-kusztykiewicz",
  },
  {
    name: "Aleksandra Mazur",
    image: "/Zdjęcia dilige/dilige jpg/DSC09847.webp",
    link: "/specjalisci/8-aleksandra-mazur",
  },
  {
    name: "Mirosława Pankiewicz",
    image: "/Zdjęcia dilige/dilige jpg/DSC09924.webp",
    link: "/specjalisci/9-mirosława-pankiewicz",
  },
  {
    name: "Artur Reginia",
    image: "/Zdjęcia dilige/dilige jpg/DSC09741.webp",
    link: "/specjalisci/10-artur-reginia",
  },
  {
    name: "Krzysztof Rudkowski",
    image: "/Zdjęcia dilige/dilige jpg/DSC00027.webp",
    link: "/specjalisci/11-krzysztof-rudkowski",
  },
  {
    name: "Ewelina Skierczyńska",
    image: "/Zdjęcia dilige/dilige jpg/DSC09726.webp",
    link: "/specjalisci/12-ewelina-skierczynska",
  },
  {
    name: "Agnieszka Słuczanowska",
    image: "/Zdjęcia dilige/dilige jpg/DSC09784.webp",
    link: "/specjalisci/13-agnieszka-sluczanowska",
  },
  {
    name: "Daria Suchecka",
    image: "/Zdjęcia dilige/dilige jpg/DSC09908.webp",
    link: "14-daria-suchecka",
  },
];

const infoData: personPaper[] = [
  {
    id: 1,
    name: "Jolanta Kucharska-Mazur",
    specjalisci: ["psychiatra"],
    plec: "Kobieta",
    title: "Prof. dr hab. n. med. i n. zdr.",
    desc: `Prof. dr hab. n. med. i n. zdr. Jolanta Kucharska-Mazur, specjalista psychiatra, specjalista psychiatrii środowiskowej.\nKieruje Oddziałem Całodobowym CD Kliniki Psychatrii PUM. Od ponad 20 lat prowadzi zajęcia ze studentami Wydziału Lekarskiego oraz Wydziału Nauk o Zdrowiu PUM.\nObroniła pracę habilitacyjną pod tytułem:"Poszukiwanie nowych markerów pierwszego epizodu psychotycznego - ocena mobilizacji komórek macierzystych ze szpiku kostnego do krwi obwodowej oraz poziomu czynników osoczowych wpływających na ich przemieszczanie się", której efektem jest europejski patent na metodę wykrywania pierwszych epizodów psychotycznych. Autorka i współautorka 130 monografii i artykułów naukowych, publikowanych w czasopismach krajowych i zagranicznych, o łącznym IF 67,7.\nCzłonek Zarządu Oddziału Szczecińskiego Polskiego Towarzystwa Psychiatrycznego, członek Głównego Sądu Koleżeńskiego Polskiego Towarzystwa Psychiatrycznego, członek European Psychiatric Association i Członek założyciel Polskiego Towarzystwa Badań nad Uzależnieniami.\nMiłośniczka żeglarstwa, nurkowania, podróży i wędrówek górskich.`,
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.webp",
    link: `1-jolanta-kucharska-mazur`,
  },
  {
    id: 2,
    name: "Klaudia Bakunowska",
    specjalisci: ["Psycholog", "Psychoterapeuta"],
    plec: "Kobieta",
    title: "",
    desc: "",
    image: "/Zdjęcia dilige/dilige jpg/DSC09913.webp",
    link: "2-klaudia-bakunowska",
  },
  {
    id: 3,
    name: "Tomasz Grąźlewski",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    title: "lekarz",
    desc: `Lekarz, specjalista psychiatra, pracujący na co dzień w Klinice Psychiatrii SPSK1 PUM w Szczecinie.\nWykładowca akademicki prowadzący zajęcia ze studentami Wydziału Lekarskiego oraz   Wydziału Nauk Zdrowiu. Absolwent studiów podyplomowych z zakresu podstaw psychoterapii oraz szczegółowych zagadnień psychoterapii na Uniwersytecie Jagiellońskim. Regularnie uczestniczy w szkoleniach i konferencjach związanych z tematyką psychiatryczną. Członek Polskiego Towarzystwa Psychiatrycznego.`,
    image: "/Zdjęcia dilige/dilige jpg/DSC09857.webp",
    link: "3-tomasz-grazlewski",
  },
  {
    id: 4,
    name: "Agata Handzlik",
    specjalisci: [
      "specjalista terapii uzależnień",
      "pedagog",
      "socjoterapeuta",
    ],
    plec: "Kobieta",
    title: "mgr",
    desc: "Ukończyła studia z zakresu pedagogiki opiekuńczej z resocjalizacją oraz pedagogiki ogólnej. Kwalifikacje terapeutyczne zdobyła w  Studium Terapii Uzależnień oraz Studium Uzależnień rekomendowanym przez Krajowe Biuro ds. Narkomanii.\nOd  wielu lat związana z Poradnią Leczenia Uzależnienia od Alkoholu i Współuzależnienia w Szczecinie. Zajmuje się terapią osób uzależnionych od alkoholu i narkotyków. Prowadzi terapię grupową i  indywidualną, pracuje także z osobami z zaburzeniami adaptacyjnymi.\nJako pedagog i socjoterapeuta od lat pracuje z dziećmi i młodzieżą z rodzin dysfunkcyjnych. Ukończyła Krakowskie Centrum Psychodynamiczne na kierunku Socjoterapii i Treningu Interpersonalnego oraz szkolenie Podstaw Psychoterapii Psychodynamicznej. Prowadzi Specjalistyczno - Opiekuńczą Placówkę Wsparcia Dziennego dla dzieci i młodzieży.\nCzas wolny spędza w gronie najbliższych w górach. Lubi muzykę orientalną.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09977.webp",
    link: "4-agata-handzlik",
  },
  {
    id: 5,
    name: "Agata Bąba-Kubiś",
    specjalisci: ["psychiatra"],
    plec: "Kobieta",
    title: "lekarz specjalista",
    desc: "Lekarz specjalista psychiatrii, na co dzień pracuje w Klinice Psychiatrii SPSK1 PUM w Szczecinie.\nSwoje doświadczenie zdobywała pracując w Oddziale Całodobowym, Dziennym oraz w Poradni Zdrowia Psychicznego.\nOd 2018 roku posiada uprawnienia I stopnia psychoterapeuty behawioralno- poznawczego (obecnie w trakcie uzyskiwania certyfikatu II stopnia na studiach podyplomowych SWPS w Poznaniu).\nW latach 2014 -2019 pracowała jako wykładowca akademicki Wydziału Nauk o Zdrowiu w zakresie psychiatrii, jest również współautorem oraz autorem artykułów w czasopismach naukowych. Przygotowuje rozprawę doktorską na temat wpływu leków przeciwpsychotycznych na mikrobiotę jelitową.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09989.webp",
    link: "5-agata-baba-kubis",
  },
  {
    id: 6,
    name: "Jacek Kurpisz",
    specjalisci: ["psycholog", "psychoseksuolog"],
    plec: "Mężczyzna",
    title: "dr n. zdr.",
    desc: "Psycholog, nauczyciel akademicki i badacz seksualności. Zajmuje się poradnictwem psychologicznym, psychoseksuologicznym, terapią oraz edukacją w zakresie zdrowia psychicznego i seksualnego, psychologią kliniczną oraz psychoterapią w nurcie systemowym.\nJest autorem kilkunastu publikacji na temat psychologicznych aspektów ludzkiej seksualności.\nUkończył Podyplomowe Studium Pomocy Psychologicznej w Dziedzinie Seksuologii (UAM, Poznań) oraz obronił pracę doktorską na temat seksualnego funkcjonowania mężczyzn (PUM, Szczecin).\nRegularnie uczestniczy w warsztatach i konferencjach dotyczących zdrowia seksualnego.\nJest członkiem Polskiego Towarzystwa Seksuologicznego, Polskiego Towarzystwa Psychiatrycznego oraz Stowarzyszenia Lambda Szczecin.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09953.webp",
    link: "6-jacek-kurpisz",
  },
  {
    id: 7,
    name: "Alicja Kusztykiewicz",
    specjalisci: ["psychoterapia uzależnień", "terapeuta środowiskowy"],
    plec: "Kobieta",
    title: "psychoterapeuta",
    desc: "Specjalista psychoterapii uzależnień i terapeuta środowiskowy.\nUkończyła studia z zakresu diagnozy i terapii pedagogicznej, pedagogiki opiekuńczo-wychowawczej oraz Szkołę Psychoterapii Uzależnień.\nZajmuje się terapią osób uzależnionych od alkoholu i narkotyków oraz terapią uzależnień behawioralnych (w tym: uzależnienia od hazardu, uzależnienia od internetu, uzależnienia od telefonu i gier komputerowych, uzależnienia od seksu, uzależnienia od pracy, uzależnienia od jedzenia, uzależnienia od zakupów), jak również pracą z osobami współuzależnionymi, syndromem DDA i DDD.\nSystematycznie pogłębia wiedzę o technikach terapii poznawczo-behawioralnej, będącej podstawą psychoterapii uzależnień oraz pracuje w duchu dialogu motywującego.\nPracuje w Stowarzyszeniu MONAR - Ośrodku Leczenia, Terapii i Rehabilitacji.\nW ramach rozwoju zawodowego uczestniczy w superwizji i szkoleniach podnoszących walifikacje zawodowe. Jest członkiem Polskiego Towarzystwa Psychiatrycznego, Sekcji Psychiatrii Środowiskowej i Rehabilitacji, Polskiego Towarzystwa Psychologicznego i Stowarzyszenia Terapeutów Uzależnień.\nPrywatnie miłośniczka wędrówek górskich, jazdy na rolkach oraz zumby.  Wolny czas poświęca aktywnościom fizycznym oraz spędza czas z rodziną i przyjaciółmi.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09810.webp",
    link: "7-alicja-kusztykiewicz",
  },
  {
    id: 8,
    name: "Aleksandra Mazur",
    specjalisci: [],
    plec: "Kobieta",
    title: "",
    desc: "",
    image: "/Zdjęcia dilige/dilige jpg/DSC09847.webp",
    link: "8-aleksandra-mazur",
  },
  {
    id: 9,
    name: "Mirosława Pankiewicz",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    title: "Psycholog",
    desc: "*** Look at og",
    image: "/Zdjęcia dilige/dilige jpg/DSC09924.webp",
    link: "9-mirosława-pankiewicz",
  },
  {
    id: 10,
    name: "Artur Reginia",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    title: "Dr n.med.",
    desc: "Dr n. med. Artur Reginia, specjalista psychiatra, asystent w Katedrze i Klinice Psychiatrii PUM w Szczecinie, koordynator Oddziału Dziennego, konsultant psychiatryczny oddziałów somatycznych SPSK nr 1 w Szczecinie.\nZ psychiatrią związany od czasów studiów na Wydziale Lekarskim Pomorskiego Uniwersytetu Medycznego w Szczecinie. Doświadczenie zawodowe zdobywał początkowo w całodobowym oddziale psychiatrycznym, następnie w lecznictwie ambulatoryjnym i środowiskowym. Zaangażowany w pracę naukową i dydaktyczną w Katedrze i Klinice Psychiatrii PUM, autor licznych publikacji naukowych. W 2017 r. obronił pracę doktorską zatytułowaną: Ocena mobilizacji komórek macierzystych do krwi obwodowej u pacjentów z chorobą afektywną dwubiegunową w okresie wyrównanego nastroju, nieleczonych solami litu.\nW czasie wolnym uwielbia podróże, jazdę na rowerze, pływanie. Miłośnik kotów, od kilku lat pasjonat języka francuskiego, biegle włada także językiem angielskim i niemieckim.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09741.webp",
    link: "10-artur-reginia",
  },
  {
    id: 11,
    name: "Krzysztof Rudkowski",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    title: "lek. med.",
    desc: "Lekarz, specjalista psychiatra, zastępca koordynatora Oddziału Dziennego Kliniki Psychiatrii PUM w Szczecinie, konsultant psychiatryczny oddziałów somatycznych SPSK nr 1 w Szczecinie.\nDoświadczenie zdobywał w oddziałach całodobowych oraz w poradni zdrowia psychicznego Kliniki Psychiatrii PUM. Wykładowca akademicki, prowadzi zajęcia ze studentami Wydziału Lekarskiego oraz Wydziału Nauk o Zdrowiu. Autor oraz współautor licznych publikacji naukowych. Członek Polskiego Towarzystwa Psychiatrycznego. Przygotowuje rozprawę doktorską szukając nowych markerów schizofrenii. Biegle włada językiem angielskim. W pracy z pacjentem preferuje całościowe podejście do leczenia, które opiera się interwencjach psychologicznych,  psychoterapii i indywidualnie dobranej farmakoterapii.\nW wolnym czasie miłośnik kotów, tańca i podróży.",
    image: "/Zdjęcia dilige/dilige jpg/DSC00027.webp",
    link: "11-krzysztof-rudkowski",
  },
  {
    id: 12,
    name: "Ewelina Skierczyńska",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    title: "mgr",
    desc: "Jestem absolwentką psychologii i filozofii Uniwersytetu Szczecińskiego. Ukończyłam 4-letnie podyplomowe szkolenie przygotowujące do prowadzenia psychoterapii w nurcie poznawczobehawioralnym oraz szkolenie z terapii schematu. Posiadam certyfikat psychoterapeuty poznawczobehawioralnego (nr 1376).\nDoświadczenie zawodowe zdobyłam podczas stażu na Oddziale Całodobowym Kliniki Psychiatrii PUM w Szczecinie oraz dzięki kilkuletniej pracy w Poradni Zdrowia Psychicznego MSWiA, Zespole Leczenia Środowiskowego oraz Poradni Psychiatrycznej Kliniki Psychiatrii Pomorskiego Uniwersytetu Medycznego w Szczecinie.Pracuję pod stałą superwizją prowadzoną w nurcie poznawczo-behawioralnym i terapii schematu.\nJestem członkinią Polskiego Towarzystwa Terapii Poznawczo-Behawioralnej.\nProwadzę psychoterapię indywidualną dla osób dorosłych, które doświadczają w swoim życiu trudności adaptacyjnych, obniżonego nastroju, poczucia braku satysfakcji i szczęścia, problemów w zakresie tworzenia zdrowych relacji, mających poczucie, że w ich życiu powtarzają się negatywne scenariusze dotyczące rozmaitych sytuacji i związków z innymi ludźmi.\nPracuję także z osobami, które doświadczają depresji, lęku, bezsenności, PTSD, choroby afektywnej dwubiegunowej i zaburzeń odżywiania.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09726.webp",
    link: "12-ewelina-skierczynska",
  },
  {
    id: 13,
    name: "Agnieszka Słuczanowska",
    specjalisci: ["pedagog specjalny", "neuroterapeuta", "psychoterapeuta"],
    plec: "Kobieta",
    title: "psychoterapeuta",
    desc: "Agnieszka Słuczanowska- pedagog specjalny, neuroterapeuta, psychoterapeuta.\nAbsolwentka Uniwersytetu Szczecińskiego na kierunku Pedagogika Rewalidacyjna, Uniwersytetu Jagiellońskiego na kierunku Podstawy oddziaływań terapeutycznych w wieku rozwojowym, oraz 4-letniego kursu psychoterapii organizowanego przy Katedrze Psychoterapii Collegium Medicum Uniwersytetu Jagiellońskiego akredytowanego przez Polskie Towarzystwo Psychiatryczne.\nUkończyła studia podyplomowe o kierunku „Edukacja i terapia osób ze spektrum autyzmu”\nSpecjalista z zakresu teorii i praktyki neuroterapii EEGBiofeedback.\nPedagog i psychoterapeuta pracujący z dziećmi i osobami dorosłymi, zajmuje się  leczeniem zaburzeń nerwicowych, zaburzeń nastroju, zaburzeń odżywiania, wielopłaszczyznowym  wspomaganiem rozwoju dzieci, terapią par i rodzin.\nDoświadczenie oraz wiedzę pogłębia regularnie uczestnicząc w szkoleniach, oraz poddając procesy terapeutyczne regularnej superwizji.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09784.webp",
    link: "13-agnieszka-sluczanowska",
  },
  {
    id: 14,
    name: "Daria Suchecka",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    title: "",
    desc: "",
    image: "/Zdjęcia dilige/dilige jpg/DSC09908.webp",
    link: "14-daria-suchecka",
  },
];

export { names, infoData, personBasic };
