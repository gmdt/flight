import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlightCriteria } from 'src/app/shared/models/flight-criteria.model';
import { FLIGHT_COLUMN } from '../../../shared/util/constants/constant';
import { Flight } from '../../../../app/shared/models/flight.model';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css'],
})
export class FlightsListComponent implements OnInit {
  displayedColumns: string[] = FLIGHT_COLUMN;
  selectedFlights = new MatTableDataSource<Flight>();
  flightsTemp = new MatTableDataSource<Flight>();
  pageSizeOptions: number[] = [5, 10, 20];
  @Input() flights = new MatTableDataSource<Flight>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort;
  displayBackButton = false;
  title!: string;
  @Output() bookmarkTitle = new EventEmitter<string>();
  constructor(
    private flightService: FlightsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.flights.paginator = this.paginator;
    this.flights.sort = this.matSort;
    this.flightsTemp = this.flights;
  }
  getSelectedFlights() {
    this.selectedFlights.paginator = this.paginator;
    this.flights = this.selectedFlights;
    this.displayBackButton = true;
  }

  backToResultList() {
    this.flightsTemp.paginator = this.paginator;
    this.flights = this.flightsTemp;
    this.displayBackButton = false;
  }

  addRow(row: Flight) {
    if (row && !this.ifRowExist(row)) this.selectedFlights.data.push(row);
  }
  ifRowExist(row: Flight): boolean | undefined {
    for (let index = 0; index < this.selectedFlights.data.length; index++) {
      if (this.selectedFlights.data[index].idFlight === row.idFlight) {
        this.selectedFlights.data.splice(index, 1);
        return true;
      }
    }
    return false;
  }

  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }
  addBookmark() {
    this.bookmarkTitle.emit(this.title);
  }

  getFlight(id: number) {
    this.flightService.getFlightDetails(id);
  }
}
