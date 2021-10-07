document.addEventListener('DOMContentLoaded', () => {
  // Creating Note Instance
  const notesApp = new NotesApp();

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

    const previewCardOnClickCss = (cardsArray, clickedCardID) => {
      cardsArray.forEach((card) => {
        if (card.id === clickedCardID) {
          card.className = 'preview-card-clicked';
        } else {
          card.className = 'preview-card';
        }
      });
    };

    // Defining the action after clicking for preview cards
    const previewCardOnClick = (event, id, cardsArray) => {
      // set hidden value with current id
      document.getElementById('current-id').innerHTML = id;
      previewCardOnClickCss(cardsArray, id);
    };

    // Defining event listners for each preview
    const setPreviewCardEventListeners = () => {
      const cards = document.getElementsByClassName('preview-card');
      const cardsArray = Array.from(cards);
      cardsArray.forEach((card) => {
        card.addEventListener('click', (e) => {
          previewCardOnClick(e, card.id, cardsArray);
        });
      });
    };

    // Dynamically creating preview cards on screen
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
    setPreviewCardEventListeners();
  };

  listNotesOnScreen();

  // Create Event Listners
  // thing = document
  //   .getElementsByClassName('preview-card')
  //   .addEventListener('click', (e) => {
  //     console.log('clicked');
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
