import { Injectable } from '@angular/core';
import { Energy,Energy_mean,Energy_type } from './Energies';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnergiesService {
  private url: string = 'http://localhost:8000/api/energies';

  constructor(private http: HttpClient) { }

  getEnergies(): Observable<Energy[]> {
    return this.http.get<Energy[]>(this.url);
  }

}

@Injectable({
  providedIn: 'root'
})
export class Energies_typeService {
  private url: string = 'http://localhost:8000/api/energies_type';

  constructor(private http: HttpClient) { }

  getEnergies_type(): Observable<Energy_type[]> {
    return this.http.get<Energy_type[]>(this.url);
  }
}

@Injectable({
  providedIn: 'root'
})
export class Energies_meanService {
  private url: string = 'http://localhost:8000/api/energies_mean';

  constructor(private http: HttpClient) { }

  // Ajoutez un paramètre pour spécifier le type à filtrer
  getEnergies_meanByType(type: string): Observable<Energy_mean[]> {
    // Appel à l'API pour récupérer toutes les données
    return this.http.get<Energy_mean[]>(this.url)
      .pipe(
        // Utilisation de l'opérateur map pour filtrer les données en fonction du type
        map((energies_mean: Energy_mean[]) => energies_mean.filter(energy => energy.family === type))
      );
  }
}