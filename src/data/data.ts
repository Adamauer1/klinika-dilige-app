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
  "Beata Trześniowska-Drukała",
  "Adam Jędrzejewski",
];

const personBasic: PersonBasic[] = [
  {
    name: "Jolanta Kucharska-Mazur",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.webp",
    link: "/specjalisci/1-jolanta-kucharska-mazur",
  },
  {
    name: "Klaudia Bakunowska",
    image: "/Zdjęcia dilige/dilige jpg/DSC09913.webp",
    link: "/specjalisci/2-klaudia-bakunowska",
  },
  {
    name: "Tomasz Grąźlewski",
    image: "/Zdjęcia dilige/dilige jpg/DSC09857.webp",
    link: "/specjalisci/3-tomasz-grazlewski",
  },
  {
    name: "Agata Handzlik",
    image: "/Zdjęcia dilige/dilige jpg/DSC09977.webp",
    link: "/specjalisci/4-agata-handzlik",
  },
  {
    name: "Agata Bąba-Kubiś",
    image: "/Zdjęcia dilige/dilige jpg/DSC09989.webp",
    link: "/specjalisci/5-agata-baba-kubis",
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
    link: "/specjalisci/14-daria-suchecka",
  },
  {
    name: "Beata Trześniowska-Drukała",
    image: "/Zdjęcia dilige/dilige jpg/deata-trzesniowska-drukala-image.jpg",
    link: "/specjalisci/15-beata-trzesniowska-drukala",
  },
  // {
  //   name: "Adam Jędrzejewski",
  //   image: "/Zdjęcia dilige/dilige jpg/deata-trzesniowska-drukala-image.jpg", //change
  //   link: "/specjalisci/16-adam-jedrzejewski",
  // },
];

