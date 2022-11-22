import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmark, BookmarkDocument } from './schemas/bookmark.schema';
import { BookmarkCreateDto } from './dto/bookmark-create.dto';
import { BookmarkUpdateDto } from './dto/bookmark-update.dto';
import { FilterDTO } from '../flight/dto/filter.dto';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel(Bookmark.name)
    private readonly bookmarkModel: Model<BookmarkDocument>,
  ) {}
  async findAll(): Promise<Bookmark[]> {
    return this.bookmarkModel.find().exec();
  }

  async search(query: FilterDTO): Promise<Bookmark[]> {
    return this.bookmarkModel.find(query).exec();
  }

  async findOne(idBookmark: number): Promise<Bookmark> {
    return this.bookmarkModel.findOne({ idBookmark }).exec();
  }

  async create(bookmark: BookmarkCreateDto): Promise<Bookmark> {
    const idBookmark = await this.getLastId();
    return new this.bookmarkModel({ ...bookmark, idBookmark }).save();
  }

  async update(
    idBookmark: number,
    bookmark: BookmarkUpdateDto,
  ): Promise<Bookmark> {
    return this.bookmarkModel.findOneAndUpdate({ idBookmark }, bookmark).exec();
  }

  async delete(idBookmark: number): Promise<Bookmark> {
    return this.bookmarkModel.findOneAndDelete({ idBookmark }).exec();
  }

  async deleteAll(): Promise<Bookmark> {
    return this.bookmarkModel.find({}).deleteMany({}).exec();
  }

  private async getLastId(): Promise<number> {
    const bookmarks = (await this.findAll()) || [];
    const obj: Bookmark = bookmarks.length
      ? bookmarks.reduce(function (max, obj) {
          return obj.idBookmark > max.idBookmark ? obj : max;
        })
      : undefined;
    return obj ? ++obj.idBookmark : 0;
  }
}
