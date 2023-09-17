import { editForm } from "./editForm"

export class projectHandler{
    constructor(name){
        this.name = name
        this.todos = []
    }
    addTodo(newTodo){
        this.todos.push(newTodo)
        this.generateTodos()
    }
    removeTodo(project){
        const index = this.todos.indexOf(project)
        this.todos.splice(index, 1)
    }
}