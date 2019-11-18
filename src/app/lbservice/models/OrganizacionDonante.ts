/* tslint:disable */
import {
  Bulto,
  InsigniaOtorgadaOrgDonante,
  Contacto,
  GeoPoint
} from '../index';

declare var Object: any;
export interface OrganizacionDonanteInterface {
  "razon_social": string;
  "cuil": string;
  "direccion": string;
  "direccion_coordenadas"?: GeoPoint;
  "puntaje": number;
  "id"?: any;
  "bultoId"?: any;
  "insigniaOtorgadaOrgDonanteId"?: any;
  bultos?: Bulto[];
  insigniaOtorgadaOrgDonantes?: InsigniaOtorgadaOrgDonante[];
  contactos?: Contacto[];
}

export class OrganizacionDonante implements OrganizacionDonanteInterface {
  "razon_social": string;
  "cuil": string;
  "direccion": string;
  "direccion_coordenadas": GeoPoint;
  "puntaje": number;
  "id": any;
  "bultoId": any;
  "insigniaOtorgadaOrgDonanteId": any;
  bultos: Bulto[];
  insigniaOtorgadaOrgDonantes: InsigniaOtorgadaOrgDonante[];
  contactos: Contacto[];
  constructor(data?: OrganizacionDonanteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrganizacionDonante`.
   */
  public static getModelName() {
    return "OrganizacionDonante";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrganizacionDonante for dynamic purposes.
  **/
  public static factory(data: OrganizacionDonanteInterface): OrganizacionDonante{
    return new OrganizacionDonante(data);
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
      name: 'OrganizacionDonante',
      plural: 'OrganizacionDonantes',
      path: 'OrganizacionDonantes',
      idName: 'id',
      properties: {
        "razon_social": {
          name: 'razon_social',
          type: 'string'
        },
        "cuil": {
          name: 'cuil',
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
        "puntaje": {
          name: 'puntaje',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "bultoId": {
          name: 'bultoId',
          type: 'any'
        },
        "insigniaOtorgadaOrgDonanteId": {
          name: 'insigniaOtorgadaOrgDonanteId',
          type: 'any'
        },
      },
      relations: {
        bultos: {
          name: 'bultos',
          type: 'Bulto[]',
          model: 'Bulto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizacionDonanteId'
        },
        insigniaOtorgadaOrgDonantes: {
          name: 'insigniaOtorgadaOrgDonantes',
          type: 'InsigniaOtorgadaOrgDonante[]',
          model: 'InsigniaOtorgadaOrgDonante',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizacionDonanteId'
        },
        contactos: {
          name: 'contactos',
          type: 'Contacto[]',
          model: 'Contacto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'organizacionDonanteId'
        },
      }
    }
  }
}
