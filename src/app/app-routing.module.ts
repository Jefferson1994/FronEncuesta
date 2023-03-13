import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClientesListarComponent } from './components/clientes-listar/clientes-listar.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { FormEncuestaComponent } from './components/form-encuesta/form-encuesta.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: ClientesListarComponent
  },
  {
    path:'sucursal',
    component: SucursalComponent
  },
  {
    path:'cliente',
    component: ClienteComponent
  },
  {
    path:'encuesta',
    component: EncuestaComponent
  },
  {
    path:'forencuesta',
    component: FormEncuestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
