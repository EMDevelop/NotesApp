/* notesApp created with empty notes array */

let noteApp = new NotesApp();
test.expect(noteApp.notes.length).isEq(0);

/* notesApp creates and stores a new note */
noteApp.newNote('title', 'body');
console.log(noteApp);
test.expect(noteApp.notes.length).isEq(1);

/* notesApp returns a list of notes */
// Why define again? (Ed)
let noteApp1 = new NotesApp();
noteApp1.newNote('title2', 'body2');
noteApp1.newNote('title3', 'body3');
test.expect(noteApp1.notes.length).isEq(2);

/*  Note values saved correctly */
let noteApp2 = new NotesApp();
noteApp2.newNote('title2', 'body2');
noteApp2.newNote('title3', 'body3');
result = noteApp2.getAllNotes();
test.expect(result[0].title).isEq('title2');
test.expect(result[0].body).isEq('body2');