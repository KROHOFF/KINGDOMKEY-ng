import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TorneoService {
  private apiUrl = 'http://127.0.0.1:8000/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getTorneos(): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(`${this.apiUrl}/torneos`);
  }

  getTorneo(torneoId: number): Observable<Torneo> {
    return this.http.get<Torneo>(`${this.apiUrl}/torneos/${torneoId}`);
  }

  createTorneo(torneo: Torneo): Observable<any> {
    return this.http.post(`${this.apiUrl}/torneos`, torneo);
  }

  updateTorneo(torneoId: number, torneo: Torneo): Observable<any> {
    return this.http.put(`${this.apiUrl}/torneos/${torneoId}`, torneo);
  }

  deleteTorneo(torneoId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/torneos/${torneoId}`);
  }
}

export interface Torneo {
  torneo_id: number;
  torneo_nombre: string;
  torneo_fecha: string;
  torneo_hora: string;
  // Otros campos del torneo
}


@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent {

}




