/* tslint:disable */
import {
  Voluntario,
  Insignia
} from '../index';

declare var Object: any;
export interface InsigniaOtorgadaVoluntarioInterface {
  "fecha_se_otorgo": Date;
  "fecha_perdio"?: Date;
  "id"?: any;
  "voluntarioId"?: any;
  "insigniaId"?: any;
  voluntarios?: Voluntario;
  insignia?: Insignia;
}

export class InsigniaOtorgadaVoluntario implements InsigniaOtorgadaVoluntarioInterface {
  "fecha_se_otorgo": Date;
  "fecha_perdio": Date;
  "id": any;
  "voluntarioId": any;
  "insigniaId": any;
  voluntarios: Voluntario;
  insignia: Insignia;
  constructor(data?: InsigniaOtorgadaVoluntarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `InsigniaOtorgadaVoluntario`.
   */
  public static getModelName() {
    return "InsigniaOtorgadaVoluntario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of InsigniaOtorgadaVoluntario for dynamic purposes.
  **/
  public static factory(data: InsigniaOtorgadaVoluntarioInterface): InsigniaOtorgadaVoluntario{
    return new InsigniaOtorgadaVoluntario(data);
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
      name: 'InsigniaOtorgadaVoluntario',
      plural: 'InsigniaOtorgadaVoluntarios',
      path: 'InsigniaOtorgadaVoluntarios',
      idName: 'id',
      properties: {
        "fecha_se_otorgo": {
          name: 'fecha_se_otorgo',
          type: 'Date'
        },
        "fecha_perdio": {
          name: 'fecha_perdio',
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
        "insigniaId": {
          name: 'insigniaId',
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
          keyTo: 'insigniaOtorgadaVoluntarioId'
        },
        insignia: {
          name: 'insignia',
          type: 'Insignia',
          model: 'Insignia',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'insigniaOtorgadaVoluntarioId'
        },
      }
    }
  }
}
