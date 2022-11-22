import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class ComfortBaseDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  companyId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  comforts: string;
}
