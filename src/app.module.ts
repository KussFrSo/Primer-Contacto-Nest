import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

import { environments } from './environments';
import config from './config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || 'env/.env.dev',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        SQL_DB_HOST: Joi.string().required(),
        SQL_DB_PORT: Joi.number().required(),
        SQL_DB_USERNAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { username, host, name, password, port } = configService.mariadb;
        return {
          type: 'mariadb',
          host,
          port,
          username: username,
          password,
          database: name,
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
    ProductsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
