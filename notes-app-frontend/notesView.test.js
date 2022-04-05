 /**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

let notesView;
let notesModel;

beforeEach(() => {
  notesModel = new NotesModel();
  notesView = new NotesView(notesModel);
});

describe("notesView", () => {

  it("starts with a list of empty notes" , () => {
    expect(notesView.getModel().getNotes()).toEqual([])
  });

  it("adds a note from notesView", () => {
    notesView.getModel().addNote("HELLO");
    expect(notesView.getModel().getNotes()).toEqual(["HELLO"])
  });

  it("displays the stored notes", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    notesModel.addNote("HELLO");
    notesModel.addNote("BYE");
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });


  
})

