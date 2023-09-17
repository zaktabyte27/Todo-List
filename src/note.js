export class note {
    constructor(name,details){
        this.name = name
        this.details = details
    }
    changeDetails(newDetails){
        this.details = newDetails
    }
    changeName(newName){
        this.name = newName
    }
}
