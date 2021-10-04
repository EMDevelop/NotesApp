## Notes App

[![Ed](https://img.icons8.com/nolan/25/github.png)](https://github.com/EMDevelop) Ed

[![Gianluca](https://img.icons8.com/nolan/25/github.png)](https://github.com/GianlucaAnsaldi) Gianluca

[![Tom](https://img.icons8.com/nolan/25/github.png)](https://github.com/tomal02) Tom

### User Stories

```
As a User
So that I can record something
I want to create a note

As a User
So that I can see what I've recored
I want to view my notes

As a User
So that I can tell which note is which
I want my notes to have a title

As a User
So that I can change notes I've written
I want to edit my notes

As a User
So that I remove old notes
I want to delete a note

As a User
So that I can remember when I wrote a note
I want to record timestamps

As a User
So that I see newest notes first
I want to order note previews by timestamp

As a User
So that I can add some life to my notes
I want to be able to create emojis on my notes

As a User
So that I can make my notes look pretty
I want to change the font of my application

As a User
So that i can retrieve notes I've deleted
I want to have a Trash folder

As a User
So that I can sort my notes
I want to have categorise my notes in folders

```

### Diagramming

#### Wireframe

![Wireframe](https://github.com/EMDevelop/public_resources/blob/main/images/notesapp/wireframe.png)

#### Domain modelling

`class: NotesApp`
|Functions|Attributes|
|---|---|
|getNotes()|this.notes: Array|
|getBinnedNotes()|this.binned: Array|
|removeNote()||
|createNote()||
|updateNote()||

`class: Note `
|Functions|Attributes|
|---|---|
||this.title: String|
||this.body: String|
