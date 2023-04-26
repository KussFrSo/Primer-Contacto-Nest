import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ParseIntPipe } from '../../../common/parse-int/parse-int.pipe';
import { CustormersService } from './../../services/custormers/custormers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dtos/customers.dto';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private custormersService: CustormersService) {}

  @Get()
  @ApiOperation({ summary: 'Get a list of customers' })
  getCategories() {
    return this.custormersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific customer' })
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.custormersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a customer' })
  create(@Body() payload: CreateCustomerDto) {
    return this.custormersService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a customer' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.custormersService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a customer' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.custormersService.delete(id);
  }
}
