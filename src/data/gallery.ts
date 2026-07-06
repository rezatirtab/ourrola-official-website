export type GalleryItem = {
  id: string;
  image: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
  // Tailwind object-position class, used to control which part of the photo
  // stays in focus when cropped by object-cover. Default: object-center.
  position?: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    image: "/images/gallery/ourrola-049.jpg",
    alt: "OURROLA lifestyle",
    span: "tall",
  },
  {
    id: "g2",
    image: "/images/gallery/foto-kotak1.jpg",
    alt: "OURROLA product",
    span: "normal",
  },
  {
    id: "g3",
    image: "/images/gallery/foto-horizontal.jpg",
    alt: "OURROLA packaging",
    span: "wide",
    position: "object-[center_67%]", 
  },
  {
    id: "g4",
    image: "/images/gallery/foto-kotak2.jpg",
    alt: "OURROLA product",
    span: "normal",
  },
  {
    id: "g5",
    image: "/images/gallery/ourrola-328.jpg",
    alt: "OURROLA lifestyle",
    span: "normal",
  },
  {
    id: "g6",
    image: "/images/gallery/foto-vertical.jpg",
    alt: "OURROLA editorial",
    span: "tall",
  },
  {
    id: "g7",
    image: "/images/gallery/ourrola-387.jpg",
    alt: "OURROLA lifestyle",
    span: "normal",
    position: "object-top", // keeps both faces & hands more visible
  },
];