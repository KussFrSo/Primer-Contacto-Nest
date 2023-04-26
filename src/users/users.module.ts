import { Module } from '@nestjs/common';

import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { UsersService } from './services/users/users.service';
import { CustormersService } from './services/custormers/custormers.service';
import { ProductsModule } from './../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [UsersController, CustomersController],
  providers: [UsersService, CustormersService],
})
export class UsersModule {}
