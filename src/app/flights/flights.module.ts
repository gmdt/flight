import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlightsComponent } from './pages/flights/flights.component';
import { FlightsPageComponent } from './pages/flights/flights-page/flights-page.component';
import { SharedModule } from '../shared/shared.module';
import { PortalModule } from '../portal/portal.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

import { I18nDatePipe } from '../shared/util/pipes/i18n-date.pipe';
import { ReplaceNullValuePipe } from '../shared/util/pipes/replace-null-value.pipe';
import { FlightSearchSummaryComponent } from './components/flight-search-summary/flight-search-summary.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { BookmarksListComponent } from './pages/bookmarks/bookmarks-list/bookmarks-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SynthesisComponent } from './pages/flights/synthesis/synthesis.component';
import { SynthesisCriteriaComponent } from './pages/flights/synthesis/synthesis-criteria/synthesis-criteria.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SynthesisFlightsComponent } from './pages/flights/synthesis/synthesis-flights/synthesis-flights.component';
import { SynthesisCompanyComponent } from './pages/flights/synthesis/synthesis-company/synthesis-company.component';
import { NgChartsModule } from 'ng2-charts';
import { FlightsDetailsComponent } from './pages/flights/flights-details/flights-details.component';
import { FlightInfosComponent } from './pages/flights/flight-infos/flight-infos.component';
import { CabinDetailsComponent } from './components/cabin-details/cabin-details.component';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightsListComponent,
    FlightsPageComponent,
    I18nDatePipe,
    ReplaceNullValuePipe,
    FlightSearchSummaryComponent,
    BookmarksComponent,
    BookmarksListComponent,
    SynthesisComponent,
    SynthesisCriteriaComponent,
    SynthesisFlightsComponent,
    SynthesisCompanyComponent,
    FlightsDetailsComponent,
    FlightInfosComponent,
    CabinDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    SharedModule,
    PortalModule,
    TranslateModule,
    MatProgressSpinnerModule,
    MatTableExporterModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    NgChartsModule,
  ],
  exports: [FlightsListComponent],
  providers: [],
})
export class FlightsModule {}
