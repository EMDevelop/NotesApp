## Eternal Note

### Preview

![](https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/notesApp/notes.gif)

### The Team

We worked together Really well, helping eachother learn while pushing the boundaries of a single page web app.

[![Ed](https://img.icons8.com/nolan/25/github.png)](https://github.com/EMDevelop) Ed | [![Tom](https://img.icons8.com/nolan/25/github.png)](https://github.com/tomal02) Tom | [![Gianluca](https://img.icons8.com/nolan/25/github.png)](https://github.com/GianlucaAnsaldi) Gianluca

### Features

- We built out own testing framework (Modelled to function similar to RSpec and Jasmine), see 'Testing Framework' section.
- Implemented a custom font using a dropdown button, which changed the font of the whole application.
- Fonts were stored using Cookies, in case the page was reloaded / url visited from another browser.
- Notes are persistent as we stored the notes within local browser storage.
- CSS implemented a glass theme, built in SCSS and taking advantage of this codepen: https://codepen.io/alexitaylor/pen/RgxJwg
- Took advantage of an emoji API, which changes :fire: into a fire emoji : https://makers-emojify.herokuapp.com/
- Hosted on Heroku

### How To Run

##### Hosted

- Visit: https://eternal-note.herokuapp.com/

##### Clone

- clone the project `git clone https://github.com/EMDevelop/NotesApp.git`
- Install single dependency `npm install`
- Start server `npm start`
- If you'd like to test run `npm test`

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

### Testing Framework

##### Expect | Describe | Contect | It

This is how we defined the methods which we'd then call to

- Add labels to each test
- Add matchers onto an expect block containing a testable input

![expect](https://github.com/EMDevelop/public_resources/blob/main/images/notesapp/Expect.png 'expect')

##### Matchers:

These are the matchers which are returned as an instance when Expect is called.

![matcher](https://github.com/EMDevelop/public_resources/blob/main/images/notesapp/Matchers.png 'matchers')

##### Unit Tests

An example of how to use our testing framework
![unit](https://github.com/EMDevelop/public_resources/blob/main/images/notesapp/WritingTests.png 'unit')

##### Output

This is how our tests look in the browser console after running `npm test`
![output](https://github.com/EMDevelop/public_resources/blob/main/images/notesapp/TestOutput.png 'output')

### Wireframe

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
