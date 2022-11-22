import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FlightsService } from 'src/app/flights/services/flights.service';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { FlightCriteria } from 'src/app/shared/models/flight-criteria.model';
import { Flight } from 'src/app/shared/models/flight.model';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-flights-page',
  templateUrl: './flights-page.component.html',
  styleUrls: ['./flights-page.component.css'],
})
export class FlightsPageComponent {
  loading = false;
  show = false;
  nbFlights!: number;
  isHiddenSearch: boolean = false;
  flightsData = new MatTableDataSource<Flight>();
  flightCriteria!: FlightCriteria;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private readonly flightService: FlightsService,
    private readonly sharedService: SharedService,
    private _snackBar: MatSnackBar
  ) {}

  hideSearchForm() {
    this.isHiddenSearch = !this.isHiddenSearch;
  }
  searchFlights(flightCriteria: FlightCriteria) {
    this.flightCriteria = flightCriteria;
    this.isHiddenSearch = true;
    this.loading = true;
    this.flightService.searchFlights(flightCriteria).subscribe((data) => {
      this.nbFlights = data.length;
      this.flightsData.data = data;
      this.loading = false;
      if (this.nbFlights === 0) {
        this.show = false;
        this.isHiddenSearch = false;
      } else {
        this.sharedService.haveResult = true;
        this.show = true;
      }
    });
  }

  addBookmark(title: string) {
    console.log(this.flightCriteria);
    const bookmark: Bookmark = new Bookmark();
    bookmark.title = title;
    bookmark.addingDate = new Date();
    bookmark.nbFlights = this.nbFlights;
    bookmark.flightCriteria = this.flightCriteria;
    this.flightService.addBookmark(bookmark).subscribe((data) => {
      console.log(data);
      this._snackBar.open('Bookmark added successfully !', undefined, {
        duration: 1500,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['blue-snackbar'],
      });
    });
  }
}
