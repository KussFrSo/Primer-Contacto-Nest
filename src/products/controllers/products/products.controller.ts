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
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ParseIntPipe } from '../../../common/parse-int/parse-int.pipe';
import { ProductsService } from './../../services/products/products.service';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // @Get('products')
  // getProducts(@Query() params: any) {
  // const { limit, offset } = params;
  // }

  @Get()
  @ApiOperation({ summary: 'Get a list of products' })
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
  @ApiOperation({ summary: 'Get a specific product' })
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
