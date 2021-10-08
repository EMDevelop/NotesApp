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
    const previewCardOnClick = (id, cardsArray) => {
      // set hidden value with current id
      let intID = parseInt(id);
      document.getElementById('current-id').innerHTML = intID;
      let note = notesApp.getNoteByIndex(intID);
      noteTitle.value = note.title;
      noteBody.value = note.body;
      previewCardOnClickCss(cardsArray, id);
    };

    // Defining event listners for each preview
    const setPreviewCardEventListeners = () => {
      const cards = document.getElementsByClassName('preview-card');
      const cardsArray = Array.from(cards);
      cardsArray.forEach((card) => {
        card.addEventListener('click', () => {
          previewCardOnClick(card.id, cardsArray);
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
              </div> `
      );
      noteTitle.value = currentItem.title;
      noteBody.value = currentItem.body;
      document.getElementById('current-id').innerHTML =
        notesApp.notes.length - 1;
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

  document.querySelector('#del').addEventListener('click', () => {
    const id = parseInt(document.querySelector('#current-id').innerText);
    notesApp.notes.splice(id, 1);
    notesApp.updateNotes();
    listNotesOnScreen();
    noteTitle.value = '';
    noteBody.value = '';
  });

  document.querySelector('#save-note').addEventListener('click', () => {
    const id = parseInt(document.querySelector('#current-id').innerText);
    const title = document.querySelector('#note-title').value;
    let body = document.querySelector('#note-body').value;

    body = fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `{ "text": "${body}" }`,
    })
      .then((response) => response.json())
      .then((data) => {
        body = data.emojified_text;
        console.log(body);
        notesApp.saveNote(title, body, id);
        listNotesOnScreen();
        let note = notesApp.getNoteByIndex(id);
        noteTitle.value = note.title;
        noteBody.value = note.body;
      });
  });

  const openDropdown = () => {
    document.getElementById('fontDropDown').classList.toggle('show');
  };

  document.querySelector('#drop-button').addEventListener('click', () => {
    openDropdown();
  });

  const closeDropDown = () => {
    document.getElementById('fontDropDown').classList.remove('show');
  };

  window.onclick = (event) => {
    if (!event.target.matches('.drop-button')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        const openElementsDropdown = dropdowns[i];
        if (openElementsDropdown.classList.contains('show')) {
          openElementsDropdown.classList.remove('show');
        }
      }
    }
  };

  document.getElementById('arial-sans-serif').addEventListener('click', () => {
    document.body.style.fontFamily = 'Arial,sans-serif';
    document.getElementById('note-title').style.fontFamily = 'Arial,sans-serif';
    document.getElementById('note-body').style.fontFamily = 'Arial,sans-serif';
    closeDropDown();
    const id = parseInt(document.querySelector('#current-id').innerText);

    listNotesOnScreen();

    let note = notesApp.getNoteByIndex(id);
    noteTitle.value = note.title;
    noteBody.value = note.body;
  });

  document
    .getElementById('charcoal-sans-serif')
    .addEventListener('click', () => {
      document.body.style.fontFamily = 'Impact, Charcoal,sans-serif';
      document.getElementById('note-title').style.fontFamily =
        'Impact, Charcoal,sans-serif';
      document.getElementById('note-body').style.fontFamily =
        'Impact, Charcoal,sans-serif';
      closeDropDown();
      const id = parseInt(document.querySelector('#current-id').innerText);

      listNotesOnScreen();

      let note = notesApp.getNoteByIndex(id);
      noteTitle.value = note.title;
      noteBody.value = note.body;
    });

  document.getElementById('georgia-serif').addEventListener('click', () => {
    document.body.style.fontFamily = 'Georgia, serif';
    document.getElementById('note-title').style.fontFamily = 'Georgia, serif';
    document.getElementById('note-body').style.fontFamily = 'Georgia, serif';
    closeDropDown();
    const id = parseInt(document.querySelector('#current-id').innerText);

    listNotesOnScreen();

    let note = notesApp.getNoteByIndex(id);
    noteTitle.value = note.title;
    noteBody.value = note.body;
  });

  document
    .getElementById('brush-script-cursive')
    .addEventListener('click', () => {
      document.body.style.fontFamily = 'Brush Script MT, cursive';
      document.getElementById('note-title').style.fontFamily =
        'Brush Script MT, cursive';
      document.getElementById('note-body').style.fontFamily =
        'Brush Script MT, cursive';
      closeDropDown();
      const id = parseInt(document.querySelector('#current-id').innerText);

      listNotesOnScreen();

      let note = notesApp.getNoteByIndex(id);
      noteTitle.value = note.title;
      noteBody.value = note.body;
    });
});
