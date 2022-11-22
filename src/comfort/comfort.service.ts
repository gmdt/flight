import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comfort, ComfortDocument } from './schemas/comfort.schema';
import { ComfortCreateDto } from './dto/comfort-create.dto';
import { ComfortUpdateDto } from './dto/comfort-update.dto';
import { FilterDTO } from '../flight/dto/filter.dto';

@Injectable()
export class ComfortService {
  constructor(
    @InjectModel(Comfort.name)
    private readonly comfortModel: Model<ComfortDocument>,
  ) {}
  async findAll(): Promise<Comfort[]> {
    return this.comfortModel.find().exec();
  }

  async search(query: FilterDTO): Promise<Comfort[]> {
    return this.comfortModel.find(query).exec();
  }

  async findOne(idComfort: number): Promise<Comfort> {
    return this.comfortModel.findOne({ idComfort }).exec();
  }

  async create(comfort: ComfortCreateDto): Promise<Comfort> {
    return new this.comfortModel(comfort).save();
  }

  async update(idComfort: number, comfort: ComfortUpdateDto): Promise<Comfort> {
    return this.comfortModel.findOneAndUpdate({ idComfort }, comfort).exec();
  }

  async delete(idComfort: number): Promise<Comfort> {
    return this.comfortModel.findOneAndDelete({ idComfort }).exec();
  }

  async deleteAll(): Promise<Comfort> {
    return this.comfortModel.find({}).deleteMany({}).exec();
  }
}
