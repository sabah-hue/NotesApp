const fs = require('fs')

///////  ver1
const addNote = (title , body) =>{
    const notes = load()

    const duplicateTitle = notes.filter((note) =>{
        return note.title === title
    })

    if(duplicateTitle.length === 0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    }
    else{
        console.log('Error Duplicate title')
    }
}
//////////////////////////////

const loadStudents = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}
//////////////////////////////
const saveNotes = (notes)=>{
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}