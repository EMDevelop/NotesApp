document.addEventListener('DOMContentLoaded', () => {
  // Creating Note Instance
  const notesApp = new NotesApp();

  // Updating Screen

  const preview = document.getElementById('preview');
  const noteTitle = document.getElementById('note-title');
  const noteBody = document.getElementById('note-body');
  const noteDatetime = document.getElementById('note-datetime');

  if (document.cookie != '') {
    const fontCookie = document.cookie.split('=')[1];
    document.body.style.fontFamily = fontCookie;
    document.getElementById('note-title').style.fontFamily = fontCookie;
    document.getElementById('note-body').style.fontFamily = fontCookie;
  } else {
    document.body.style.fontFamily = 'Arial,sans-serif';
    document.getElementById('note-title').style.fontFamily = 'Arial,sans-serif';
    document.getElementById('note-body').style.fontFamily = 'Arial,sans-serif';
  }

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
      noteDatetime.innerText = note.dateTime;
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
      noteDatetime.innerText = currentItem.dateTime;
      document.getElementById('current-id').innerHTML =
        notesApp.notes.length - 1;
    });
    setPreviewCardEventListeners();
  };

  listNotesOnScreen();

  // Create new Empty note
  document
    .querySelector('#create-empty-new-note')
    .addEventListener('click', () => {
      notesApp.newNote('');
      listNotesOnScreen();
    });

  document.querySelector('#del').addEventListener('click', () => {
    const id = parseInt(document.querySelector('#current-id').innerText);
    notesApp.notes.splice(id, 1);
    notesApp.updateNotes();
    listNotesOnScreen();
    noteTitle.value = '';
    noteBody.value = '';
    document.getElementById('0prev').click();
  });

  document.querySelector('#save-note').addEventListener('click', () => {
    const id = parseInt(document.querySelector('#current-id').innerText);
    const title = document.querySelector('#note-title').value;
    let body = document.querySelector('#note-body').value;
    const datetime = document.querySelector('#note-datetime').innerText;

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
    document.cookie = 'font=Arial,sans-serif';
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
      document.cookie = 'font=Impact, Charcoal,sans-serif';
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
    document.cookie = 'font=Georgia, serif';
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
      document.cookie = 'font=Brush Script MT, cursive';
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
