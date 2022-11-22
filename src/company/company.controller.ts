import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FilterDTO } from '../flight/dto/filter.dto';
import { CompanyService } from './company.service';
import { CompanyCreateDto } from './dto/company-create.dto';
import { CompanyUpdateDto } from './dto/company-update.dto';

@Controller('companys')
export class CompanyController {
  constructor(private readonly service: CompanyService) {}

  @Get()
  async index() {
    return this.service.findAll();
  }

  @Post('search')
  async searchCompanys(@Body() query: FilterDTO) {
    return this.service.search(query);
  }

  @Get(':idCompany')
  async find(@Param('idCompany') idCompany: number) {
    return this.service.findOne(idCompany);
  }

  @Post()
  async create(@Body() data: CompanyCreateDto) {
    return this.service.create(data);
  }

  @Put(':idCompany')
  async update(
    @Param('idCompany') idCompany: number,
    @Body() company: CompanyUpdateDto,
  ) {
    return this.service.update(idCompany, company);
  }

  @Delete(':idCompany')
  async delete(@Param('idCompany') idCompany: number) {
    return this.service.delete(idCompany);
  }

  @Delete()
  async deleteAll() {
    return this.service.deleteAll();
  }
}
