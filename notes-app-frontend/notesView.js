class NotesView{

  constructor(model){
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container")
  }

  getModel(){
    return this.model
  }

  displayNotes(){
    const notes = this.model.getNotes();
    notes.forEach(note => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.innerText = note;
      div.className = "note";
      div.appendChild(p);
      document.querySelector("#main-container").append(div)
      // this.mainContainerEl.appendChild(div);
    });
  };
}

module.exports = NotesView;