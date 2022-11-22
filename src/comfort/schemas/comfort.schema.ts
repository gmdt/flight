import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ComfortDocument = Comfort & Document;

@Schema()
export class Comfort {
  @Prop({ required: true })
  companyId: number;
  @Prop({ required: true })
  comforts: string;
}

export const ComfortSchema = SchemaFactory.createForClass(Comfort);
