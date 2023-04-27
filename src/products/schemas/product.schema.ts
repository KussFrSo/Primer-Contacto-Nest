import { EntitySchema } from 'typeorm';

const ProductSchema = new EntitySchema({
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
