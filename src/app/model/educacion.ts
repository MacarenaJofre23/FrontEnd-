export class Educacion {
    id?: number;
    nombreEducacion: string;
    descripcionEducacion: string;
    comienzo:  number;
    finalizacion:number;

    constructor(nombreEducacion: string , descripcionEducacion: string, comienzo: number, finalizacion: number){
        this.nombreEducacion = nombreEducacion;
        this.descripcionEducacion = descripcionEducacion;
        this.comienzo = comienzo;
        this.finalizacion = finalizacion;

    }
}
