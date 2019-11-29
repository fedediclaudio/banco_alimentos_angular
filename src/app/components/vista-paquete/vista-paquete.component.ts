import { Component, OnInit } from '@angular/core';
import { Paquete, Producto } from 'src/app/lbservice';

@Component({
  selector: 'app-vista-paquete',
  templateUrl: './vista-paquete.component.html',
  styleUrls: ['./vista-paquete.component.css']
})
export class VistaPaqueteComponent implements OnInit {

  pakage:Paquete;
  productos:Producto[];

  constructor() { }

  ngOnInit() {
  }



}
