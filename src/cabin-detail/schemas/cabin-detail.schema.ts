import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CabinDetailDocument = CabinDetail & Document;

@Schema()
export class CabinDetail {
  @Prop({ required: true })
  companyId: string;
  @Prop({ required: true })
  bagage: string;
  @Prop({ required: true })
  cabinClass: string;
  @Prop({ required: true })
  cancellation: string;
  @Prop({ required: true })
  fare: string;
  @Prop({ required: true })
  rebooking: string;
  @Prop({ required: true })
  refund: string;
}

export const CabinDetailSchema = SchemaFactory.createForClass(CabinDetail);
