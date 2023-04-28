import { EntitySchema } from 'typeorm';
import { Product } from '../entities/products.entity';

const ProductSchema = new EntitySchema<Product>({
  name: 'Product',
  tableName: 'Product',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },

    name: {
      type: String,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
    },

    stock: {
      type: Number,
    },

    image: {
      type: String,
    },
  },
});

export default ProductSchema;
