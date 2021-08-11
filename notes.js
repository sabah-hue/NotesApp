const fs = require('fs')

///////  ver1
const addNote = (title , body) =>{
    const notes = loadNotes()

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

const loadNotes = ()=>{
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

////// Delete
const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
    return note.title !== title
    })
    saveNotes(notesToKeep)
    console.log(notesToKeep)
}

////////// Read
const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note)=>{
        return note.title === title
    })

    if(note){
        console.log(note)
        console.log(note.title)
        console.log(note.body)
    }
}

/////// List
const listNote = () =>{
    const notes = loadNotes()
     notes.forEach((note) =>{return console.log(note)})
}

module.exports ={
    addN:addNote,
    removeN:removeNote,
    listN:listNote,
    readN:readNote
}
