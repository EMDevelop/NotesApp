class NotesApp {
  constructor() {
    if (JSON.parse(localStorage.length > 0)) {
      this.notes = JSON.parse(localStorage.getItem("notes"));
    } else {
      this.notes = [
        new Note(
          "Welcome to Eternal Note",
          "The last notes app you will ever need!"
        ),
      ];
    }
  }

  newNote(title, body) {
    this.notes.push(new Note(title, body));
  }

  saveNote(title, body, id) {
    this.notes[id].title = title;
    this.notes[id].body = body;
    this.updateNotes(); // ? Saving note not implemented on UI? This line not running.
  }

  getAllNotes() {
    return this.notes;
  }

  // * Syncs localStorage with notes array, called on save and delete
  updateNotes() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
}
