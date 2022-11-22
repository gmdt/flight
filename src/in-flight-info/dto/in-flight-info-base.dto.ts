import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class InFlightInfoBaseDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  companyId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  title: string;
}
