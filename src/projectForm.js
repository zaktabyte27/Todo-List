import { generateTodos } from "./pageLoad"
import { projectHandler } from "./projectHandlers"
import {retrieveProjects,populateProjects} from "./storageHandler" 

function projectForm(){
    const projectForm = document.createElement("form")
    const projects = retrieveProjects()
    const p = document.createElement("h4")
    p.textContent = "New Project"

    const pName = document.createElement("input")
    pName.placeholder = "Name of project"
    pName.required = true
    pName.type = "text"

    const finishBtn = document.createElement("button")
    finishBtn.textContent = "Submit"
    finishBtn.addEventListener("click",(e) => {
        e.preventDefault()
        const pContainer = document.querySelector(".pContainer")
        const button = document.createElement("button")
        button.textContent = pName.value
        new projectHandler(pName.value)
        button.addEventListener("click",(e)=>{
            e.preventDefault()
            projects = retrieveProjects()
            for (const project of projects){
                if (e.target.textContent == project.name){
                    const header = document.querySelector("header")
                    header.textContent = "To-Do List: "+project.name
                    generateTodos(project.todos)
                    break
                }
            }
        })
        pContainer.appendChild(button)
        projects.push(new projectHandler(pName.value))
        populateProjects(projects)
    })
    projectForm.appendChild(p)
    projectForm.appendChild(pName)
    projectForm.appendChild(finishBtn)
    const formbar = document.querySelector(".formBar")
    formbar.appendChild(projectForm)
}

export {projectForm}