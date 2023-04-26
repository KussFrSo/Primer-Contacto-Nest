import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsEmail,
  IsMobilePhone,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsMobilePhone('es-ES')
  @IsNotEmpty()
  telefono: string;

  @IsNumber()
  @IsNotEmpty()
  customerPoints: number;

  @IsString()
  @IsNotEmpty()
  rol: 'admin' | 'client' | 'user';
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
