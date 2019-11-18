/* tslint:disable */
import {
  Envio,
  GeoPoint
} from '../index';

declare var Object: any;
export interface OrganizacionBeneficiariaInterface {
  "nombre": string;
  "direccion": string;
  "direccion_coordenadas"?: GeoPoint;
  "nro_personas": number;
  "id"?: any;
  "envioId"?: any;
  envios?: Envio[];
}

export class OrganizacionBeneficiaria implements OrganizacionBeneficiariaInterface {
  "nombre": string;
  "direccion": string;
  "direccion_coordenadas": GeoPoint;
  "nro_personas": number;
  "id": any;
  "envioId": any;
  envios: Envio[];
  constructor(data?: OrganizacionBeneficiariaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrganizacionBeneficiaria`.
   */
  public static getModelName() {
    return "OrganizacionBeneficiaria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrganizacionBeneficiaria for dynamic purposes.
  **/
  public static factory(data: OrganizacionBeneficiariaInterface): OrganizacionBeneficiaria{
    return new OrganizacionBeneficiaria(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'OrganizacionBeneficiaria',
      plural: 'OrganizacionBeneficiaria',
      path: 'OrganizacionBeneficiaria',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "direccion": {
          name: 'direccion',
          type: 'string'
        },
        "direccion_coordenadas": {
          name: 'direccion_coordenadas',
          type: 'GeoPoint'
        },
        "nro_personas": {
          name: 'nro_personas',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "envioId": {
          name: 'envioId',
          type: 'any'
        },
      },
      relations: {
        envios: {
          name: 'envios',
          type: 'Envio[]',
          model: 'Envio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizacionBeneficiariaId'
        },
      }
    }
  }
}
