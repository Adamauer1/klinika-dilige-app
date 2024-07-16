interface personPaper {
  id: number;
  name: string;
  specjalisci: string[];
  plec: string;
  image: string;
  link: string;
}

const names: string[] = [
  "Klaudia Bakunowska",
  "Tomasz Grąźlewski",
  "Agata Handzlik",
  "Agata Bąba Kubiś",
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

const infoData: personPaper[] = [
  {
    id: 1,
    name: "Klaudia Bakunowska",
    specjalisci: ["Psycholog", "Psychoterapeuta"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09913.jpg",
    link: "1-klaudia-bakunowska",
  },
  {
    id: 2,
    name: "Tomasz Grąźlewski",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    image: "/Zdjęcia dilige/dilige jpg/DSC09857.jpg",
    link: "2-tomasz-grazlewski",
  },
  {
    id: 3,
    name: "Agata Handzlik",
    specjalisci: [
      "specjalista terapii uzależnień",
      "pedagog",
      "socjoterapeuta",
    ],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09977.jpg",
    link: "3-agata-handzlik",
  },
  {
    id: 4,
    name: "Agata Bąba Kubiś",
    specjalisci: ["psychiatra"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09989.jpg",
    link: "4-agata-baba-kubis",
  },
  {
    id: 5,
    name: "Jolanta Kucharska-Mazur",
    specjalisci: ["psychiatra"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09948.jpg",
    link: `5-jolanta-kucharska-mazur`,
  },
  {
    id: 6,
    name: "Jacek Kurpisz",
    specjalisci: ["psycholog", "psychoseksuolog"],
    plec: "Mężczyzna",
    image: "/Zdjęcia dilige/dilige jpg/DSC09953.jpg",
    link: "6-jacek-kurpisz",
  },
  {
    id: 7,
    name: "Alicja Kusztykiewicz",
    specjalisci: ["psychoterapia uzależnień", "terapeuta środowiskowy"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09810.jpg",
    link: "7-alicja-kusztykiewicz",
  },
  {
    id: 8,
    name: "Aleksandra Mazur",
    specjalisci: [],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09847.jpg",
    link: "8-aleksandra-mazur",
  },
  {
    id: 9,
    name: "Mirosława Pankiewicz",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09924.jpg",
    link: "9-mirosława-pankiewicz",
  },
  {
    id: 10,
    name: "Artur Reginia",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    image: "/Zdjęcia dilige/dilige jpg/DSC09741.jpg",
    link: "10-artur-reginia",
  },
  {
    id: 11,
    name: "Krzysztof Rudkowski",
    specjalisci: ["psychiatra"],
    plec: "Mężczyzna",
    image: "/Zdjęcia dilige/dilige jpg/DSC00027.jpg",
    link: "11-krzysztof-rudkowski",
  },
  {
    id: 12,
    name: "Ewelina Skierczyńska",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09726.jpg",
    link: "12-ewelina-skierczynska",
  },
  {
    id: 13,
    name: "Agnieszka Słuczanowska",
    specjalisci: ["pedagog specjalny", "neuroterapeuta", "psychoterapeuta"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09784.jpg",
    link: "13-agnieszka-sluczanowska",
  },
  {
    id: 14,
    name: "Daria Suchecka",
    specjalisci: ["psycholog"],
    plec: "Kobieta",
    image: "/Zdjęcia dilige/dilige jpg/DSC09908.jpg",
    link: "14-daria-suchecka",
  },
];

export { names, infoData };
