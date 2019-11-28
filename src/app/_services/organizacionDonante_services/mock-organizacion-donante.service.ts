import { Injectable } from '@angular/core';
import { AbstractOrganizacionDonanteService } from './abstract-organizacion-donante.service';
import { OrganizacionDonante } from '../../lbservice/models/OrganizacionDonante';
@Injectable({
  providedIn: 'root'
})
export class MockOrganizacionDonanteService extends AbstractOrganizacionDonanteService {

  organizaciones:OrganizacionDonante[]

  constructor() {
    super();
    this.organizaciones = []
  }
 
  getOrganizacionesDonantes():OrganizacionDonante{};
   // return this.organizaciones
  //}

  getOrganizacionDonanteByIdx(idx:number) {
    return this.organizaciones[idx];
  }
 
  addOrganizacionDonante(organizacion:OrganizacionDonante){
    this.organizaciones.push(organizacion)
  }
 
  deleteOrganizacionDonante(organizacion:OrganizacionDonante){
    // console.log(organizacion)
    this.organizaciones = this.organizaciones.filter((i)=>organizacion!==i)
    // console.log(this.organizaciones)
  }
  
}
