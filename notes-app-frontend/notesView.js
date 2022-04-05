class NotesView{

  constructor(model){
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container")
    this.addButton = document.querySelector('#add-button')
    this.addButton.addEventListener('click', () => {
      this.displayNotes()
    })
  }

  getModel(){
    return this.model
  }

  displayNotes(){
    const inputField = document.querySelector('#message-input').value
    this.model.addNote(inputField)
    const notes = this.model.getNotes();
    const note = notes[notes.length-1]
      const div = document.createElement("div");
      div.innerText = note;
      div.classList.add("note");
      document.querySelector("#main-container").append(div)
  };
}

module.exports = NotesView;