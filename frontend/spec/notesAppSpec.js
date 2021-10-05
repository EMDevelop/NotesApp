/* notesApp created with empty notes array */

let noteApp = new NotesApp();
test.expect(noteApp.notes.length).isEq(0);

/* notesApp creates and stores a new note */
noteApp.newNote('title', 'body');
console.log(noteApp);
test.expect(noteApp.notes.length).isEq(1);

/* notesApp returns a list of notes */
// Why define again? (Ed)
noteApp.newNote('title2', 'body2');
