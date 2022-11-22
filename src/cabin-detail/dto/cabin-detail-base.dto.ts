import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CabinDetailBaseDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  companyId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bagage: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cabinClass: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cancellation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  fare: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  rebooking: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  refund: string;
}
