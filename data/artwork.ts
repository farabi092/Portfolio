export type Artwork = {
  src: string;
  alt: string;
  width: number;
  height: number;
  featured: boolean;
};

export const artworks: Artwork[] = [
  // ----- Featured on the homepage -----
  {
    src: "/art/Kakashi.jpg",
    alt: "Illustration of Kakashi from Naruto, a close-up of his face with the red Sharingan eye",
    width: 1500,
    height: 2000,
    featured: true,
  },
  {
    src: "/art/Koifish_in_pond.jpg",
    alt: "Digital painting of three koi fish swimming in a dark blue pond among green lily pads",
    width: 2000,
    height: 2500,
    featured: true,
  },
  {
    src: "/art/Howl.jpg",
    alt: "Illustration of Howl from Howl's Moving Castle holding Calcifer, against a speckled pastel background",
    width: 2000,
    height: 2500,
    featured: true,
  },
  {
    src: "/art/noface.jpg",
    alt: "Illustration of No-Face from Spirited Away sitting beside Yubaba",
    width: 2000,
    height: 1500,
    featured: true,
  },

  // ----- Gallery page only -----
  {
    src: "/art/astronauts.jpg",
    alt: "Illustration of two green turtles in space helmets floating among stars",
    width: 2000,
    height: 2000,
    featured: false,
  },
  {
    src: "/art/kenma.jpg",
    alt: "Portrait illustration of Kenma from Haikyu!! in profile, in a red and white jersey",
    width: 750,
    height: 750,
    featured: false,
  },
  {
    src: "/art/Koifish_in_pond.jpg",
    alt: "Digital painting of three koi fish swimming in a dark blue pond among green lily pads",
    width: 2000,
    height: 2500,
    featured: false,
  },

  {
    src: "/art/whispering_woman.jpg",
    alt: "Black and white horror-style illustration of a girl with a pale woman whispering behind her",
    width: 1200,
    height: 1200,
    featured: false,
  },
  {
    src: "/art/Howl.jpg",
    alt: "Illustration of Howl from Howl's Moving Castle holding Calcifer, against a speckled pastel background",
    width: 2000,
    height: 2500,
    featured: false,
  },

  {
    src: "/art/Thegreatwave.jpg",
    alt: "Digital painting inspired by The Great Wave off Kanagawa, with boats and Mount Fuji",
    width: 2000,
    height: 1500,
    featured: false,
  },
  {
    src: "/art/noface.jpg",
    alt: "Illustration of No-Face from Spirited Away sitting beside Yubaba",
    width: 2000,
    height: 1500,
    featured: false,
  },
  {
    src: "/art/winter.jpg",
    alt: "Illustration of a person in a green beanie and red scarf against an orange background with white stars",
    width: 800,
    height: 700,
    featured: false,
  },
  {
    src: "/art/Kakashi.jpg",
    alt: "Illustration of Kakashi from Naruto, a close-up of his face with the red Sharingan eye",
    width: 1500,
    height: 2000,
    featured: false,
  },

];

export const featuredArtworks = artworks.filter((a) => a.featured);
export const galleryArtworks = artworks.filter((a) => !a.featured);
