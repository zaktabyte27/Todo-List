import { projects } from "."
import { populateProjects, retrieveProjects } from "./storageHandler"
import { editForm } from "./editForm"
export function generateTodos(todos){
    const page = document.querySelector(".bigContainer")
    page.replaceChildren()
    for (const todo of todos){
        const container = document.createElement("div")
        container.classList.add("todo")
        container.classList.add(todo.name)
        const title = document.createElement("h4")
        title.textContent = todo.name
        const details = document.createElement("p")
        details.textContent = todo.details
        const date = document.createElement("p")
        date.textContent = todo.date
        const priority = document.createElement("p")
        priority.textContent = todo.priority
        const project = document.createElement("p")
        project.textContent = todo.project
        const finished = document.createElement("p")
        finished.textContent = "Completed"
        const finishBox = document.createElement("input")
        finishBox.type = "checkbox"
        finishBox.checked = todo.completed
        finishBox.style.width = "50px"
        finished.style.fontSize = "0.5em"
        finishBox.style.height = "50px"
        finishBox.addEventListener("click",(e)=>{
            const projects = retrieveProjects()
            for (const project of projects){
                if (project.name == todo.projectBelongsTo){
                    for (const todo of todos){
                        if (e.target.parentNode.firstChild.textContent == todo.name){
                            if (todo.completed==true){
                                project.todos[todos.indexOf(todo)].completed = false
                            } else {
                                project.todos[todos.indexOf(todo)].completed = true
                            }
                        populateProjects(projects)
                        }
                    }
                }
            }
        })
        const removeBtn = document.createElement("button")
        removeBtn.textContent = "X"
        removeBtn.classList.add("remove")
        removeBtn.addEventListener("click",(e)=>{
            const projects = retrieveProjects()
            for (const project of projects){
                if (project.name == todo.projectBelongsTo){
                    for (const todo of todos){
                        if (e.target.parentNode.classList[1] == todo.name){
                            e.target.parentNode.remove()
                            console.log(project.todos)
                            project.todos.splice(project.todos.indexOf(todo),1)
                        }
                        populateProjects(projects)
                    }
                }
            }
        })
        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit details"
        editBtn.classList.add("edit")
        editBtn.addEventListener("click",(e)=>{
            for (const todo of todos){
                if (e.target.parentNode.firstChild.textContent == todo.name){
                    editForm(todo)
                }
            } 
        })

        container.appendChild(title)
        container.appendChild(details)
        container.appendChild(date)
        container.appendChild(priority)
        container.appendChild(project)
        container.appendChild(finished)
        container.appendChild(finishBox)
        container.appendChild(removeBtn)
        container.appendChild(editBtn)
        page.appendChild(container)
    }
}
