export class TodoList {

    constructor(){

        this.getLocalstorage();
    }

    nuevoTodo(tarea){

        this.todos.push(tarea);
        this.setLocalstorage();

    }

    eliminarTodo(id){

        this.todos = this.todos.filter((tarea) => tarea.codigo != id);
        this.setLocalstorage();
        
    }

    cambiarEstado(id){
        for(const todo of this.todos){
            if(id == todo.codigo){
                todo.completado = !todo.completado;
                this.setLocalstorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        //tarea es un callback de this.todos es decir es uan fucnion que entra como un parametro
        //Filter guarda un array nuevo en el que las condiciones para hacer el filtro sean verdaderas
        //Es decir devuelva true
        this.todos = this.todos.filter((tarea) => tarea.completado==false);
        this.setLocalstorage();
        
    }

    mostrarLista(){
        console.log(this.todos);
        return this.todos.length;
    }

    setLocalstorage(){
    //Json.stringify sirve para volver un Objeto a un string que 
    //se guarda en un archivo JSON
    localStorage.setItem('toDo', JSON.stringify(this.todos));

    }

    getLocalstorage(){
     //JSON.parse() regresar un archivo JSON a objeto
     this.todos = (localStorage.getItem('toDo'))
     ?JSON.parse( localStorage.getItem('toDo'))
     : [];
     console.log(this.todos);
    }
}