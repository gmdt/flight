import { BookmarkBaseDTO } from './bookmark-base.dto';

export class BookmarkUpdateDto extends BookmarkBaseDTO {
  completedAt: Date;
}
