import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from './../../entities/users.entity';
import { Order } from './../../entities/orders.entity';
import { CreateUserDto, UpdateUserDto } from '../../dtos/users.dto';

import { ProductsService } from './../../../products/services/products/products.service';

@Injectable()
export class UsersService {
  constructor(private productsService: ProductsService) {}

  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@gmail.com',
      rol: 'admin',
      password: '12345aA!',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  getOrderByUser(id: number): Order {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return {
      date: new Date(),
      user: user,
      products: this.productsService.findAll(),
    };
  }

  create(payload: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }

    this.users.splice(index, 1);
    return true;
  }
}
