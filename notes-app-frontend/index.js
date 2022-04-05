console.log('The notes app is running')
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')
const notesModel = new NotesModel()
// notesModel.addNote('testing')
console.log(notesModel.getNotes())


const notesView = new NotesView(notesModel)
notesView.displayNotes()