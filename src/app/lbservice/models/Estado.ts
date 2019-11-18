/* tslint:disable */
import {
  Bulto,
  Envio
} from '../index';

declare var Object: any;
export interface EstadoInterface {
  "nombre": string;
  "id"?: any;
  "bultoId"?: any;
  "envioId"?: any;
  bultos?: Bulto[];
  envios?: Envio[];
}

export class Estado implements EstadoInterface {
  "nombre": string;
  "id": any;
  "bultoId": any;
  "envioId": any;
  bultos: Bulto[];
  envios: Envio[];
  constructor(data?: EstadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Estado`.
   */
  public static getModelName() {
    return "Estado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Estado for dynamic purposes.
  **/
  public static factory(data: EstadoInterface): Estado{
    return new Estado(data);
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
      name: 'Estado',
      plural: 'Estados',
      path: 'Estados',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "bultoId": {
          name: 'bultoId',
          type: 'any'
        },
        "envioId": {
          name: 'envioId',
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
          keyTo: 'estadoId'
        },
        envios: {
          name: 'envios',
          type: 'Envio[]',
          model: 'Envio',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'estadoId'
        },
      }
    }
  }
}
