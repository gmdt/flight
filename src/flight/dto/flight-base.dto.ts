import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class FlightBaseDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  idFlight: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  aircraftType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  arrivalLocation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  arrivalTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  backDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  backTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  connectionDuration: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  departureDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  departureLocation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  departureTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  flightDuration: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  flightType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  travelType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  companyId: string;
}
