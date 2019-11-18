/* tslint:disable */
import {
  Voluntario
} from '../index';

declare var Object: any;
export interface CategoriaVoluntarioInterface {
  "nombre": string;
  "id"?: any;
  "voluntarioId"?: any;
  voluntarios?: Voluntario[];
}

export class CategoriaVoluntario implements CategoriaVoluntarioInterface {
  "nombre": string;
  "id": any;
  "voluntarioId": any;
  voluntarios: Voluntario[];
  constructor(data?: CategoriaVoluntarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CategoriaVoluntario`.
   */
  public static getModelName() {
    return "CategoriaVoluntario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CategoriaVoluntario for dynamic purposes.
  **/
  public static factory(data: CategoriaVoluntarioInterface): CategoriaVoluntario{
    return new CategoriaVoluntario(data);
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
      name: 'CategoriaVoluntario',
      plural: 'CategoriaVoluntarios',
      path: 'CategoriaVoluntarios',
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
        "voluntarioId": {
          name: 'voluntarioId',
          type: 'any'
        },
      },
      relations: {
        voluntarios: {
          name: 'voluntarios',
          type: 'Voluntario[]',
          model: 'Voluntario',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'categoriaVoluntarioId'
        },
      }
    }
  }
}
