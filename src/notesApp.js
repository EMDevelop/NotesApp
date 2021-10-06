class NotesApp {
  constructor() {
    this.notes = [
      new Note(
        "Welcome to Eternal Note",
        "The last notes app you will ever need!"
      ),
    ];
  }

  newNote(title, body) {
    this.notes.push(new Note(title, body));
  }

  saveNote(title, body, id) {
    this.notes[id].title = title;
    this.notes[id].body = body;
  }

  getAllNotes() {
    return this.notes;
  }
}
