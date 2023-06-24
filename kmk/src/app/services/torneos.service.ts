import {
  HttpClient,
  HttpHeaders,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiurlService } from './apiurl.service';
@Injectable({
  providedIn: 'root',
})
export class TorneosService {
  constructor(private http: HttpClient, private apiUrl: ApiurlService) {}

  // Method Get

  apiAlmacenTorneos = this.apiUrl.url + '/api/torneos';
  apiAlmacenTorneosId = this.apiUrl.url + '/api/torneos';

  public getTorneo(){
    return this.http.get(this.apiAlmacenTorneos);
  }

  getTorneoId (idtorneo:any){

    return this.http.get(this.apiAlmacenTorneosId + idtorneo);

  }

  


}
