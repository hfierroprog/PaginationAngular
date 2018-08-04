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
import { InicioComponent } from './components/inicio/inicio.component';
import { MantenedorComponent } from './components/mantenedor/mantenedor.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    ContenidoComponent,
    ProductosComponent,
    InicioComponent,
    MantenedorComponent
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
