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
import { ComfortService } from './comfort.service';
import { ComfortCreateDto } from './dto/comfort-create.dto';
import { ComfortUpdateDto } from './dto/comfort-update.dto';

@Controller('comforts')
export class ComfortController {
  constructor(private readonly service: ComfortService) {}

  @Get()
  async index() {
    return this.service.findAll();
  }

  @Post('search')
  async searchComforts(@Body() query: FilterDTO) {
    return this.service.search(query);
  }

  @Get(':idComfort')
  async find(@Param('idComfort') idComfort: number) {
    return this.service.findOne(idComfort);
  }

  @Post()
  async create(@Body() data: ComfortCreateDto) {
    return this.service.create(data);
  }

  @Put(':idComfort')
  async update(
    @Param('idComfort') idComfort: number,
    @Body() comfort: ComfortUpdateDto,
  ) {
    return this.service.update(idComfort, comfort);
  }

  @Delete(':idComfort')
  async delete(@Param('idComfort') idComfort: number) {
    return this.service.delete(idComfort);
  }

  @Delete()
  async deleteAll() {
    return this.service.deleteAll();
  }
}
