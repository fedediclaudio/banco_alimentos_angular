/* tslint:disable */
import {
  TipoDeAlimento,
  BultoProductoPaquete,
  Envio
} from '../index';

declare var Object: any;
export interface PaqueteInterface {
  "codigo"?: string;
  "fecha_vencimiento": string;
  "ubicacion": string;
  "peso": number;
  "id"?: any;
  "tipoDeAlimentoId"?: any;
  "bultoProductoPaqueteId"?: any;
  "envioId"?: any;
  tipoDeAlimentos?: TipoDeAlimento;
  bultoProductoPaquetes?: BultoProductoPaquete[];
  envios?: Envio;
}

export class Paquete implements PaqueteInterface {
  "codigo": string;
  "fecha_vencimiento": string;
  "ubicacion": string;
  "peso": number;
  "id": any;
  "tipoDeAlimentoId": any;
  "bultoProductoPaqueteId": any;
  "envioId": any;
  tipoDeAlimentos: TipoDeAlimento;
  bultoProductoPaquetes: BultoProductoPaquete[];
  envios: Envio;
  constructor(data?: PaqueteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Paquete`.
   */
  public static getModelName() {
    return "Paquete";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Paquete for dynamic purposes.
  **/
  public static factory(data: PaqueteInterface): Paquete{
    return new Paquete(data);
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
      name: 'Paquete',
      plural: 'Paquetes',
      path: 'Paquetes',
      idName: 'id',
      properties: {
        "codigo": {
          name: 'codigo',
          type: 'string'
        },
        "fecha_vencimiento": {
          name: 'fecha_vencimiento',
          type: 'string'
        },
        "ubicacion": {
          name: 'ubicacion',
          type: 'string'
        },
        "peso": {
          name: 'peso',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "tipoDeAlimentoId": {
          name: 'tipoDeAlimentoId',
          type: 'any'
        },
        "bultoProductoPaqueteId": {
          name: 'bultoProductoPaqueteId',
          type: 'any'
        },
        "envioId": {
          name: 'envioId',
          type: 'any'
        },
      },
      relations: {
        tipoDeAlimentos: {
          name: 'tipoDeAlimentos',
          type: 'TipoDeAlimento',
          model: 'TipoDeAlimento',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'paqueteId'
        },
        bultoProductoPaquetes: {
          name: 'bultoProductoPaquetes',
          type: 'BultoProductoPaquete[]',
          model: 'BultoProductoPaquete',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paqueteId'
        },
        envios: {
          name: 'envios',
          type: 'Envio',
          model: 'Envio',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'paqueteId'
        },
      }
    }
  }
}
