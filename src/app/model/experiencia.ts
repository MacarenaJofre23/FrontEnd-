export class Experiencia {
    id?: number;
    nombreExperiencia: string;
    descripcionExperiencia: string;
    comienzo:  number;
    finalizacion:number;

    constructor(nombreExperiencia: string , descripcionExperiencia: string, comienzo: number, finalizacion: number){
        this.nombreExperiencia = nombreExperiencia;
        this.descripcionExperiencia = descripcionExperiencia;
        this.comienzo = comienzo;
        this.finalizacion = finalizacion;

    }
}
