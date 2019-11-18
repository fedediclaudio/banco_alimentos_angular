/* tslint:disable */
import {
  Estado,
  Voluntario,
  OrganizacionDonante,
  BultoProductoPaquete
} from '../index';

declare var Object: any;
export interface BultoInterface {
  "descripcion"?: string;
  "volumen"?: Array<any>;
  "fecha_disponibilidad": Date;
  "revisado": boolean;
  "fecha_vencimiento": Date;
  "id"?: any;
  "voluntarioId"?: any;
  "organizacionDonanteId"?: any;
  "estadoId"?: any;
  "bultoProductoPaqueteId"?: any;
  estados?: Estado;
  voluntarios?: Voluntario;
  organizacionDonantes?: OrganizacionDonante;
  bultoProductoPaquetes?: BultoProductoPaquete[];
}

export class Bulto implements BultoInterface {
  "descripcion": string;
  "volumen": Array<any>;
  "fecha_disponibilidad": Date;
  "revisado": boolean;
  "fecha_vencimiento": Date;
  "id": any;
  "voluntarioId": any;
  "organizacionDonanteId": any;
  "estadoId": any;
  "bultoProductoPaqueteId": any;
  estados: Estado;
  voluntarios: Voluntario;
  organizacionDonantes: OrganizacionDonante;
  bultoProductoPaquetes: BultoProductoPaquete[];
  constructor(data?: BultoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Bulto`.
   */
  public static getModelName() {
    return "Bulto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Bulto for dynamic purposes.
  **/
  public static factory(data: BultoInterface): Bulto{
    return new Bulto(data);
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
      name: 'Bulto',
      plural: 'Bultos',
      path: 'Bultos',
      idName: 'id',
      properties: {
        "descripcion": {
          name: 'descripcion',
          type: 'string'
        },
        "volumen": {
          name: 'volumen',
          type: 'Array&lt;any&gt;'
        },
        "fecha_disponibilidad": {
          name: 'fecha_disponibilidad',
          type: 'Date'
        },
        "revisado": {
          name: 'revisado',
          type: 'boolean'
        },
        "fecha_vencimiento": {
          name: 'fecha_vencimiento',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
        "organizacionDonanteId": {
          name: 'organizacionDonanteId',
          type: 'any'
        },
        "estadoId": {
          name: 'estadoId',
          type: 'any'
        },
        "bultoProductoPaqueteId": {
          name: 'bultoProductoPaqueteId',
          type: 'any'
        },
      },
      relations: {
        estados: {
          name: 'estados',
          type: 'Estado',
          model: 'Estado',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'bultoId'
        },
        voluntarios: {
          name: 'voluntarios',
          type: 'Voluntario',
          model: 'Voluntario',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'bultoId'
        },
        organizacionDonantes: {
          name: 'organizacionDonantes',
          type: 'OrganizacionDonante',
          model: 'OrganizacionDonante',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'bultoId'
        },
        bultoProductoPaquetes: {
          name: 'bultoProductoPaquetes',
          type: 'BultoProductoPaquete[]',
          model: 'BultoProductoPaquete',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'bultoId'
        },
      }
    }
  }
}
