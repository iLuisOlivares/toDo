    //Importacion clases
    import { Todo, TodoList } from "../class";
    import {tareasLista} from "../index";


    //Referencia al html
    //Query selector para seleccionar una etiqueta existente HTML 
    const divTodoList = document.querySelector('.todo-list');
    const txtInput = document.querySelector('.new-todo');
    const BotonBorrarC = document.querySelector('.clear-completed');
    const ulFilter = document.querySelector('.filters');
    const ButtonFilter = document.querySelectorAll('.filtro');

    //Contador
    const contadorPendientes = document.querySelector('.todo-count strong');

    //fUNCIONES
    export const crearTodoHtml = (todo) => {

        //Se pueden crear bloques de codigo 
        const htmlTodo= `<li class = '${(todo.completado)?'completed':''}' data-id='${todo.codigo}'>
        <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>`;
        //createElement crea una nueva etiqueta HTML 
        const div = document.createElement('div');
        //con el innerHTML se puede integras bloques de codigo a una etiqueta HTML
        div.innerHTML = htmlTodo;
        //append sirve para agregar una etiqueta dentro de otra
        divTodoList.append(div.firstElementChild);

        return div
    }

    




    //Listeners 


    txtInput.addEventListener('keyup',(event) =>{

        if(event.keyCode === 13 && txtInput.value != ''){
            const tarea = new Todo(txtInput.value);
            tareasLista.nuevoTodo(tarea);
            tareasLista.mostrarLista();
            crearTodoHtml(tarea);
            txtInput.value = '';
    
        }
    });


    divTodoList.addEventListener('click',(event) =>{
    //Target hace referencia al elemento del evento, Target.localName al elemento especifico
    const nombreElement= (event.target.localName); //Input, Label, Button
    console.log(nombreElement);
    //.ParentElement hace referencia al padre del elemento(donde se encuentra)
    const todoElement = (event.target.parentElement.parentElement); //div
    //Get attribute nos ayuda a sacar el valor de los atributos HTML(ej data-*)
    const todoId = todoElement.getAttribute('data-id');

    //Includes sirve para determinar si dentro del target se encuentra 
    //un elemento en particular
    if(nombreElement.includes('input')){
        tareasLista.cambiarEstado(todoId);
        //Classlist.toggle lo que hace es agregar una nueva clase al elemento
        //Si el elemento tiene la misma clase que se le indica es decir son iguales devolvera class = ''
        //es decir le quita la clase
        todoElement.classList.toggle('completed');
        console.log(todoElement.classList);
    }else if(nombreElement.includes('button')){
        tareasLista.eliminarTodo(todoId);
        console.log(todoElement);
        //removeChild es para eliminar un elemento que se encuentra dentro de otro elemento
        //a divtodolist(contenedor de las tareas en html) se le remueve el todoDivElement
        //que es igual a un div que almacena una  tarea
        divTodoList.removeChild(todoElement);
    }

    });

   //Listener de filters 
   ulFilter.addEventListener('click', (event)=>{

    const tipoFiltro = event.target.text;
    if(!tipoFiltro){return;}

    ButtonFilter.forEach((element) => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const element of divTodoList.children){
        element.classList.remove('hidden');
        console.log(element.classList);    
        const completado = element.classList.contains('completed');
        switch(tipoFiltro){
                case 'Pendientes':
                    if(completado){
                        element.classList.add('hidden');
                    }
                    break;
                    case 'Completados':
                        if(!completado){
                            element.classList.add('hidden');
                        }
                        break;
                }
    
            }
            
   });

    //Boton "Borrar Completados"
    BotonBorrarC.addEventListener('click', ()=>{
        
        tareasLista.eliminarCompletados();
        for(let i = divTodoList.children.length-1; i >= 0; i--){
            
            //.Children referencia a los elementos que se encuentran dentro de ese contenedor
            const elemento = divTodoList.children[i];
            console.log(elemento);

            //classList.contains devuelve true en caso de pertenecer a la clase asignada
            if(elemento.classList.contains('completed'))
            {
            //Removechild elimina elementos ccontenido en el
             divTodoList.removeChild(elemento);
             console.log('xd');
            }
        }

    });
