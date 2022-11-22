import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CabinDetailService } from './cabin-detail.service';
import { CabinDetailCreateDto } from './dto/cabin-detail-create.dto';
import { CabinDetailUpdateDto } from './dto/cabin-detail-update.dto';

@Controller('cabindetails')
export class CabinDetailController {
  constructor(private readonly service: CabinDetailService) {}

  @Get()
  async index() {
    return this.service.findAll();
  }

  @Get(':idCabinDetail')
  async find(@Param('idCabinDetail') idCabinDetail: number) {
    return this.service.findOne(idCabinDetail);
  }

  @Post()
  async create(@Body() data: CabinDetailCreateDto) {
    return this.service.create(data);
  }

  @Put(':idCabinDetail')
  async update(
    @Param('idCabinDetail') idCabinDetail: number,
    @Body() bookmark: CabinDetailUpdateDto,
  ) {
    return this.service.update(idCabinDetail, bookmark);
  }

  @Delete(':idCabinDetail')
  async delete(@Param('idCabinDetail') idCabinDetail: number) {
    return this.service.delete(idCabinDetail);
  }

  @Delete()
  async deleteAll() {
    return this.service.deleteAll();
  }
}
