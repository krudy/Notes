# Notes App

A simple web application for taking and managing notes.

![HTML](https://img.shields.io/badge/HTML-FF5733?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Functionality

- Save a note with the provided text.
- Delete a note.
- Display existing notes on page load.

## Screenshots

![app main view](/screenshots/app_mainview.JPG)

## Usage

1. Open `index.html` in your web browser.

2. Add a new note:
   - Type your note in the textarea with the class `note-area`.
   - Click the "Save" button.

3. Delete a note:
   - Click the "Delete" button next to the note.

4. Existing notes are loaded on page load.

## Implementation Details

The application uses `localStorage` to store notes persistently.

### Functions:

- `saveNote()`: Saves the note to `localStorage` and displays it on the page.
- `deleteNote()`: Deletes a note from `localStorage` and removes it from the page.
- `createNote()`: Creates a new note element on the page.
- `init()`: Initializes the application by loading existing notes from `localStorage` on page load.
