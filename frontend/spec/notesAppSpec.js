/* notesApp created with empty notes array */

describe('Testing the NotesApp Object', () => {
  let noteApp = new NotesApp();

  it('Checks notes initiated with 1 note', () => {
    expect(noteApp.notes.length).isEq(0);
  });

  it('notesApp creates and stores a new note', () => {
    noteApp.newNote('title', 'body');
    expect(noteApp.notes.length).isEq(1);
  });

  it('notesApp returns a list of notes', () => {
    let noteApp1 = new NotesApp();
    noteApp1.newNote('title2', 'body2');
    noteApp1.newNote('title3', 'body3');
    expect(noteApp1.notes.length).isEq(2);
  });

  it('Note values saved correctly', () => {
    /*  Note values saved correctly */
    let noteApp2 = new NotesApp();
    noteApp2.newNote('title2', 'body2');
    noteApp2.newNote('title3', 'body3');
    result = noteApp2.getAllNotes();
    expect(result[0].title).isEq('title2');
    expect(result[0].body).isEq('body2');
  });
});
