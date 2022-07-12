import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        this.loadFromLocalStorage();
        //this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.saveToLocalStorage();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveToLocalStorage();
    }

    completedTodo(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado
                break;
            }
        }
        this.saveToLocalStorage();
    }

    deleteCompleted() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadFromLocalStorage() {
        this.todos = localStorage.getItem('todo')
            ? JSON.parse(localStorage.getItem('todo'))
            : [];
        this.todos = this.todos.map( Todo.fromJson );
    }
}