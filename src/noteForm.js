import { note } from "./note"
import { generateNotes } from "./noteLoader"
import { populateNotes, retrieveNotes } from "./storageHandler"
function noteForm(){
    const notes = retrieveNotes()
    const noteForm = document.createElement("form")

    const p = document.createElement("h4")
    p.textContent = "New Note"

    const pName = document.createElement("input")
    pName.placeholder = "Name of to-do note"
    pName.required = true
    pName.type = "text"

    const pDetails = document.createElement("input")
    pDetails.placeholder = "Details"
    pDetails.required = true
    pDetails.type = "text"

    
    const finishBtn = document.createElement("button")
    finishBtn.textContent = "Submit"
    finishBtn.prevent
    finishBtn.addEventListener("click",(e) => {
        e.preventDefault();
        notes.push(new note(pName.value,pDetails.value))
        populateNotes(notes)
        const header = document.querySelector("header")
        header.textContent = "Notes"
        generateNotes()
    })
    noteForm.appendChild(p)
    noteForm.appendChild(pName)
    noteForm.appendChild(pDetails)
    noteForm.appendChild(finishBtn)
    const formbar = document.querySelector(".formBar")
    formbar.appendChild(noteForm)
}

export {noteForm}