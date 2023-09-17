import { populateNotes, retrieveNotes } from "./storageHandler"

export function generateNotes(){
    console.log("called")
    const page = document.querySelector(".bigContainer")
    const notes = retrieveNotes()
    page.replaceChildren()
    for (const note of notes){
        console.log(note)
        const container = document.createElement("div")
        container.classList.add("note")
        container.classList.add(note.name)
        const title = document.createElement("h4")
        title.textContent = note.name
        const details = document.createElement("p")
        details.textContent = note.details            
        const removeBtn = document.createElement("button")
        removeBtn.textContent = "X"
        removeBtn.classList.add("remove")
        removeBtn.addEventListener("click",(e)=>{
            for (const note of notes){
                if (e.target.parentNode.classList[1] == note.name){
                    const index = notes.indexOf(note)
                    notes.splice(index,1)
                    e.target.parentNode.remove()
                }
                populateNotes(notes)
            }
        })
        container.appendChild(title)
        container.appendChild(details)
        container.appendChild(removeBtn)
        page.appendChild(container)
    }
}