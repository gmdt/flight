import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CompanyBaseDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  companyId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  comforts: string;
}
