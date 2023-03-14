import { Component, OnInit } from '@angular/core';
import { EncuestaModel } from 'src/app/models/models';
import { EncuestaService } from 'src/app/services/encuesta.service';


@Component({
  selector: 'app-form-encuesta',
  templateUrl: './form-encuesta.component.html',
  styleUrls: ['./form-encuesta.component.css']
})
export class FormEncuestaComponent implements OnInit {

  clienteBuscar: any
  encuesta: EncuestaModel[] = []
  provincias: any = []
  cantones: any = []
  sucursales: any = []
  cedula: string = ''
  respuesta: string=''

  constructor(private encuestaservicio: EncuestaService) { }

  ngOnInit(): void {
    this.encuestaservicio.postPregunta().subscribe(
      (res) => {
        this.encuesta = res as EncuestaModel[];
      },
      err => console.log(err)
    );
    this.encuestaservicio.postProvincia().subscribe(
      res => {
        this.provincias = res;
      },
      err => console.log(err)
    );
  }

  ChangeProvincia(evento: Event) {
    const target = evento.target as HTMLButtonElement;
    this.encuestaservicio.postCantones(parseInt(target.value)).subscribe(
      res => {
        this.cantones = res;
      },
      err => console.log(err)
    );
  }

  ChangeCanton(evento: Event) {
    const target = evento.target as HTMLButtonElement;
    this.encuestaservicio.postSucursales(parseInt(target.value)).subscribe(
      res => {
        this.sucursales = res;
      },
      err => console.log(err)
    );
  }

  BuscarCliente() {
    this.encuestaservicio.postBuscarCliente(this.cedula).subscribe(
      res => {
        if (res) this.clienteBuscar = res;
      },
      err => console.log(err)
    );
  }

  registrarEncuesta(respuesta: EncuestaModel[]){
    console.log(respuesta);
  }

}
