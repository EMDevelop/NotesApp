/* Note can create a note, with relevant attributes */
describe('Testing the Note Object', () => {
  let note = new Note('title', 'body');

  it('Check instance is created', () => {
    expect(note).isInstanceOf(Note);
  });
  it('Checks the Title is correctly constructed', () => {
    expect(note.title).isEq('title');
  });

  it('Checks the Title is correctly constructed', () => {
    expect(note.title).isNotEq('anotherTitle');
  });

  it('Checks the Body is correctly constructed', () => {
    expect(note.body).isEq('body');
  });

  it('Checks the Body is correctly constructed', () => {
    expect(note.body).isNotEq('bob');
  });
});
