/* Note can create a note, with relevant attributes */
let note = new Note('title', 'body');

test.expect(note).isInstanceOf(Note);

test.expect(note.title).isEq('title');
test.expect(note.title).isNotEq('anotherTitle');

test.expect(note.body).isEq('body');
test.expect(note.body).isNotEq('bob');
