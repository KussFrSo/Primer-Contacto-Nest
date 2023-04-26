import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ParseIntPipe } from '../../../common/parse-int/parse-int.pipe';
import { BrandsService } from './../../services/brands/brands.service';
import { CreateBrandDto, UpdateBrandDto } from './../../dtos/brands.dtos';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getCategories() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.delete(id);
  }
}
