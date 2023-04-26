import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from './../../entities/customers.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dtos/customers.dto';

@Injectable()
export class CustormersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Customer 1',
      email: 'customer1@gmail.com',
      telefono: '666666666',
      customerPoints: 100,
      rol: 'admin',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);

    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...customer,
      ...payload,
    };
    return this.customers[index];
  }

  delete(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    this.customers.splice(index, 1);
    return true;
  }
}
