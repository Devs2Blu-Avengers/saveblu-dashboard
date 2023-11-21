import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IncidenceModel } from '../models/incidence-model.model';
import { Urls } from '../url';
import { UserModel } from '../models/user-model.model';

@Injectable({
  providedIn: 'any'
})
export class IncidenceService{
  // Api que será consumida
  private apiUrl = Urls.INCIDENCE_BACK;

  constructor(private http: HttpClient, private router: Router) {

   }

   listIncidences(categories: number[]): Observable<IncidenceModel[]> {

    return this.http.get<IncidenceModel[]>(`${this.apiUrl}/byposition?categories=${categories}
    &latitude=-26.9468&longitude=-49.0481&radiusInMeters=5000`);
   }

   updateIndence(incidence: IncidenceModel): void {
    this.http.put(`${this.apiUrl}/update`, incidence).subscribe({
      next: (response) => {
        console.log('Ocorrência atualizada com sucesso:', response);
        // Atualiza a página de ocorrências
        window.location.href = '/'
      },
      error: (error) => {
        console.error('Erro ao atualizar Ocorrência:', error);
      }
    });
   }

   deleteIncidence(id: number): void {
    this.http.delete(`${this.apiUrl}/delete/${id}`).subscribe({
      next: (response) => {
        console.log('Ocorrência excluída com sucesso:', response);
        // Atualiza a página de ocorrências
        window.location.href = '/';
      },
      error: (error) => {
        console.error('Erro ao excluir a Ocorrência:', error);
      }
    });
   }
}
