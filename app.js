function saveNote() {
    const noteText = document.querySelector('.note-area').value;
    const noteKey = Date.now().toString();
    localStorage.setItem(noteKey, noteText);

    createNote(noteKey, noteText);
   
}

function deleteNote(noteKey) {
    localStorage.removeItem(noteKey);
}

function createNote (noteKey , noteText) {
    const divNote = document.createElement('div');
    divNote.id = noteKey;
    divNote.textContent = noteText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    divNote.appendChild(deleteButton);
    document.querySelector('.notes').appendChild(divNote);
}