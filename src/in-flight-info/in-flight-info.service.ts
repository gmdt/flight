import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  InFlightInfo,
  InFlightInfoDocument,
} from './schemas/in-flight-info.schema';
import { InFlightInfoCreateDto } from './dto/in-flight-info-create.dto';
import { InFlightInfoUpdateDto } from './dto/in-flight-info-update.dto';
import { FilterDTO } from '../flight/dto/filter.dto';

@Injectable()
export class InFlightInfoService {
  constructor(
    @InjectModel(InFlightInfo.name)
    private readonly inFlightInfoModel: Model<InFlightInfoDocument>,
  ) {}
  async findAll(): Promise<InFlightInfo[]> {
    return this.inFlightInfoModel.find().exec();
  }

  async search(query: FilterDTO): Promise<InFlightInfo[]> {
    return this.inFlightInfoModel.find(query).exec();
  }

  async findOne(idInFlightInfo: number): Promise<InFlightInfo> {
    return this.inFlightInfoModel.findOne({ idInFlightInfo }).exec();
  }

  async create(inFlightInfo: InFlightInfoCreateDto): Promise<InFlightInfo> {
    return new this.inFlightInfoModel(inFlightInfo).save();
  }

  async update(
    idInFlightInfo: number,
    inFlightInfo: InFlightInfoUpdateDto,
  ): Promise<InFlightInfo> {
    return this.inFlightInfoModel
      .findOneAndUpdate({ idInFlightInfo }, inFlightInfo)
      .exec();
  }

  async delete(idInFlightInfo: number): Promise<InFlightInfo> {
    return this.inFlightInfoModel.findOneAndDelete({ idInFlightInfo }).exec();
  }

  async deleteAll(): Promise<InFlightInfo> {
    return this.inFlightInfoModel.find({}).deleteMany({}).exec();
  }
}
