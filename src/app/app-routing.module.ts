import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './flights/pages/bookmarks/bookmarks.component';
import { FlightsDetailsComponent } from './flights/pages/flights/flights-details/flights-details.component';
import { FlightsPageComponent } from './flights/pages/flights/flights-page/flights-page.component';
import { SynthesisComponent } from './flights/pages/flights/synthesis/synthesis.component';

const routes: Routes = [
  { path: 'flights', component: FlightsPageComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'synthesis', component: SynthesisComponent },
  { path: 'details', component: FlightsDetailsComponent },
  { path: '', component: FlightsPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
