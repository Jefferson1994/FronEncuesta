import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT_CATALOGOS, ENDPOINT_CLIENTE, ENDPOINT_PREGUNTAS, BASE_URL } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http: HttpClient) { }


  postProvincia() {
    return this.http.post(`${BASE_URL}${ENDPOINT_CATALOGOS}`, { codigo: 1, tipo: 'provincias' });
  }

  postCantones(idprovincia: number) {
    return this.http.post(`${BASE_URL}${ENDPOINT_CATALOGOS}`, { codigo: idprovincia, tipo: 'cantones' });
  }
  postSucursales(idcanton: number) {
    return this.http.post(`${BASE_URL}${ENDPOINT_CATALOGOS}`, { codigo: idcanton, tipo: 'sucursales' });
  }
  postPregunta() {
    return this.http.post(`${BASE_URL}${ENDPOINT_PREGUNTAS}`, { codigo: -1 });
  }
  postBuscarCliente(CedulaBuscar: String) {
    return this.http.post(`${BASE_URL}${ENDPOINT_CLIENTE}`, { cedula: CedulaBuscar });
  }

}
