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

  getBultos(){}

  removeBulto(bulto:Bulto){}
}
