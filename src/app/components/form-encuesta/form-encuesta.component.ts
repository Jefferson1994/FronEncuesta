import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { EncuestaModel } from 'src/app/models/modelspregunta';



@Component({
  selector: 'app-form-encuesta',
  templateUrl: './form-encuesta.component.html',
  styleUrls: ['./form-encuesta.component.css']
})
export class FormEncuestaComponent implements OnInit {

  //Encuesta: EncuestaModel;



  encuesta:  EncuestaModel =[]


  constructor(private encuestaservicio: EncuestaService) { }

  ngOnInit(): void {

    this.encuestaservicio.postPregunta().subscribe(
      res=>{


        this.encuesta =res;



      },
      err=>console.log(err)
    );
  }

}
