import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  Optional,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlightsService } from 'src/app/flights/services/flights.service';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { BOOKMARK_COLUMN } from 'src/app/shared/util/constants/constant';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.css'],
  animations: [
    trigger('listAnimations', [
      transition('* => *', [
        query(
          ':leave',
          [
            style({ transform: 'translateX(0)', opacity: 1 }),
            animate(
              '1000ms',
              style({ transform: 'translateX(100%)', opacity: 0 })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class BookmarksListComponent implements OnInit {
  loading = false;
  bookmarks = new MatTableDataSource<Bookmark>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort;
  displayedColumns: string[] = BOOKMARK_COLUMN;
  constructor(
    private readonly flightService: FlightsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.bookmarks.paginator = this.paginator;
    this.bookmarks.sort = this.matSort;
    this.flightService.getBookmarkList().subscribe((data) => {
      this.bookmarks.data = data;
    });
  }
  viewBookmark(idBookmark: number) {
    this.flightService.viewBookmark(idBookmark);
  }

  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }

  deleteBookmark(bookmark: Bookmark) {
    this.flightService.deleteBookmark(bookmark.idBookmark).subscribe(() => {
      const newData = this.bookmarks.data;
      newData.splice(newData.indexOf(bookmark), 1);
      this.bookmarks.data = newData;
    });
  }
  deleteAllBookmarks() {
    this.flightService.deleteAllBookmark().subscribe(() => {
      const newData = this.bookmarks.data;
      newData.splice(0, this.bookmarks.data.length);
      this.bookmarks.data = newData;
    });
  }
}
