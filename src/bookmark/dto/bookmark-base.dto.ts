import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { FilterDTO } from '../../flight/dto/filter.dto';

export class BookmarkBaseDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  idBookmark: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  addingDate: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  nbFlights: number;
  @ApiProperty()
  @IsOptional()
  flightCriteria: FilterDTO;
}
