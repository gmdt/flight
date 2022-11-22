import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/flights/services/flights.service';
import { CabinDetail } from 'src/app/shared/models/cabin-detail.model';
import { Flight } from 'src/app/shared/models/flight.model';

@Component({
  selector: 'app-flights-details',
  templateUrl: './flights-details.component.html',
  styleUrls: ['./flights-details.component.css'],
})
export class FlightsDetailsComponent implements OnInit {
  cabinDetails?: Set<CabinDetail>;
  flightDetails!: Flight;
  constructor(private readonly flightService: FlightsService) {}

  ngOnInit(): void {
    this.flightDetails = this.flightService.flightDetails;
    this.cabinDetails = this.flightService.flightDetails?.cabinDetails;
  }
}
