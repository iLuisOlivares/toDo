    import './styles.css';
    import { Todo, TodoList} from './class';
    import { crearTodoHtml } from './js/componentes';

    //Inicialziacion del vector donde se guardan las tareas 
    export const tareasLista = new TodoList();


    // tareasLista.todos.forEach(element => crearTodoHtml(element));
    //Protip: Cuando hay un calckback de una funcion que solo tiene un argumento
    //Se puede escribir directamente la funcion
    tareasLista.todos.forEach(crearTodoHtml);
    tareasLista.todos.forEach(element => console.log(element));
    



    // //local/session storage
    // localStorage.setItem('mi-key','123ABC');
    // sessionStorage.setItem('mi-key','123ABC');


    // setTimeout(()=>{
    //     //Remover la key
    //     localStorage.removeItem('toDo');
    // },1500);



