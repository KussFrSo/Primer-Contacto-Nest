import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ description: 'Name', example: 'Nike' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description',
    example: 'Existing since 1900',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
