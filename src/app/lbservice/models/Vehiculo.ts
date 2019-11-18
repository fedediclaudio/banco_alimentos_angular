/* tslint:disable */

declare var Object: any;
export interface VehiculoInterface {
  "marca": string;
  "modelo": string;
  "patente": string;
  "volumen": Array<any>;
  "distancia_maxima": number;
  "id"?: any;
  "voluntarioId"?: any;
}

export class Vehiculo implements VehiculoInterface {
  "marca": string;
  "modelo": string;
  "patente": string;
  "volumen": Array<any>;
  "distancia_maxima": number;
  "id": any;
  "voluntarioId": any;
  constructor(data?: VehiculoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Vehiculo`.
   */
  public static getModelName() {
    return "Vehiculo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Vehiculo for dynamic purposes.
  **/
  public static factory(data: VehiculoInterface): Vehiculo{
    return new Vehiculo(data);
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
      name: 'Vehiculo',
      plural: 'Vehiculos',
      path: 'Vehiculos',
      idName: 'id',
      properties: {
        "marca": {
          name: 'marca',
          type: 'string'
        },
        "modelo": {
          name: 'modelo',
          type: 'string'
        },
        "patente": {
          name: 'patente',
          type: 'string'
        },
        "volumen": {
          name: 'volumen',
          type: 'Array&lt;any&gt;'
        },
        "distancia_maxima": {
          name: 'distancia_maxima',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
