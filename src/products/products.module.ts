import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';
import ProductSchema from './schemas/product.schema';
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CategoriesService } from './services/categories/categories.service';
import { BrandsService } from './services/brands/brands.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSchema])],
  controllers: [BrandsController, CategoriesController, ProductsController],
  providers: [ProductsService, CategoriesService, BrandsService],
  exports: [ProductsService],
})
export class ProductsModule {}
