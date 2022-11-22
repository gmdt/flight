import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightCreateDto } from './dto/flight-create.dto';
import { FlightUpdateDto } from './dto/flight-update.dto';
import { FilterDTO } from './dto/filter.dto';
import { SynthesisCriteria } from '../interface/synthesis-criteria.model';

@Controller('flights')
export class FlightController {
  constructor(private readonly service: FlightService) {}

  @Get()
  async index() {
    return this.service.findAll();
  }

  @Post('search')
  async searchFlight(@Body() query: FilterDTO) {
    return this.service.search(query);
  }

  @Post('synthesisCompanyFlights')
  async synthesisCompanyFlights(@Body() query: SynthesisCriteria) {
    return this.service.searchSynthesisCompanies(query);
  }
  @Post('numberFlights')
  async getFlightsNumberByCriteria(@Body() query: SynthesisCriteria) {
    return this.service
      .searchSynthesisCompanies(query)
      .then((data) => data.length);
  }

  @Get(':flightId')
  async find(@Param('flightId') flightId: number) {
    return this.service.findOne(flightId);
  }

  @Post()
  async create(@Body() flight: FlightCreateDto) {
    return this.service.create(flight);
  }

  @Put(':flightId')
  async update(
    @Param('flightId') flightId: number,
    @Body() flight: FlightUpdateDto,
  ) {
    return this.service.update(flightId, flight);
  }

  @Delete(':flightId')
  async delete(@Param('flightId') flightId: number) {
    return this.service.delete(flightId);
  }
}
