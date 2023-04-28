class BaseModel {
  createAt?: Date;
  updateAt?: Date;
}

export class Product extends BaseModel {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}
