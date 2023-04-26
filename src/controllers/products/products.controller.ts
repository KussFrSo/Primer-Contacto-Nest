// Codigo Sucio a proposito, los comentarias estan dejados como comentarios para un futuro //
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  //Query,
  //Res,
  //ParseIntPipe,
} from '@nestjs/common';
//import { Response } from 'express';

import { ProductsService } from './../../services/products/products.service';
import { ParseIntPipe } from './../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // @Get('products')
  // getProducts(@Query() params: any) {
  // const { limit, offset } = params;
  // }

  @Get()
  getProducts() {
    // @Query('brand') brand: string, // @Query('offset', ParseIntPipe) offset = 0, // @Query('limit', ParseIntPipe) limit = 100,
    return this.productsService.findAll();
  }

  //    Formato Express en Nest
  //   @Get(':id')
  //   @HttpCode(HttpStatus.ACCEPTED)
  //   getProduct(@Param('id') id: string) {
  //     response.status(200).send({
  //       message: `product ${id}`,
  //     });
  //   }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
