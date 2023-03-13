import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  provincias: any =[]
  cantones: any =[]
  sucursales: any =[]

  constructor(private encuestaservicio: EncuestaService) { }

  ngOnInit(): void {
    this.encuestaservicio.postProvincia().subscribe(
      res=>{
        this.provincias=res;
        console.log(res)

      },
      err=>console.log(err)
    );

  }

  ChangeProvincia(evento: Event){

    const target = evento.target as HTMLButtonElement;

    this.encuestaservicio.postCantones(parseInt(target.value)).subscribe(
      res=>{
        this.cantones=res;


      },
      err=>console.log(err)
    );
  }
  ChangeCanton(evento: Event){

    const target = evento.target as HTMLButtonElement;
    this.encuestaservicio.postSucursales(parseInt(target.value)).subscribe(

      res=>{

        this.sucursales=res;


      },
      err=>console.log(err)
    );
  }

}
