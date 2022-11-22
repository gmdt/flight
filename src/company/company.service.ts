import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './schemas/company.schema';
import { CompanyCreateDto } from './dto/company-create.dto';
import { CompanyUpdateDto } from './dto/company-update.dto';
import { FilterDTO } from '../flight/dto/filter.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private readonly companyModel: Model<CompanyDocument>,
  ) {}
  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async search(query: FilterDTO): Promise<Company[]> {
    return this.companyModel.find(query).exec();
  }

  async findOne(idCompany: number): Promise<Company> {
    return this.companyModel.findOne({ idCompany }).exec();
  }

  async create(company: CompanyCreateDto): Promise<Company> {
    return new this.companyModel(company).save();
  }

  async update(idCompany: number, company: CompanyUpdateDto): Promise<Company> {
    return this.companyModel.findOneAndUpdate({ idCompany }, company).exec();
  }

  async delete(idCompany: number): Promise<Company> {
    return this.companyModel.findOneAndDelete({ idCompany }).exec();
  }

  async deleteAll(): Promise<Company> {
    return this.companyModel.find({}).deleteMany({}).exec();
  }
}
