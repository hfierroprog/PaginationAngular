import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:8081/api/getProductos';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(this.url);
  }

  getProductosPage(page: number, size: number) {
    return this.http.get(this.url + '?page=' + page + '&size=' + size);
  }
}
