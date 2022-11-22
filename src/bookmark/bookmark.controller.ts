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
import { BookmarkService } from './bookmark.service';
import { BookmarkCreateDto } from './dto/bookmark-create.dto';
import { BookmarkUpdateDto } from './dto/bookmark-update.dto';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private readonly service: BookmarkService) {}

  @Get()
  async index() {
    return this.service.findAll();
  }

  @Post('search')
  async searchBookmarks(@Body() query: FilterDTO) {
    return this.service.search(query);
  }

  @Get(':idBookmark')
  async find(@Param('idBookmark') idBookmark: number) {
    return this.service.findOne(idBookmark);
  }

  @Post()
  async create(@Body() data: BookmarkCreateDto) {
    return this.service.create(data);
  }

  @Put(':idBookmark')
  async update(
    @Param('idBookmark') idBookmark: number,
    @Body() bookmark: BookmarkUpdateDto,
  ) {
    return this.service.update(idBookmark, bookmark);
  }

  @Delete(':idBookmark')
  async delete(@Param('idBookmark') idBookmark: number) {
    return this.service.delete(idBookmark);
  }

  @Delete()
  async deleteAll() {
    return this.service.deleteAll();
  }
}
