import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {

  /* API Laravel conexion*/
  url = "http://127.0.0.1:8000";

  constructor() { }
}
