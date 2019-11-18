/* tslint:disable */
import {
  OrganizacionDonante,
  Insignia
} from '../index';

declare var Object: any;
export interface InsigniaOtorgadaOrgDonanteInterface {
  "fecha_se_otorgo": Date;
  "fecha_perdio"?: Date;
  "id"?: any;
  "organizacionDonanteId"?: any;
  "insigniaId"?: any;
  organizacionDonantes?: OrganizacionDonante;
  insignia?: Insignia;
}

export class InsigniaOtorgadaOrgDonante implements InsigniaOtorgadaOrgDonanteInterface {
  "fecha_se_otorgo": Date;
  "fecha_perdio": Date;
  "id": any;
  "organizacionDonanteId": any;
  "insigniaId": any;
  organizacionDonantes: OrganizacionDonante;
  insignia: Insignia;
  constructor(data?: InsigniaOtorgadaOrgDonanteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `InsigniaOtorgadaOrgDonante`.
   */
  public static getModelName() {
    return "InsigniaOtorgadaOrgDonante";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of InsigniaOtorgadaOrgDonante for dynamic purposes.
  **/
  public static factory(data: InsigniaOtorgadaOrgDonanteInterface): InsigniaOtorgadaOrgDonante{
    return new InsigniaOtorgadaOrgDonante(data);
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
      name: 'InsigniaOtorgadaOrgDonante',
      plural: 'InsigniaOtorgadaOrgDonantes',
      path: 'InsigniaOtorgadaOrgDonantes',
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
        "organizacionDonanteId": {
          name: 'organizacionDonanteId',
          type: 'any'
        },
        "insigniaId": {
          name: 'insigniaId',
          type: 'any'
        },
      },
      relations: {
        organizacionDonantes: {
          name: 'organizacionDonantes',
          type: 'OrganizacionDonante',
          model: 'OrganizacionDonante',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'insigniaOtorgadaOrgDonanteId'
        },
        insignia: {
          name: 'insignia',
          type: 'Insignia',
          model: 'Insignia',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'insigniaOtorgadaOrgDonanteId'
        },
      }
    }
  }
}
