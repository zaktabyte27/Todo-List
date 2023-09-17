
export function populateProjects(projects){
    localStorage.setItem("projects",JSON.stringify(projects))
}

export function retrieveProjects(){
    return JSON.parse(localStorage.getItem("projects"))
}

export function populateNotes(notes){
    localStorage.setItem("notes",JSON.stringify(notes))
}

export function retrieveNotes(){
    return JSON.parse(localStorage.getItem("notes"))
}
