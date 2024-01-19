function saveNote() {
    const noteText = document.querySelector('.note-area').value;
    const noteKey = Date.now().toString();
    localStorage.setItem(noteKey, noteText);

    createNote(noteKey, noteText);
   
}

function deleteNote(noteKey) {
    localStorage.removeItem(noteKey);
    document.querySelector(`#id${noteKey}`).remove();
}

function createNote (noteKey , noteText) {
    const divNote = document.createElement('div');
    divNote.id = "id" + noteKey;
    divNote.className = 'note';
    divNote.textContent = noteText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => deleteNote(noteKey));

    divNote.appendChild(deleteButton);
    document.querySelector('.notes').appendChild(divNote);
}

function init() {
    Object.keys(localStorage).forEach((noteKey) => { 
        const noteText = localStorage.getItem(noteKey);
        createNote(noteKey, noteText);
    })
}

init();