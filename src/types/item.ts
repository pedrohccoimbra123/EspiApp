// types/item.ts
export interface Item {
  id: string;
  title: string;
  description: string;
  image: string | number;
  imageText?: string;
}