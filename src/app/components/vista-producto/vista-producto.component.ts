import { Component, OnInit } from '@angular/core';
import { Producto } from '../../lbservice/models/Producto';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  product:Producto;
  
  constructor() { }

  ngOnInit() {
  }



}
