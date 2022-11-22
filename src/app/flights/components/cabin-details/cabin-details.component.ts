import { Component, Input, OnInit } from '@angular/core';
import { CabinDetail } from 'src/app/shared/models/cabin-detail.model';

@Component({
  selector: 'app-cabin-details',
  templateUrl: './cabin-details.component.html',
  styleUrls: ['./cabin-details.component.css'],
})
export class CabinDetailsComponent {
  @Input() cabinDetails?: Set<CabinDetail>;
  constructor() {}
}
