import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/lbservice';

@Component({
  selector: 'app-lista-paquetes',
  templateUrl: './lista-paquetes.component.html',
  styleUrls: ['./lista-paquetes.component.css']
})
export class ListaPaquetesComponent implements OnInit {

  packages:Paquete[]
  
  constructor() { }

  ngOnInit() {
  }

  getPackages(){}

  removePackage(pckg:Paquete){}
}
