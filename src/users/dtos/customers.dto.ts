import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsEmail,
  IsMobilePhone,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'Name',
    example: 'Marc',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email',
    example: 'mmm@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Telephone',
    example: '666666666',
  })
  @IsMobilePhone('es-ES')
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({
    description: 'CustomerPoints',
    example: '1000',
  })
  @IsNumber()
  @IsNotEmpty()
  customerPoints: number;

  @ApiProperty({
    description: 'Role',
    example: 'client',
  })
  @IsString()
  @IsNotEmpty()
  rol: 'admin' | 'client' | 'user';
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
