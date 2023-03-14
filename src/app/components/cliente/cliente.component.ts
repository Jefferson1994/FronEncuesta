import { Component, OnInit } from '@angular/core';
import { ClienteModels } from 'src/app/models/modelsCliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: ClienteModels = {
    IdCliente: 0,
    nombre: '',
    apellido: '',
    cedula: '',
    sexo: '',
    edad: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  saveCliente(){
    console.log(this.cliente)

  }

}
