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
import { CustormersService } from './../../services/custormers/custormers.service';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from './../../dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private custormersService: CustormersService) {}

  @Get()
  getCategories() {
    return this.custormersService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.custormersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.custormersService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.custormersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.custormersService.delete(id);
  }
}
