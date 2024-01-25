import { Injectable } from '@angular/core';
import { Energy } from './Energies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
