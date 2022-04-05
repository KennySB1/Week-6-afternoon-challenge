(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model) {
          this.model = model;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        getModel() {
          return this.model;
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const div = document.createElement("div");
            const p = document.createElement("p");
            p.innerText = note;
            div.className = "note";
            div.appendChild(p);
            document.querySelector("#main-container").append(div);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  console.log("The notes app is running");
  var NotesModel = require_notesModel();
  var notesModel = new NotesModel();
  notesModel.addNote("testing");
  console.log(notesModel.getNotes());
  var NotesView = require_notesView();
  var notesView = new NotesView(notesModel);
  notesView.displayNotes();
})();
