// Data block
const noteDataJson = localStorage.getItem('notes') || '[]';
const noteData = JSON.parse(noteDataJson);
// end Data block

window.addEventListener('unload', () => {
    const noteDataJson = JSON.stringify(noteData);
    localStorage.setItem('notes', noteDataJson);
});

function createLiElement (index, text) {
    return createElement('li', {'data-id': index}, ['note__list'], text)
}

// create UI elements
function updateNoteList(listELement, data) {
    listELement.innerHTML = '';
    // const noteElements = data.map((note, index) => createElement('li', {'data-id': index}, ['note__list'], note.title));
    const noteElements = data.map((note, index) => createLiElement(index, note.title));

    listELement.append(...noteElements);
}

function clearEditor() {
    titelElement.value = null;
    textArea.value = null;
}

// head
const searchElement = createElement('input', {
    type: 'text',
    placeholder: 'search'
});

const headWrapper = createWrapper(
    [searchElement],
    ['note-head']
);

//body

const list = createElement('ul', {}, ['note-lists']);
// const noteElements = noteData.map((note, index) => createElement('li', {'data-id': index}, ['note__list'], note.title));
const noteElements = noteData.map((note, index) => createLiElement(index, note.title));
list.append(...noteElements);

const titelElement = createElement('input', {
    type: 'text',
    placeholder: 'Title'
}, ['note-editor__title']);

const textArea = createElement('textarea', {
    placeholder: 'note...',
}, ['note-editor__text-area']);

const wrapperTextBlock = createWrapper(
    [titelElement, textArea],
    ['note-editor']
);


const bodyWrapper = createWrapper(
    [list, wrapperTextBlock],
    ['note-body']
);


//footer
const save = createElement('button', {}, ['button', 'button_basic'], 'save');
const remove = createElement('button', {}, ['button', 'button_remove'], 'remove');

const footerWrapper = createWrapper(
    [save, remove],
    ['note-footer', 'button-collection']
);

// ende create UI elements

// utils function
function getActiveNote() {
    return list.querySelector('.note-list_active');
}

//


// handlers
function showNote(event) {
    const target = event.target;
    if (!target.classList.contains('note__list')) {
        return;
    }
    const previusActiveElement = getActiveNote();
    // const previusActiveElement = list.querySelector('.note-list_active');
    if (previusActiveElement) {
        previusActiveElement.classList.remove('note-list_active')
    }

    target.classList.add('note-list_active');

    const dataIndex= target.dataset.id;
    const {title, text} = noteData[dataIndex];

    titelElement.value = title;
    textArea.value = text;
}

function removeNote() {
    const activeNote = getActiveNote();
    const dataIndex = activeNote.dataset.id;

    noteData.splice(dataIndex, 1);
    updateNoteList(list, noteData);
    clearEditor();
}

function saveNote() {
    debugger
    const activeNote = getActiveNote();
    const nextIndex = noteData.length;
    const dataIndex = activeNote?.dataset.id || nextIndex;

    const note = {
        title: titelElement.value,
        text: textArea.value
    }

    noteData[dataIndex] = note;

    updateNoteList(list, noteData)
}

//


//add event listener
list.addEventListener('click', showNote);
remove.addEventListener('click', removeNote)
save.addEventListener('click', saveNote)

searchElement.addEventListener('input', (event) => {
    const searchValue = event.target.value.toLowerCase();
    if (searchValue.length === 0) {
        updateNoteList(list, noteData);
        return;
    }

    const searchNotes = noteData.filter(note => note.title.toLowerCase().includes(searchValue));

    updateNoteList(list, searchNotes);
    
})

//


const rootElement = document.getElementById('root');
rootElement.classList.add('container');

rootElement.append(headWrapper, bodyWrapper, footerWrapper);
