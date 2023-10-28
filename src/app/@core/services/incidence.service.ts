import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IncidenceModel } from '../models/incidence-model.model';
import { Urls } from '../url';

@Injectable({
  providedIn: 'any'
})
export class IncidenceService{
  // Api que será consumida
  private apiUrl = Urls.INCIDENCE_BACK;

  constructor(private http: HttpClient, private router: Router) {

   }

   listIncidences(): Observable<IncidenceModel[]> {
    return this.http.get<IncidenceModel[]>(`${this.apiUrl}/byposition?categories=0,1,2,3,5&latitude=-26.9468&longitude=-49.0481&radiusInMeters=3000`);
   }
}
