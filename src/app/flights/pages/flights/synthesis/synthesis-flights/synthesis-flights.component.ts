import { Component, Input, OnInit } from '@angular/core';
import { SynthesisCriteria } from 'src/app/shared/models/synthesis-criteria.model';

@Component({
  selector: 'app-synthesis-flights',
  templateUrl: './synthesis-flights.component.html',
  styleUrls: ['./synthesis-flights.component.css'],
})
export class SynthesisFlightsComponent {
  @Input() nbFlights!: number;
  @Input() synthesisCriteria!: SynthesisCriteria;
}
