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
import { InFlightInfoService } from './in-flight-info.service';
import { InFlightInfoCreateDto } from './dto/in-flight-info-create.dto';
import { InFlightInfoUpdateDto } from './dto/in-flight-info-update.dto';

@Controller('inFlightInfos')
export class InFlightInfoController {
  constructor(private readonly service: InFlightInfoService) {}

  @Get()
  async index() {
    return this.service.findAll();
  }

  @Post('search')
  async searchInFlightInfos(@Body() query: FilterDTO) {
    return this.service.search(query);
  }

  @Get(':idInFlightInfo')
  async find(@Param('idInFlightInfo') idInFlightInfo: number) {
    return this.service.findOne(idInFlightInfo);
  }

  @Post()
  async create(@Body() data: InFlightInfoCreateDto) {
    return this.service.create(data);
  }

  @Put(':idInFlightInfo')
  async update(
    @Param('idInFlightInfo') idInFlightInfo: number,
    @Body() inFlightInfo: InFlightInfoUpdateDto,
  ) {
    return this.service.update(idInFlightInfo, inFlightInfo);
  }

  @Delete(':idInFlightInfo')
  async delete(@Param('idInFlightInfo') idInFlightInfo: number) {
    return this.service.delete(idInFlightInfo);
  }

  @Delete()
  async deleteAll() {
    return this.service.deleteAll();
  }
}
