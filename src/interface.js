document.addEventListener('DOMContentLoaded', () => {
  // Creating Note Instance
  const notesApp = new NotesApp();

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
      document.getElementById('current-id').innerHTML = parseInt(id);

      // -------------------------------------------------
      // We need to
      //  use the ID from the getElementById('current-id') to fetch data from notesApp
      //  Use that data to populate the noteTitle and noteBody

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
              <div id="${index}prev" class="preview-card">
                <div class="preview-title">
                  <!-- need to populate dynamically in DOM -->
                  <p>${currentItem.title}</p>
                </div>
                <div class="preview-delete-button">
                  <input id="del" type="submit" value="Delete" />
                </div>
              </div> `
      );
      noteTitle.value = currentItem.title;
      noteBody.value = currentItem.body;
    });
    setPreviewCardEventListeners();
  };

  listNotesOnScreen();

  // -------------------------------------------------
  // Save the note
  // we need to...
  //  use the getElementByID("save-note")
  //  set values in our notesApp based on values in the noteBody and noteTitle

  // -------------------------------------------------
  // Delete note
  // I think we need to use .splice or something
  //  use getElementByID("del")
  //  we will need to loop through all the del buttons and add an event listner

  // -------------------------------------------------
  // Setup Emojis
  // We need to
  //  Set up a fetch
  //  The fetch will take the formt of https://makers-emojify.herokuapp.com/
  //  Maybe setup an OnChange event on the titleBody so every time you type something new it willl send a request to the API haah
  // We might break the API this way but it will allow instant emoji updates
  // If not, we can just have the emoji stuff added on save, and the save logic run inside the .then when the promise is fulfilled

  // Create new Empty note
  document
    .querySelector('#create-empty-new-note')
    .addEventListener('click', () => {
      notesApp.newNote('Untitled');
      listNotesOnScreen();
    });
});
