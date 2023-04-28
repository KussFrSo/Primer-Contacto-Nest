import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './../../entities/products.entity';
import ProductSchema from '../../schemas/product.schema';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductSchema)
    private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepo.find();
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    const newProduct = this.productRepo.create(payload); //Esto genera la instancia
    return this.productRepo.save(newProduct); //Esto lo guarda en la BBDD
  }

  async update(id: number, payload: UpdateProductDto) {
    const product = await this.productRepo.findOneBy({ id });

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.productRepo.merge(product, payload);
    return this.productRepo.save(product);
  }

  delete(id: number) {
    return this.productRepo.delete(id);
  }
}
