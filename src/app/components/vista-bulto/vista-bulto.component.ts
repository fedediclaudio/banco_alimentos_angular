import { Component, OnInit } from '@angular/core';
import { Bulto, Producto } from 'src/app/lbservice';

@Component({
  selector: 'app-vista-bulto',
  templateUrl: './vista-bulto.component.html',
  styleUrls: ['./vista-bulto.component.css']
})
export class VistaBultoComponent implements OnInit {

  products:Producto[];
  bulto:Bulto;

  constructor() { }

  ngOnInit() {
    
  }

  getProducts(){}

  removeBulto(){}

}
