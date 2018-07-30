// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {DataTablesModule} from 'angular-datatables';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ProductosComponent } from './components/productos/productos.component';

// Service
import { ProductoService } from './services/producto.service';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    ContenidoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PaginationModule.forRoot(),
    DataTablesModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
