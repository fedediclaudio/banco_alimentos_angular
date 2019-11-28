import { Injectable } from '@angular/core';
import { OrganizacionDonante } from '../../lbservice/models/OrganizacionDonante';
@Injectable({
  providedIn: 'root'
})
abstract class AbstractOrganizacionDonanteService {

  constructor() { }
  
  abstract getOrganizacionesDonantes(): Promise<OrganizacionDonante[]>;
}
