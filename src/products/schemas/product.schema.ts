import { EntitySchema, EntitySchemaColumnOptions } from 'typeorm';
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

    createAt: {
      type: Date,
      createDate: true,
    } as EntitySchemaColumnOptions,

    updateAt: {
      type: Date,
      updateDate: true,
    } as EntitySchemaColumnOptions,
  },
});

export default ProductSchema;
