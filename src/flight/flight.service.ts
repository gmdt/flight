import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Flight, FlightDocument } from './schemas/flight.schema';
import { FlightCreateDto } from './dto/flight-create.dto';
import { FlightUpdateDto } from './dto/flight-update.dto';
import { FilterDTO } from './dto/filter.dto';
import { SynthesisCriteria } from '../interface/synthesis-criteria.model';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(Flight.name)
    private readonly flightModel: Model<FlightDocument>,
  ) {}
  async findAll(): Promise<Flight[]> {
    return this.flightModel.find().exec();
  }

  async search(query: FilterDTO): Promise<Flight[]> {
    return this.flightModel.find(query).exec();
  }
  async searchSynthesisCompanies(query: SynthesisCriteria): Promise<any> {
    let queryMatch = { departureDate: {} };
    const { departureDateMax, departureDateMin } = query;
    if (departureDateMax && !departureDateMin) {
      queryMatch = {
        departureDate: {
          $lte: new Date(departureDateMax),
        },
      };
    }
    if (departureDateMin && !departureDateMax) {
      queryMatch = {
        departureDate: {
          $lte: new Date(departureDateMin),
        },
      };
    }
    if (departureDateMax && departureDateMin) {
      queryMatch = {
        departureDate: {
          $gte: new Date(departureDateMin),
          $lte: new Date(departureDateMax),
        },
      };
    }
    const flightsByCriteria = await this.flightModel.find(queryMatch).exec();

    const companies = flightsByCriteria.reduce((acc: any, cur: any) => {
      acc[cur.companyName] = acc[cur.companyName]
        ? acc[cur.companyName] + 1
        : 1;
      return acc;
    }, {});

    return Object.keys(companies).map((key) => ({
      companyName: key,
      nbFlights: companies[key],
    }));
  }

  async findOne(idFlight: number): Promise<Flight> {
    return this.flightModel.findOne({ idFlight }).exec();
  }

  async create(flight: FlightCreateDto): Promise<Flight> {
    const idFlight = await this.getLastId();
    return new this.flightModel({ ...flight, idFlight }).save();
  }

  async update(idFlight: number, flight: FlightUpdateDto): Promise<Flight> {
    return this.flightModel.findOneAndUpdate({ idFlight }, flight).exec();
  }

  async delete(idFlight: number): Promise<Flight> {
    return this.flightModel.findOneAndDelete({ idFlight }).exec();
  }
  private async getLastId(): Promise<number> {
    const flights = (await this.findAll()) || [];
    const obj: Flight = flights.length
      ? flights.reduce(function (max, obj) {
          return obj.idFlight > max.idFlight ? obj : max;
        })
      : undefined;
    return obj ? ++obj.idFlight : 0;
  }
}
