export interface IProduct {
  id: number;
  title: string;
  price: string;
  info: string;
  description: string;
  img: string;
}

export type CreateProductType = Omit<IProduct, 'id'>;

export type UpdateProductType = Omit<IProduct, 'id'>;
