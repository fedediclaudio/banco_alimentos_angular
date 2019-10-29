import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { OrganizacionDonante } from 'src/model/organizacionDonante';

@Component({
  selector: 'organizacion-donante',
  templateUrl: './organizacion-donante.component.html',
  styleUrls: ['./organizacion-donante.component.css']
})
export class OrganizacionDonanteComponent implements OnInit {

  constructor(private service:DataService) { }
  organizaciones:OrganizacionDonante[]
  
  ngOnInit() {
    this.organizaciones = this.service.getOrganizacionesDonantes();
  }

  onRemove(org:OrganizacionDonante){
    console.log(org);
    this.service.deleteOrganizacionDonante(org)
    this.organizaciones=this.service.getOrganizacionesDonantes();
  }

}
