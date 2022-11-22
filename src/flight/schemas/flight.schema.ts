import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FlightType } from '../../enums/flight-type';
import { TravelType } from '../../enums/travel-type';

export type FlightDocument = Flight & Document;

@Schema()
export class Flight {
  @Prop({ required: true })
  idFlight: number;
  @Prop({ required: true })
  companyName: string;
  @Prop({ required: true })
  flightType: FlightType;
  @Prop({ required: true })
  travelType: TravelType;
  @Prop({ required: true })
  departureDate: Date;
  @Prop({ required: true })
  departureTime: Date;
  @Prop({ required: true })
  arrivalDate: Date;
  @Prop({ required: true })
  arrivalTime: Date;
  @Prop({ required: true })
  backDate: Date;
  @Prop({ required: true })
  backTime: Date;
  @Prop({ required: true })
  flightDuration: Date;
  @Prop({ required: true })
  connectionDuration: Date;
  @Prop({ required: true })
  departureLocation: string;
  @Prop({ required: true })
  arrivalLocation: string;
  @Prop({ required: true })
  aircraftType: string;
  @Prop({ required: true })
  cabinDetails: string; //id of CabinDetails
  @Prop({ required: true })
  comforts: string; //id of Comforts
  @Prop({ required: true })
  inFlightInfos: string; //id of InflightInfo
}

export const FlightSchema = SchemaFactory.createForClass(Flight);
