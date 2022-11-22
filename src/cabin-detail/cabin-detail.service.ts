import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CabinDetail,
  CabinDetailDocument,
} from './schemas/cabin-detail.schema';
import { CabinDetailCreateDto } from './dto/cabin-detail-create.dto';
import { CabinDetailUpdateDto } from './dto/cabin-detail-update.dto';
import { FilterDTO } from '../flight/dto/filter.dto';

@Injectable()
export class CabinDetailService {
  constructor(
    @InjectModel(CabinDetail.name)
    private readonly cabinDetailModel: Model<CabinDetailDocument>,
  ) {}
  async findAll(): Promise<CabinDetail[]> {
    return this.cabinDetailModel.find().exec();
  }

  async search(query: FilterDTO): Promise<CabinDetail[]> {
    return this.cabinDetailModel.find(query).exec();
  }

  async findOne(idCabinDetail: number): Promise<CabinDetail> {
    return this.cabinDetailModel.findOne({ idCabinDetail }).exec();
  }

  async create(cabinDetail: CabinDetailCreateDto): Promise<CabinDetail> {
    return new this.cabinDetailModel(cabinDetail).save();
  }

  async update(
    idCabinDetail: number,
    cabinDetail: CabinDetailUpdateDto,
  ): Promise<CabinDetail> {
    return this.cabinDetailModel
      .findOneAndUpdate({ idCabinDetail }, cabinDetail)
      .exec();
  }

  async delete(idCabinDetail: number): Promise<CabinDetail> {
    return this.cabinDetailModel.findOneAndDelete({ idCabinDetail }).exec();
  }

  async deleteAll(): Promise<CabinDetail> {
    return this.cabinDetailModel.find({}).deleteMany({}).exec();
  }
}
