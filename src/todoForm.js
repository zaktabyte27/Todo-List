import { generateTodos } from "./pageLoad"
import { populateProjects, retrieveProjects } from "./storageHandler"
import { todo } from "./todo"
import { tr } from "date-fns/locale"

function todoForm(){
    const projects = retrieveProjects()
    const formContainer = document.createElement("div")
    formContainer.style.display = "flex"
    formContainer.style.flexDirection = "column"
    const todoForm = document.createElement("form")
    todoForm.style.display = "flex"
    todoForm.style.flexDirection = "row"
    const p = document.createElement("h4")
    p.textContent = "New To-Do"

    const pName = document.createElement("input")
    pName.placeholder = "Name of to-do note"
    pName.required = true
    pName.type = "text"

    const pDetails = document.createElement("input")
    pDetails.placeholder = "Details"
    pDetails.required = true
    pDetails.type = "text"

    const pDate = document.createElement("input")
    pDate.required =  true
    pDate.type = "date"

    const pPriority = document.createElement("select")
    const pPriorityText = document.createElement("p")
    pPriority.required = true
    pPriorityText.textContent = "Priority"
    pPriority.options[pPriority.options.length] = new Option('Low', 'Value1');
    pPriority.options[pPriority.options.length] = new Option('Medium', 'Value2');
    pPriority.options[pPriority.options.length] = new Option('High', 'Value3');

    const pProjectBelongsTo = document.createElement("select")
    pProjectBelongsTo.required = true
    const pProjectText = document.createElement("p")
    pProjectText.textContent = "Project"

    const pContainer = document.querySelector(".pContainer")
    Array.from(pContainer.children).forEach((node)=>pProjectBelongsTo.options[pProjectBelongsTo.options.length] = new Option(node.textContent, 'Value1'));
    const finishBtn = document.createElement("button")
    finishBtn.textContent = "Submit"
    finishBtn.addEventListener("click",(e) => {
        e.preventDefault()
        for (const project of projects){

            if (project.name == pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text){
                console.log(project)
                project.todos.push(new todo(pName.value,pDetails.value,pDate.value,pPriority.options[pPriority.selectedIndex].text,pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text))
                generateTodos(project.todos)
                break
            }
        }
        populateProjects(projects)
    })
    formContainer.appendChild(p)
    todoForm.appendChild(pName)
    todoForm.appendChild(pDetails)
    todoForm.appendChild(pDate)
    todoForm.appendChild(pPriorityText)
    todoForm.appendChild(pPriority)
    todoForm.appendChild(pProjectText)
    todoForm.appendChild(pProjectBelongsTo)
    todoForm.appendChild(finishBtn)
    const formbar = document.querySelector(".formBar")
    formContainer.appendChild(todoForm)
    formbar.appendChild(formContainer)
}

export {todoForm}