import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bookmark } from '../../shared/models/bookmark.model';
import { FlightCriteria } from '../../shared/models/flight-criteria.model';
import { Flight } from '../../shared/models/flight.model';
import { SynthesisCompany } from '../../shared/models/synthesis-company.model';
import { SynthesisCriteria } from '../../shared/models/synthesis-criteria.model';
import { API_URL_BASE } from '../../shared/util/constants/constant';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  flightCriteria?: FlightCriteria | null;
  flightDetails!: Flight;
  searchTransactions: any;
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getFlightList(): Observable<Flight[]> {
    const flights = this.http.get<Flight[]>(`${API_URL_BASE}/flights`);
    return flights;
  }

  getFlight(idFlight: number): Observable<Flight> {
    return this.http.get<Flight>(`${API_URL_BASE}/flights/${idFlight}`);
  }

  getFlightDetails(idFlight: number): void {
    this.getFlight(idFlight).subscribe((flight) => {
      this.flightDetails = flight;
      this.router.navigate(['/details']);
    });
  }
  getNumberFlights(synthesisCriteria: SynthesisCriteria): Observable<number> {
    return this.http.post<number>(
      `${API_URL_BASE}/flights/numberFlights`,
      synthesisCriteria
    );
  }
  synthesisCompanyFlights(
    synthesisCriteria: SynthesisCriteria
  ): Observable<SynthesisCompany[]> {
    return this.http.post<SynthesisCompany[]>(
      `${API_URL_BASE}/flights/synthesisCompanyFlights`,
      synthesisCriteria
    );
  }

  searchFlights(flightCriteria: FlightCriteria): Observable<Flight[]> {
    return this.http.post<Flight[]>(
      `${API_URL_BASE}/flights/search`,
      flightCriteria
    );
  }

  addBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(`${API_URL_BASE}/bookmarks`, bookmark);
  }

  getBookmarkList(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(`${API_URL_BASE}/bookmarks`);
  }
  getBookmark(idBookmark: number): Observable<Bookmark> {
    return this.http.get<Bookmark>(`${API_URL_BASE}/bookmarks/${idBookmark}`);
  }
  deleteBookmark(idBookmark: number): Observable<Bookmark> {
    return this.http.delete<Bookmark>(
      `${API_URL_BASE}/bookmarks/${idBookmark}`
    );
  }
  deleteAllBookmark() {
    return this.http.delete<Bookmark>(`${API_URL_BASE}/bookmarks`);
  }
  viewBookmark(idBookmark: number) {
    this.getBookmark(idBookmark).subscribe((bookmark) => {
      this.flightCriteria = bookmark.flightCriteria;
      this.router.navigate(['flights']);
    });
  }
}
