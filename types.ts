export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}
export interface Store {
  id: string;
  name: string;
  country: string;
  city: string;
  address: string;
  currency: string;
  code: string;
  symbol: string;
}

export interface User {
  id: string;
  clerkId: string;
  firstName: string;
  lastName?: string;
  emailAddress: string;
  phoneNumber: string;
  country?: string;
  city?: string;
  address?: string;
  currency?: string;
  code?: string;
  symbol?: string;
  pin?: string;
  balance: 0;
  storage: StoreItem[]
  createdAt: Date;
  updatedAt: Date;
}

export interface StoreItem {
  id: string;
  weight: number;
  item: StoreProduct;
  forSale: boolean;
  parameters: Parameter[];
}

export interface Parameter {
id: string
name: string
}
export interface StoreProduct {
  id: string;
  store: Store;
  price: number;
  product: Product;
}

export interface Product {
  id: string;
  category: Category;
  storeProduct: StoreProduct[];
  name: string;
  isFeatured: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