const infoData: personPaper[] = [
  {
    id: 1,
    name: "Jolanta Kucharska-Mazur",
    specjalisci: ["psychiatra"],
    plec: "Kobieta",
    title: "Prof. dr hab. n. med. i n. zdr.",
    desc: `Prof. dr hab. n. med. i n. zdr. Jolanta Kucharska-Mazur, specjalista psychiatra, specjalista psychiatrii środowiskowej.\nKieruje Oddziałem Całodobowym CD Kliniki Psychatrii PUM. Od ponad 30 lat prowadzi zajęcia ze studentami Wydziału Lekarskiego oraz Wydziału Nauk o Zdrowiu PUM.\nObroniła pracę habilitacyjną pod tytułem:"Poszukiwanie nowych markerów pierwszego epizodu psychotycznego - ocena mobilizacji komórek macierzystych ze szpiku kostnego do krwi obwodowej oraz poziomu czynników osoczowych wpływających na ich przemieszczanie się", której efektem jest europejski patent na metodę wykrywania pierwszych epizodów psychotycznych. Autorka i współautorka 150 monografii i artykułów naukowych, publikowanych w czasopismach krajowych i zagranicznych, o łącznym IF 67,7.\nCzłonek Zarządu Oddziału Szczecińskiego Polskiego Towarzystwa Psychiatrycznego, członek Głównego Sądu Koleżeńskiego Polskiego Towarzystwa Psychiatrycznego, członek European Psychiatric Association i Członek założyciel Polskiego Towarzystwa Badań nad Uzależnieniami.\nMiłośniczka żeglarstwa, nurkowania, podróży i wędrówek górskich.`,
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.webp",
    link: `1-jolanta-kucharska-mazur`,
  },
  {
    id: 2,
    name: "Klaudia Bakunowska",
    specjalisci: ["psycholog", "psychoterapeuta"],
    plec: "Kobieta",
    title: "psychoterapeuta",
    desc: "Jestem psychologiem, psychoterapeutą w trakcie szkolenia certyfikowanego w nurcie poznawczo-behawioralnym.  Należę do Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej. W trakcie studiów  realizowałam specjalność z zakresu psychologii klinicznej.\nSwoje doświadczenie zawodowe zdobywałam podczas staży na Oddziale Ogólnopsychiatrycznym z Pododdziałem Zaburzeń Afektywnych, Oddziale Dziennym Leczenia Nerwic SPS ZOZ Zdroje oraz podczas wolontariatów w formie wsparcia psychologicznego dla osób zmagających się z chorobami przewlekłymi oraz ich bliskimi.\nNa codzień pracuje w Klinice Psychiatrii USK1 PUM w Szczecinie oraz w gabinecie prywatnym. Swoją pracę poddaje regularnej  superwizji. Systematycznie poszerzam swoją wiedzę i umiejętności biorąc udział w szkoleniach i warsztatach.\nW pracy terapeutycznej korzystam z technik poznawczo-behawioralnych, które poszerzam o elementy terapii akceptacji i zaangażowania (ACT) oraz terapii schematów, w zależności od indywidualnych potrzeb pacjenta.\nCzas wolny poświęcam aktywności fizycznej, szczególnie treningom siłowym, jodze i tańcu. Interesują mnie alternatywne metody parzenia kawy oraz smakowanie jej w gronie najbliższych.",
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
    specjalisci: [
      "psychoterapia uzależnień",
      "terapeuta środowiskowy",
      "psychoterapeuta uzależnień",
    ],
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
    desc: "Jest absolwentką psychologii na Uniwersytecie im. A. Mickiewicza w Poznaniu. Od czasu ukończenia studiów wyższych podnosi swoje kwalifikacje zawodowe dbając o poszerzanie zakresu posiadanej wiedzy specjalistycznej zarówno w aspekcie teoretycznym, jak i praktycznym. Regularnie uczestniczy w szkoleniach i konferencjach o tematyce psychologicznej.\nW obszarze zainteresowań zawodowych znajdują się:\n- psychologia kliniczna człowieka dorosłego\n- psychoterapia\n- neuropsychologia\n- psychologia rozwojowa\n- psychologia sportu\n- seksuologia\nPosiada kwalifikacje oraz doświadczenie w pracy diagnostycznej i terapeutycznej zarówno z dziećmi, jak i osobami dorosłymi.\nInteresuje  się również sportem, a szczególnie judo. Wielokrotna medalistka Mistrzostw Polski i instruktorka w tej dyscyplinie sportowej. Wie, co oznacza trening sportowy i jakim psychologicznym wymaganiom musi sprostać zawodnik, by osiągnąć zamierzony cel.\nW pracy z klientem ważne jest dla niej przestrzeganie zasad etycznych zebranych w Kodeksie Etycznym Psychologa, w tym pełna dyskrecja na każdym etapie współpracy.\nWykształcenie i certyfikaty\nmagister psychologii Uniwersytet im. A. Mickiewicza w Poznaniu\npraktyk dialogu motywacyjnego\nukończone szkolenie specjalizacyjne z zakresu psychologii klinicznej oraz podstaw terapii systemowej indywidualnej i rodzin.\nukończone studia podyplomowe w zakresie pomocy psychologicznej w dziedzinie seksuologii oraz terapii pedagogicznej nadające kwalifikacje pedagoga-terapeuty.\nUkończone szkolenia z zakresu:\n- interpretacji zachowania i podejmowania interwencji w oparciu o koncepcję E.H. Eriksona;\n- poznawczo-behawioralnej terapii par i małżeństw;\n- diagnozy i podstaw terapii zaburzeń psychicznych dzieci i młodzieży;\n- psychoonkologii.\nUkończone kursy w zakresie diagnozy psychologicznej:\n- MMPI-2 w diagnozie psychologicznej;\n- Test Apercepcji Tematycznej w diagnozie klinicznej i seksuologicznej;\n- Psychorysunek w diagnozie klinicznej i seksuologicznej;\n- Kurs nadający uprawnienia diagnostyczne Skalą Inteligencji Stanford - Binet 5.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09924.webp",
    link: "9-mirosława-pankiewicz",
  },
  {
    id: 10,
    name: "Artur Reginia",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    title: "Dr n.med.",
    desc: "Dr n. med. Artur Reginia, specjalista psychiatra, asystent w Katedrze i Klinice Psychiatrii PUM w Szczecinie.\nZ psychiatrią związany od czasów studiów na Wydziale Lekarskim Pomorskiego Uniwersytetu Medycznego w Szczecinie. Doświadczenie zawodowe zdobywał początkowo w całodobowym oddziale psychiatrycznym, następnie w lecznictwie ambulatoryjnym i środowiskowym oraz jako konsultant psychiatryczny w oddziałach somatycznych USK 1 w Szczecinie. Zaangażowany w pracę naukową i dydaktyczną w Katedrze i Klinice Psychiatrii PUM, autor licznych publikacji naukowych. W 2017 r. obronił pracę doktorską zatytułowaną: Ocena mobilizacji komórek macierzystych do krwi obwodowej u pacjentów z chorobą afektywną dwubiegunową w okresie wyrównanego nastroju, nieleczonych solami litu.\nW czasie wolnym uwielbia podróże, jazdę na rowerze, pływanie. Miłośnik kotów, od kilku lat pasjonat języka francuskiego, biegle włada także językiem angielskim i niemieckim.",
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
    title: "Psycholog",
    desc: "Psycholog, specjalista psychoterapii uzależnień, nauczyciel akademicki.\nPrzez wiele lat zawodowo związana była ze Stowarzyszeniem MONAR – Ośrodkiem Leczenia, Terapii i Rehabilitacji Uzależnień (w tym pełniąc funkcję dyrektora), a także współpracując ze szczecińskimi świetlicami środowiskowymi oraz pełniąc funkcję psychologa szkolnego.\nZdobywała doświadczenie w Mazowieckim Centrum Neuropsychiatrii, SPZOZ Nowy Dworek, Klinice Psychiatrii SPSK1 PUM, na oddziałach Psychiatrii Dziecięcej i Młodzieżowej oraz Terapii Uzależnienia od Alkoholu w Centrum SPZOZ „Zdroje”, a także w Samodzielnym Publicznym Wojewódzkim Szpitalu Zespolonym w Szczecinie.\nPosiada doświadczenie w pracy diagnostycznej i terapeutycznej z dziećmi, młodzieżą i osobami dorosłymi.\nProwadzi zajęcia profilaktyczne i psychoedukacyjne dla młodzieży i dorosłych. Prelegentka na konferencjach naukowych o tematyce psychologicznej. Autorka i współautorka artykułów naukowych, publikowanych w czasopismach krajowych i zagranicznych.\nAktualizuje wiedzę regularnie szkoląc się i poddając swoją pracę superwizji. Jej zainteresowania naukowe oscylują wokół problematyki uzależnień od substancji psychoaktywnych, uzależnień behawioralnych, neuropsychologii, psychopatologii i obszarów pokrewnych.\nCzłonkini Polskiego Towarzystwa Psychiatrycznego, Polskiego Towarzystwa Psychologicznego i Ogólnopolskiego Związku Zawodowego Psychologów.",
    image: "/Zdjęcia dilige/dilige jpg/DSC09908.webp",
    link: "14-daria-suchecka",
  },
  {
    id: 15,
    name: "Beata Trześniowska-Drukała",
    specjalisci: ["psychiatra"],
    plec: "Kobieta",
    title: "Dr n. med.",
    desc: "Dr n. med. Beata Trześniowska-Drukała, od 2014r. lekarz specjalista w dziedzinie psychiatrii. W 2015r. uzyskała tytuł doktora nauk medycznych.\nAbsolwentka studiów podyplomowych w zakresie pedagogiki, ukończyła kurs terapii systemowej (podstawowy i dla zaawansowanych) w Wielkopolskim Towarzystwie Terapii Systemowej w Poznaniu. Posiada również certyfikat terapeuty środowiskowego.\nDoświadczenie zawodowe zdobyła pracując w oddziale całodobowym i Zespole Lecznictwa Środowiskowego Kliniki Psychiatrii Pomorskiego Uniwersytetu Medycznego w Szczecinie. Przez kilka lat kierowała Oddziałem Dziennym tejże Kliniki. Prowadziła zajęcia dydaktyczne dla studentów Wydziału Lekarskiego oraz Wydziału Nauk o Zdrowiu PUM. Autorka i współautorka artykułów naukowych, publikowanych w czasopismach krajowych i zagranicznych.\nOd wielu lat prowadzi praktykę prywatną. Pracuje także jako Lekarz Orzecznik w Powiatowym i Wojewódzkim Zespole ds. Orzekania o Niepełnosprawności w Szczecinie oraz jako Lekarz Orzecznik ZUS.\nStale dokształca się biorąc udział w licznych konferencjach, kursach i szkoleniach, aby móc leczyć zgodnie z najnowszą wiedzą medyczną. W opiece nad pacjentami ważne jest dla niej podejście holistyczne do człowieka i jego rodziny oraz przestrzeganie zasad etyki zawodu lekarza.\nPosiada bogate doświadczenie życiowe i zawodowe. Prywatnie matka dwóch synów, mężatka, uwielbia zwierzęta.",
    image: "/Zdjęcia dilige/dilige jpg/deata-trzesniowska-drukala-image.jpg",
    link: "15-beata-trzesniowska-drukala",
  },
  {
    id: 16,
    name: "Adam Jędrzejewski",
    specjalisci: ["psycholog", "psychoterapeuta"],
    plec: "Mężczyzna",
    title: "psychoterapeuta",
    desc: "Jestem absolwentem psychologii na Uniwersytecie Szczecińskim. Zawodowo związany z Kliniką Psychiatrii USK1 PUM w Szczecinie, gdzie w ramach swojej pracy udzielam pomocy psychologicznej pacjentom grupy rehabilitacyjnej na Oddziale Dziennym. Równolegle jestem zatrudniony w Zakładzie Psychologii Zdrowia Katedry Psychiatrii PUM gdzie zajmuje stanowisko asystenta, pełniąc obowiązki naukowe i dydaktyczne.\nObecnie jestem w trakcie szkolenia na psychoterapeutę w nurcie poznawczo-behawioralnym, które realizuję w ramach Szkoły Psychoterapii Poznawczo-Behawioralnej Uniwersytetu SWPS. Jestem też członkiem Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej.\nSpecjalizuję się w leczeniu zaburzeń lękowych i depresyjnych. W swojej pracy silnie opieram się na zrozumieniu perspektywy klienta i dostrzeganiu jego podmiotowości.  Jednocześnie bardzo ważne jest dla mnie bazowanie na zasadach EBM i Kodeksie Etycznym Psychologa oraz Kodeksie Etycznym Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej.",
    image: "/Zdjęcia dilige/jpg przestrzenie/DSC000061.jpg", //change
    link: "16-adam-jedrzejewski",
  },
];

export { names, infoData, personBasic };
