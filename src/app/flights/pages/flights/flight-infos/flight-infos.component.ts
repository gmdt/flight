import { Component, Input, OnInit } from '@angular/core';
import { Flight } from 'src/app/shared/models/flight.model';

@Component({
  selector: 'app-flight-infos',
  templateUrl: './flight-infos.component.html',
  styleUrls: ['./flight-infos.component.css'],
})
export class FlightInfosComponent {
  @Input() flightInfos!: Flight;
}
