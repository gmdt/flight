import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FilterDTO } from '../../flight/dto/filter.dto';

export type BookmarkDocument = Bookmark & Document;

@Schema()
export class Bookmark {
  @Prop({ required: true })
  idBookmark: number;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  addingDate: Date;
  @Prop({ required: true })
  nbFlights: number;
  @Prop({ required: false })
  flightCriteria: FilterDTO;
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
