
export class OrganizacionDonante {

    razonSocial:String;
    cuil:String;
    direccion:String;
    direccionCoordenadaLong: Number;
    direccionCoordenadaLat: Number;
    puntaje:Number;

    constructor(razonSocial:String, cuil:String, direccion:String, puntaje:Number = 0 ) {
        this.razonSocial = razonSocial;
        this.cuil = cuil;
        this.direccion = direccion;
        this.puntaje = puntaje;
    }
}