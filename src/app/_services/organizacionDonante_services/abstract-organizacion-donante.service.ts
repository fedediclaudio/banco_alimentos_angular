import { Injectable } from '@angular/core';
import { OrganizacionDonante } from '../../lbservice/models/OrganizacionDonante';
@Injectable({
  providedIn: 'root'
})
export class AbstractOrganizacionDonanteService {

  constructor() { }
  
  abstract getOrganizacionesDonantes():Promise<OrganizacionDonante[]>
}
