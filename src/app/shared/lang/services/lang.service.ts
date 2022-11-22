import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  constructor(private http: HttpClient) {}

  /**
   * getLabel lang:string :
   * @return obs(object)
   * */
  public getLabel(lang: string): Observable<Object> {
    return this.http.get(`assets/i18n/${lang}.json`);
  }
}
