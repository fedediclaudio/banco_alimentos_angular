/* tslint:disable */
import {
  BultoProductoPaquete
} from '../index';

declare var Object: any;
export interface ProductoInterface {
  "nombre": string;
  "peso": string;
  "codigo_barra": string;
  "id"?: any;
  "bultoProductoPaqueteId"?: any;
  bultoProductoPaquetes?: BultoProductoPaquete[];
}

export class Producto implements ProductoInterface {
  "nombre": string;
  "peso": string;
  "codigo_barra": string;
  "id": any;
  "bultoProductoPaqueteId": any;
  bultoProductoPaquetes: BultoProductoPaquete[];
  constructor(data?: ProductoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Producto`.
   */
  public static getModelName() {
    return "Producto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Producto for dynamic purposes.
  **/
  public static factory(data: ProductoInterface): Producto{
    return new Producto(data);
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
      name: 'Producto',
      plural: 'Productos',
      path: 'Productos',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "peso": {
          name: 'peso',
          type: 'string'
        },
        "codigo_barra": {
          name: 'codigo_barra',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "bultoProductoPaqueteId": {
          name: 'bultoProductoPaqueteId',
          type: 'any'
        },
      },
      relations: {
        bultoProductoPaquetes: {
          name: 'bultoProductoPaquetes',
          type: 'BultoProductoPaquete[]',
          model: 'BultoProductoPaquete',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'productoId'
        },
      }
    }
  }
}
