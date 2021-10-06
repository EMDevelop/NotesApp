document.addEventListener('DOMContentLoaded', () => {
  // Creating Note Instance
  const notesApp = new NotesApp();

  // Creating a Fake Note
  // notesApp.newNote(
  //   "test testy test test test",
  //   "This is the last notes app you will ever need!"
  // );
  // welcome note

  // Fetching notes

  // Updating Screen

  const preview = document.getElementById('preview');
  const noteTitle = document.getElementById('note-title');
  const noteBody = document.getElementById('note-body');

  const listNotesOnScreen = () => {
    // Delete existing notes
    while (preview.hasChildNodes()) {
      preview.removeChild(preview.lastChild);
    }

    const result = notesApp.getAllNotes();
    result.forEach((currentItem, index) => {
      preview.insertAdjacentHTML(
        'beforeend',
        `
              <div id="prev${index}" class="preview-card">
                <div class="preview-title">
                  <!-- need to populate dynamically in DOM -->
                  <p>${currentItem.title}</p>
                </div>
                <div class="preview-delete-button">
                  <input type="submit" value="Delete" />
                </div>
              </div> `
      );
      noteTitle.value = currentItem.title;
      noteBody.value = currentItem.body;
    });
  };

  listNotesOnScreen();

  // Create Event Listners
  // thing = document
  //   .getElementsByClassName("preview-card")
  //   .addEventListener("click", (e) => {
  //     console.log("clicked");
  //     console.log(e);
  //   });

  // Multiple
  // https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/

  // Create new Empty note
  document
    .querySelector('#create-empty-new-note')
    .addEventListener('click', () => {
      notesApp.newNote();
      listNotesOnScreen();
    });
});
