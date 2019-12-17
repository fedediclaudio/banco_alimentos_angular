import { Component, OnInit } from '@angular/core';
import { Bulto } from 'src/app/lbservice';

@Component({
  selector: 'app-lista-bultos',
  templateUrl: './lista-bultos.component.html',
  styleUrls: ['./lista-bultos.component.css']
})
export class ListaBultosComponent implements OnInit {

  bultos:Bulto[];
  
  constructor() { }

  ngOnInit() {
  }

  getBultos(){
    //llamar a funcion de servicio que retorna lista de bultos
    return this.bultos
  }

  removeBulto(bulto:Bulto){
    //llamar a funcion de servicio que remueve un bulto de la lista
  }

  
}
