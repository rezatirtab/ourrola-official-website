export type Product = {
  id: string;
  name: string;
  shade: string;
  price: number;
  description: string;
  ingredients: string;
  image: string;
  shadeImage: string;
  swatchImage: string;
  bestSeller?: boolean;
};