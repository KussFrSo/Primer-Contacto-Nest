/* Forma de hacerlo sin tipado*/
// import { ConfigService } from '@nestjs/config';
// constructor(
//   private configService: ConfigService
// ) {}
// const DB_NAME = this.configService.get('SQL_DB_NAME');

import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    console.log(process.env.NODE_ENV);

    const DB_NAME = this.configService.mariadb.name;
    return `WELCOME TO MARIADB DATABASE ${DB_NAME}`;
  }
}
