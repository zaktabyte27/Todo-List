import { todo } from "./todo"
import { createBoard } from "."
import { tr } from "date-fns/locale"
import { populateProjects, retrieveProjects } from "./storageHandler"
import { generateTodos } from "./pageLoad"

function editForm(formToEdit){
    createBoard()
    const projects = retrieveProjects()
    const formContainer = document.createElement("div")
    formContainer.style.display = "flex"
    formContainer.style.flexDirection = "column"
    const todoForm = document.createElement("form")
    todoForm.style.display = "flex"
    todoForm.style.flexDirection = "row"
    const p = document.createElement("h4")
    p.textContent = "Edit to-do item"

    const pName = document.createElement("input")
    pName.value = formToEdit.name
    pName.required = true
    pName.type = "text"

    const pDetails = document.createElement("input")
    pDetails.value = formToEdit.details
    pDetails.required = true
    pDetails.type = "text"

    const pDate = document.createElement("input")
    pDate.required =  true
    pDate.value = formToEdit.date
    pDate.type = "date"

    const pPriority = document.createElement("select")
    const pPriorityText = document.createElement("p")
    pPriority.required = true
    pPriority.options[pPriority.options.length] = new Option('', 'Value1');
    pPriority.options[pPriority.options.length] = new Option('Low', 'Value1');
    pPriority.options[pPriority.options.length] = new Option('Medium', 'Value2');
    pPriority.options[pPriority.options.length] = new Option('High', 'Value3');
    pPriority.options[pPriority.selectedIndex].text = formToEdit.priority
    const pProjectBelongsTo = document.createElement("select")
    pProjectBelongsTo.required = true
    const pProjectText = document.createElement("p")
    pProjectText.textContent = "Project"
    const pContainer = document.querySelector(".pContainer")
    Array.from(pContainer.children).forEach((node)=>pProjectBelongsTo.options[pProjectBelongsTo.options.length] = new Option("", 'Value1'));
    Array.from(pContainer.children).forEach((node)=>pProjectBelongsTo.options[pProjectBelongsTo.options.length] = new Option(node.textContent, 'Value1'));
    pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text = formToEdit.projectBelongsTo
    const finishBtn = document.createElement("button")
    finishBtn.textContent = "Submit"
    finishBtn.addEventListener("click",(e) => {
        e.preventDefault()
        for (const project of projects){
            console.log(formToEdit.projectBelongsTo)
            if (project.name == formToEdit.projectBelongsTo){
                console.log("workHere")
                const index = project.todos.indexOf(formToEdit)
                project.todos.splice(index, 1)
                break
            }
        }
        for (const project of projects){
            if (project.name == pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text){
                console.log("here")
                project.todos.push(new todo(pName.value,pDetails.value,pDate.value,pPriority.options[pPriority.selectedIndex].text,pProjectBelongsTo.options[pProjectBelongsTo.selectedIndex].text))
                generateTodos(project.todos)

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

export {editForm}