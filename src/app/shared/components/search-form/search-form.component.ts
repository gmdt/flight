import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { FlightsService } from 'src/app/flights/services/flights.service';
import { FlightCriteria } from '../../models/flight-criteria.model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  companies: any = [];
  trips: any = [];
  flightTypes: any = [];

  showConnection: boolean = true;
  showBack: boolean = true;
  searchFlightForm!: FormGroup;

  timeTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#3f51b5',
      buttonColor: '#fff',
    },
    dial: {
      dialBackgroundColor: '#B2CDD7',
      dialEditableBackgroundColor: '#000000',
    },
    clockFace: {
      clockFaceBackgroundColor: '#F1F1F1',
      clockHandColor: '#3f51b5',
      clockFaceTimeInactiveColor: '#000000',
    },
  };

  @Output() eventSearch = new EventEmitter<FlightCriteria>();
  constructor(
    private readonly sharedService: SharedService,
    private readonly flightService: FlightsService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    if (!this.sharedService.creationDone) {
      this.sharedService.createSearchCriteresForm();
      this.sharedService.initDropDownLists();
      this.sharedService.creationDone = true;
    }
    this.searchFlightForm = this.sharedService.searchCriteresForm;
    this.companies = this.sharedService.companies;
    this.trips = this.sharedService.trips;
    this.flightTypes = this.sharedService.flightTypes;
    if (this.sharedService.haveResult) {
      this.searchFlight();
    }

    if (this.flightService.flightCriteria) {
      this.eventSearch.emit(this.flightService.flightCriteria);
      this.flightService.flightCriteria = null;
    }
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  searchFlight() {
    this.clean(this.searchFlightForm.value);
    this.eventSearch.emit(this.searchFlightForm.value);
  }

  clean(obj: any) {
    for (var propName in obj) {
      if (!obj[propName]) {
        delete obj[propName];
      }
    }
  }

  selectedTripType(tripType: string) {
    this.showBack = tripType === 'One-Way ticket' ? false : true;
  }

  selectedFlightType(tripType: string) {
    this.showConnection = tripType === 'Direct flight' ? false : true;
  }
}
