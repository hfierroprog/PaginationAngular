import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(this.url);
  }

  getProductosPage(page: number, size: number, sort?: string, direccion?: string) {
    if (sort === undefined) {
      sort = '';
    }

    if (direccion === undefined) {
      direccion = '';
    }

    return this.http.get(this.url + '/getProductos' + '?page=' + page + '&size=' + size + '&sort=' + sort + ',' + direccion);
  }

  getProductosCount() {
    return this.http.get(this.url + '/getCantidadProductos');
  }
}
