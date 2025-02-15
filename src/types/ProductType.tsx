import {ColorType} from './ColorType';
import {ReviewType} from './ReviewType';

export type ProductType = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  sizes: string[];
  size: string;
  colors: ColorType[];
  color: string;
  description: string;
  categories: string;
  is_bestseller: boolean;
  is_featured: boolean;
  is_out_of_stock: boolean;
  oldPrice?: number;
  quantity?: number;
  reviews: ReviewType[];
  types: string[];
  isNew: boolean;
  isTop: boolean;
  isFeatured: boolean;
  audience: string[];
  promotion: string;
  tags: string[];
  style: string;
  imageColor: string;
  ageGroup: string[];
  // playType: string;
  playTypes: string[];
};
