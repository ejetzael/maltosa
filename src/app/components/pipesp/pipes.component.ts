import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre= "Chuky";
  secuencia=[1,2,3,4,5,6,7,8,9,10];
  fi= Math.PI;
  chach= 0.234;
  salario= 1234.5;

  jotason = {
    cadena:"palabritas",
    clave:"qr",
    numero:638954,
    sub:{
      cl:"la ce ele",
      st:"el ese te"
    }
  }

  pipersonalizado1 = "yAzmin LugO ArGUeta";

  valorDePromesa = new Promise( (resolve, reject) =>{
    setTimeout( () => resolve( 'llego la data!' ), 3500);
  });

  horario = new Date();

  
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
