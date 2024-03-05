# Notes App

A simple web application for taking and managing notes.

## Functionality

- Save a note with the provided text.
- Delete a note.
- Display existing notes on page load.

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
