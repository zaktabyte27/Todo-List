export class todo {
    constructor(name,details,date,priority,projectBelongsTo){
        this.name = name
        this.details = details
        this.date = date
        this.priority = priority
        this.completed = false
        this.projectBelongsTo = projectBelongsTo
    }
    setCompleted(){
        if (this.completed){
            this.completed = false
        } else {
            this.completed = true
        }
    }
    changeDate(newDate){
        this.date = newDate
    }
    changeDetails(newDetails){
        this.details = newDetails
    }
    changeName(newName){
        this.name = newName
    }
    changeProjectBelongsTo(newProject){
        this.projectBelongsTo = newProject
    }
    changePriority(newPriority){
        this.priority = newPriority
    }
}
