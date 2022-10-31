export class persona{

    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    imgPerfil: string;
    titulo: string;

    constructor(nombre: string, apellido: string, descripcion: string, imgPerfil: string, titulo: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.imgPerfil = imgPerfil;
        this.titulo = titulo;
    }
}
