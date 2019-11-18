/* tslint:disable */
import {
  Voluntario,
  Estado,
  Paquete,
  OrganizacionBeneficiaria
} from '../index';

declare var Object: any;
export interface EnvioInterface {
  "descripcion": string;
  "peso": number;
  "volumen": Array<any>;
  "fecha_maxima": Date;
  "fecha_traslado"?: Date;
  "comentario_traslado"?: string;
  "fecha_asignacion"?: Date;
  "id"?: any;
  "organizacionBeneficiariaId"?: any;
  "voluntarioId"?: any;
  "estadoId"?: any;
  "paqueteId"?: any;
  voluntarios?: Voluntario;
  estados?: Estado;
  paquetes?: Paquete[];
  organizacionBeneficiaria?: OrganizacionBeneficiaria;
}

export class Envio implements EnvioInterface {
  "descripcion": string;
  "peso": number;
  "volumen": Array<any>;
  "fecha_maxima": Date;
  "fecha_traslado": Date;
  "comentario_traslado": string;
  "fecha_asignacion": Date;
  "id": any;
  "organizacionBeneficiariaId": any;
  "voluntarioId": any;
  "estadoId": any;
  "paqueteId": any;
  voluntarios: Voluntario;
  estados: Estado;
  paquetes: Paquete[];
  organizacionBeneficiaria: OrganizacionBeneficiaria;
  constructor(data?: EnvioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Envio`.
   */
  public static getModelName() {
    return "Envio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Envio for dynamic purposes.
  **/
  public static factory(data: EnvioInterface): Envio{
    return new Envio(data);
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
      name: 'Envio',
      plural: 'Envios',
      path: 'Envios',
      idName: 'id',
      properties: {
        "descripcion": {
          name: 'descripcion',
          type: 'string'
        },
        "peso": {
          name: 'peso',
          type: 'number'
        },
        "volumen": {
          name: 'volumen',
          type: 'Array&lt;any&gt;'
        },
        "fecha_maxima": {
          name: 'fecha_maxima',
          type: 'Date'
        },
        "fecha_traslado": {
          name: 'fecha_traslado',
          type: 'Date'
        },
        "comentario_traslado": {
          name: 'comentario_traslado',
          type: 'string'
        },
        "fecha_asignacion": {
          name: 'fecha_asignacion',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "organizacionBeneficiariaId": {
          name: 'organizacionBeneficiariaId',
          type: 'any'
        },
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
        "estadoId": {
          name: 'estadoId',
          type: 'any'
        },
        "paqueteId": {
          name: 'paqueteId',
          type: 'any'
        },
      },
      relations: {
        voluntarios: {
          name: 'voluntarios',
          type: 'Voluntario',
          model: 'Voluntario',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'envioId'
        },
        estados: {
          name: 'estados',
          type: 'Estado',
          model: 'Estado',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'envioId'
        },
        paquetes: {
          name: 'paquetes',
          type: 'Paquete[]',
          model: 'Paquete',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'envioId'
        },
        organizacionBeneficiaria: {
          name: 'organizacionBeneficiaria',
          type: 'OrganizacionBeneficiaria',
          model: 'OrganizacionBeneficiaria',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'envioId'
        },
      }
    }
  }
}
