import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChartType } from 'chart.js';
import { SynthesisCompany } from 'src/app/shared/models/synthesis-company.model';
import { CompanyName } from 'src/app/shared/util/enums/company-name';

@Component({
  selector: 'app-synthesis-company',
  templateUrl: './synthesis-company.component.html',
  styleUrls: ['./synthesis-company.component.css'],
  animations: [
    trigger('pieAnimation', [
      transition(':enter', [
        animate(
          '3s ease',
          keyframes([
            style({ transform: 'scale(0) rotate(-180deg)' }),
            style({ transform: 'scale(-1) rotate(180deg)' }),
          ])
        ),
      ]),
    ]),

    trigger('tableAnimation', [
      transition(':enter', [
        animate(
          '1s ease-in-out',
          keyframes([
            style({ transform: 'translateX(-200%)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SynthesisCompanyComponent implements OnInit {
  @Input() synthesisCompanies: SynthesisCompany[] = [];
  totalFlights = 0;
  pieChartType: ChartType = 'pie';
  //pieChartLabels = ['Air arabia', 'Air France', 'Qatar', 'Emirates'];
  // pieChartData = [
  //   {
  //     data: [8, 5, 50, 30, 7],
  //     label: 'Indice commercial',
  //   },
  // ];
  pieChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  colors: any = [];
  pieChartLabels: CompanyName[] = [];
  pieChartData: [{ data: number[]; label: string }] = [{ data: [], label: '' }];
  constructor(private readonly translateService: TranslateService) {}
  ngOnInit(): void {
    this.synthesisCompanies.forEach((row) => {
      this.totalFlights += row.nbFlights;
    });
    this.synthesisCompanies.forEach((row) => {
      this.pieChartLabels.push(
        this.translateService.instant(
          'searchFlightForm.company.' + row.companyName
        )
      );
      this.pieChartData[0]?.data.push(
        (row.nbFlights / this.totalFlights) * 100
      );
    });
    this.pieChartData[0].label = 'Indice commercial';
    this.colors = [
      {
        backgroundColor: ['#3f51b5', '#EAF9FF', '#B2CDD7'],
      },
    ];
  }
}
