/* tslint:disable */

declare var Object: any;
export interface ContactoInterface {
  "nombre": string;
  "apellido": string;
  "dni": string;
  "email": string;
  "telefono": string;
  "id"?: any;
  "organizacionDonanteId"?: any;
}

export class Contacto implements ContactoInterface {
  "nombre": string;
  "apellido": string;
  "dni": string;
  "email": string;
  "telefono": string;
  "id": any;
  "organizacionDonanteId": any;
  constructor(data?: ContactoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contacto`.
   */
  public static getModelName() {
    return "Contacto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contacto for dynamic purposes.
  **/
  public static factory(data: ContactoInterface): Contacto{
    return new Contacto(data);
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
      name: 'Contacto',
      plural: 'Contactos',
      path: 'Contactos',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "apellido": {
          name: 'apellido',
          type: 'string'
        },
        "dni": {
          name: 'dni',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "telefono": {
          name: 'telefono',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "organizacionDonanteId": {
          name: 'organizacionDonanteId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
