console.log('The notes app is running')

const NotesModel = require('./notesModel')
const notesModel = new NotesModel()
notesModel.addNote('testing')
console.log(notesModel.getNotes())

const NotesView = require('./notesView')
const notesView = new NotesView(notesModel)
notesView.displayNotes()