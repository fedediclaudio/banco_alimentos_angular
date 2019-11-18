/* tslint:disable */
import {
  Paquete
} from '../index';

declare var Object: any;
export interface TipoDeAlimentoInterface {
  "nombre": string;
  "descripcion"?: string;
  "id"?: any;
  "paqueteId"?: any;
  paquetes?: Paquete[];
}

export class TipoDeAlimento implements TipoDeAlimentoInterface {
  "nombre": string;
  "descripcion": string;
  "id": any;
  "paqueteId": any;
  paquetes: Paquete[];
  constructor(data?: TipoDeAlimentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoDeAlimento`.
   */
  public static getModelName() {
    return "TipoDeAlimento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoDeAlimento for dynamic purposes.
  **/
  public static factory(data: TipoDeAlimentoInterface): TipoDeAlimento{
    return new TipoDeAlimento(data);
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
      name: 'TipoDeAlimento',
      plural: 'TipoDeAlimentos',
      path: 'TipoDeAlimentos',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "descripcion": {
          name: 'descripcion',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "paqueteId": {
          name: 'paqueteId',
          type: 'any'
        },
      },
      relations: {
        paquetes: {
          name: 'paquetes',
          type: 'Paquete[]',
          model: 'Paquete',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'tipoDeAlimentoId'
        },
      }
    }
  }
}
