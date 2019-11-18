/* tslint:disable */

declare var Object: any;
export interface PersonaDeContactoInterface {
  "nombre": string;
  "apellido": string;
  "dni": string;
  "email": string;
  "telefono_celular": string;
  "id"?: any;
}

export class PersonaDeContacto implements PersonaDeContactoInterface {
  "nombre": string;
  "apellido": string;
  "dni": string;
  "email": string;
  "telefono_celular": string;
  "id": any;
  constructor(data?: PersonaDeContactoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PersonaDeContacto`.
   */
  public static getModelName() {
    return "PersonaDeContacto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PersonaDeContacto for dynamic purposes.
  **/
  public static factory(data: PersonaDeContactoInterface): PersonaDeContacto{
    return new PersonaDeContacto(data);
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
      name: 'PersonaDeContacto',
      plural: 'PersonaDeContactos',
      path: 'PersonaDeContactos',
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
        "telefono_celular": {
          name: 'telefono_celular',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
