import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { FormEncuestaComponent } from './components/form-encuesta/form-encuesta.component';
import { ClientesListarComponent } from './components/clientes-listar/clientes-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    ClienteComponent,
    SucursalComponent,
    EncuestaComponent,
    FormEncuestaComponent,
    ClientesListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
