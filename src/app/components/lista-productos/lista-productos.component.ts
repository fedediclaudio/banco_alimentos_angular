import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/lbservice';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  products: Producto[];
  
  constructor() { }

  ngOnInit() {
  }


  getProducts(){}

  removeProduct(product: Producto){}

  selectProduct(product: Producto){}
}
