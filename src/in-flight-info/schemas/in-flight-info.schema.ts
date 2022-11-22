import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FilterDTO } from '../../flight/dto/filter.dto';

export type InFlightInfoDocument = InFlightInfo & Document;

@Schema()
export class InFlightInfo {
  @Prop({ required: true })
  idInFlightInfo: number;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  addingDate: Date;
  @Prop({ required: true })
  nbFlights: number;
  @Prop({ required: false })
  flightCriteria: FilterDTO;
}

export const InFlightInfoSchema = SchemaFactory.createForClass(InFlightInfo);
