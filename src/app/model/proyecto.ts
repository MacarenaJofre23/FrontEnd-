export class Proyecto {
    id: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    comienzo: number;
    finalizacion:number;

    constructor(nombreProyecto: string , descripcionProyecto: string, comienzo: number, finalizacion: number){
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.comienzo = comienzo;
        this.finalizacion = finalizacion;

    }
}
