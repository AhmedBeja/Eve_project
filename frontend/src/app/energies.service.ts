import { Injectable } from '@angular/core';
import { Energy,Energy_mean,Energy_type } from './Energies';
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

  getEnergies_mean(): Observable<Energy_mean[]> {
    return this.http.get<Energy_mean[]>(this.url);
  }
}