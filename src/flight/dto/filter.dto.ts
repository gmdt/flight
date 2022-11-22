import { ApiProperty } from '@nestjs/swagger';
import { CompanyName } from '../../enums/company-name';
import { FlightType } from '../../enums/flight-type';
import { TravelType } from '../../enums/travel-type';

export class FilterDTO {
  @ApiProperty()
  idFlight?: number;
  @ApiProperty()
  companyName?: CompanyName;
  @ApiProperty()
  flightType?: FlightType;
  @ApiProperty()
  travelType?: TravelType;
  @ApiProperty()
  departureLocation?: string;
  @ApiProperty()
  arrivalLocation?: string;
  @ApiProperty()
  departureDateMin?: Date;
  @ApiProperty()
  arrivalDateMin?: Date;
  @ApiProperty()
  backDateMin?: Date;
  @ApiProperty()
  departureTimeMin?: Date;
  @ApiProperty()
  arrivalTimeMin?: Date;
  @ApiProperty()
  backTimeMin?: Date;
  @ApiProperty()
  flightDurationMin?: Date;
  @ApiProperty()
  connectionDurationMin?: Date;
  @ApiProperty()
  departureDateMax?: Date;
  @ApiProperty()
  arrivalDateMax?: Date;
  @ApiProperty()
  backDateMax?: Date;
  @ApiProperty()
  departureTimeMax?: Date;
  @ApiProperty()
  arrivalTimeMax?: Date;
  @ApiProperty()
  backTimeMax?: Date;
  @ApiProperty()
  flightDurationMax?: Date;
  @ApiProperty()
  connectionDurationMax?: Date;
  @ApiProperty()
  aircraftType?: string;
  @ApiProperty()
  fareMin?: number;
  @ApiProperty()
  fareMax?: number;
}
