/* tslint:disable */
import {
  InsigniaOtorgadaVoluntario,
  InsigniaOtorgadaOrgDonante
} from '../index';

declare var Object: any;
export interface InsigniaInterface {
  "nombre": string;
  "descripcion": string;
  "id"?: any;
  "insigniaOtorgadaVoluntarioId"?: any;
  "insigniaOtorgadaOrgDonanteId"?: any;
  insigniaOtorgadaVoluntarios?: InsigniaOtorgadaVoluntario[];
  insigniaOtorgadaOrgDonantes?: InsigniaOtorgadaOrgDonante[];
}

export class Insignia implements InsigniaInterface {
  "nombre": string;
  "descripcion": string;
  "id": any;
  "insigniaOtorgadaVoluntarioId": any;
  "insigniaOtorgadaOrgDonanteId": any;
  insigniaOtorgadaVoluntarios: InsigniaOtorgadaVoluntario[];
  insigniaOtorgadaOrgDonantes: InsigniaOtorgadaOrgDonante[];
  constructor(data?: InsigniaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Insignia`.
   */
  public static getModelName() {
    return "Insignia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Insignia for dynamic purposes.
  **/
  public static factory(data: InsigniaInterface): Insignia{
    return new Insignia(data);
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
      name: 'Insignia',
      plural: 'Insignia',
      path: 'Insignia',
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
        "insigniaOtorgadaVoluntarioId": {
          name: 'insigniaOtorgadaVoluntarioId',
          type: 'any'
        },
        "insigniaOtorgadaOrgDonanteId": {
          name: 'insigniaOtorgadaOrgDonanteId',
          type: 'any'
        },
      },
      relations: {
        insigniaOtorgadaVoluntarios: {
          name: 'insigniaOtorgadaVoluntarios',
          type: 'InsigniaOtorgadaVoluntario[]',
          model: 'InsigniaOtorgadaVoluntario',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'insigniaId'
        },
        insigniaOtorgadaOrgDonantes: {
          name: 'insigniaOtorgadaOrgDonantes',
          type: 'InsigniaOtorgadaOrgDonante[]',
          model: 'InsigniaOtorgadaOrgDonante',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'insigniaId'
        },
      }
    }
  }
}
