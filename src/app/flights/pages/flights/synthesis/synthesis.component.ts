import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/flights/services/flights.service';
import { SynthesisCompany } from 'src/app/shared/models/synthesis-company.model';
import { SynthesisCriteria } from 'src/app/shared/models/synthesis-criteria.model';

@Component({
  selector: 'app-synthesis',
  templateUrl: './synthesis.component.html',
})
export class SynthesisComponent {
  synthesisCompanies: SynthesisCompany[] = [];
  show = false;
  loading = false;
  nbFlights!: number;
  synthesisCriteria!: SynthesisCriteria;
  constructor(private readonly flightService: FlightsService) {}

  doSynthesis(synthesisCriteria: SynthesisCriteria) {
    this.loading = true;
    this.synthesisCriteria = synthesisCriteria;
    this.flightService.getNumberFlights(synthesisCriteria).subscribe((nb) => {
      this.nbFlights = nb;
      this.loading = false;
      if (this.nbFlights === 0) {
        this.show = false;
      } else {
        this.show = true;
      }
    });
    this.flightService
      .synthesisCompanyFlights(synthesisCriteria)
      .subscribe((data) => {
        this.synthesisCompanies = data;
      });
  }
}
