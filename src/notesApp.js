class NotesApp {
  constructor() {
    this.notes = [];
  }

  newNote(title, body) {
    this.notes.push(new Note(title, body));
  }
}
