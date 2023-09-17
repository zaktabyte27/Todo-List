import { todoForm } from "./todoForm"
import { projectForm } from "./projectForm"
import { noteForm } from "./noteForm"
import { projectHandler } from "./projectHandlers"
import { populateNotes, populateProjects, retrieveProjects } from "./storageHandler"
import { generateTodos } from "./pageLoad"
import { generateNotes } from "./noteLoader"

//finish data store on the website
const addBtn = document.querySelector(".add")
const hider = document.querySelector(".hider")
const projectHandle = new projectHandler("Example")
const noteBtn = document.querySelector(".notes")
const header = document.querySelector("header")
header.textContent = "To-Do List: Example"

if (localStorage.getItem("projects") === null){
    populateProjects([projectHandle])
}

if (localStorage.getItem("notes") === null){
    populateNotes([])
}

const projects = retrieveProjects("projects")
generateTodos(projects[0].todos)

for (const project of projects){
    const pContainer = document.querySelector(".pContainer")
    const button = document.createElement("button")
    button.textContent = project.name
    button.addEventListener("click",(e)=>{
        const projects = retrieveProjects("projects")
        e.preventDefault()
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
}

export { projects }

export function createBoard(){
    const body = document.querySelector("body")
    hider.classList.add("hiderOn")
    const board = document.createElement("div")
    board.classList.add("board")
    const sidebar = document.createElement("div")
    sidebar.classList.add("boardSideBar")
    const noteBtn = document.createElement("button")
    noteBtn.textContent = "New Note"
    noteBtn.addEventListener("click",noteForm)
    const projectBtn = document.createElement("button")
    projectBtn.addEventListener("click",projectForm)
    projectBtn.textContent = "New Project"
    const todoBtn = document.createElement("button")
    todoBtn.textContent = "New To Do"
    todoBtn.addEventListener("click",todoForm)
    const formBar = document.createElement("div")
    formBar.classList.add("formBar")
    sidebar.appendChild(noteBtn)
    sidebar.appendChild(projectBtn)
    sidebar.appendChild(todoBtn)
    board.appendChild(sidebar)
    board.appendChild(formBar)
    body.appendChild(board)
    
}

function hiderOff(){
    hider.classList.remove("hiderOn")
    document.querySelector(".board").remove()
}

hider.addEventListener("click",hiderOff)
addBtn.addEventListener("click",createBoard)
noteBtn.addEventListener("click",(e) => {
    header.textContent = "Notes"
    e.preventDefault()
    generateNotes()
})

export {projectHandle}
