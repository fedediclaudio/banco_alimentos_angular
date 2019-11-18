/* tslint:disable */
import { Injectable } from '@angular/core';
import { OrganizacionBeneficiaria } from '../../models/OrganizacionBeneficiaria';
import { Voluntario } from '../../models/Voluntario';
import { Vehiculo } from '../../models/Vehiculo';
import { OrganizacionDonante } from '../../models/OrganizacionDonante';
import { PersonaDeContacto } from '../../models/PersonaDeContacto';
import { TipoDeAlimento } from '../../models/TipoDeAlimento';
import { Estado } from '../../models/Estado';
import { Insignia } from '../../models/Insignia';
import { CategoriaVoluntario } from '../../models/CategoriaVoluntario';
import { Producto } from '../../models/Producto';
import { Paquete } from '../../models/Paquete';
import { Bulto } from '../../models/Bulto';
import { BultoProductoPaquete } from '../../models/BultoProductoPaquete';
import { Envio } from '../../models/Envio';
import { InsigniaOtorgadaVoluntario } from '../../models/InsigniaOtorgadaVoluntario';
import { InsigniaOtorgadaOrgDonante } from '../../models/InsigniaOtorgadaOrgDonante';
import { Contacto } from '../../models/Contacto';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    OrganizacionBeneficiaria: OrganizacionBeneficiaria,
    Voluntario: Voluntario,
    Vehiculo: Vehiculo,
    OrganizacionDonante: OrganizacionDonante,
    PersonaDeContacto: PersonaDeContacto,
    TipoDeAlimento: TipoDeAlimento,
    Estado: Estado,
    Insignia: Insignia,
    CategoriaVoluntario: CategoriaVoluntario,
    Producto: Producto,
    Paquete: Paquete,
    Bulto: Bulto,
    BultoProductoPaquete: BultoProductoPaquete,
    Envio: Envio,
    InsigniaOtorgadaVoluntario: InsigniaOtorgadaVoluntario,
    InsigniaOtorgadaOrgDonante: InsigniaOtorgadaOrgDonante,
    Contacto: Contacto,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
