import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ResponseProductos } from '../../vo/responseProductos';
import { PageChangedEvent } from '../../../../node_modules/ngx-bootstrap/pagination';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  response: ResponseProductos;
  productos: any[];
  page: number;
  totalElementos: number;
  elementosPorPagina: number;
  totalPaginas: number;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.page = 0;
    this.elementosPorPagina = 5;
    this.obtenerDatos(this.page, this.elementosPorPagina);
  }

  obtenerDatos(page: number, size: number) {
    this.productoService.getProductosPage(page, size).subscribe((data: ResponseProductos) => {
      console.log('Respuesta: ' + JSON.stringify(data));
      this.productos = data.content;
      this.totalElementos = data.totalElements;
      this.totalPaginas = data.totalPages;
    });
  }

  cambiarPagina(event: PageChangedEvent) {
    console.log('Pagina: ' + event.page);
    this.page = event.page - 1;
    this.obtenerDatos(this.page, this.elementosPorPagina);
  }

  selectChange(event: any) {
    this.elementosPorPagina = event.target.value;
    this.obtenerDatos(this.page, this.elementosPorPagina);
  }
}
