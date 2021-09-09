
export class Todo{

    constructor(tarea){

        this.tarea = tarea;
        this.codigo = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }


}