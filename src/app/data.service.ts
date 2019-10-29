import { Injectable } from '@angular/core';
import { OrganizacionDonante } from 'src/model/organizacionDonante';

@Injectable({ providedIn: 'root' })
export class DataService {
    
  organizaciones:OrganizacionDonante[]

  constructor() {
    this.organizaciones = []
  }
 
  getOrganizacionesDonantes(){
    return this.organizaciones
  }

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
