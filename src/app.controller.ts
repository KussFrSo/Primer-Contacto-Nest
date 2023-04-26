import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {
      message: 'Hola Mundo',
    };
  }

  @Get('nuevo')
  newEndpoint() {
    return {
      message: 'Yo soy nuevo',
    };
  }

  @Get('/ruta/')
  hello() {
    return {
      message: 'Con /sas/',
    };
  }
}
