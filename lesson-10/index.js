// Data block
const noteData = [
    {
        title: 'Заметка о мире',
        text: ' Мир это прекрсано'
    },
    {
        title: 'Hello world',
        text: ' JS is good'
    },
    {
        title: 'My life',
        text: ' life lifelifelifelifelifelifelifelifelife'
    }
];
// end Data block


// create UI elements

function createWrapper(childs=[], cssClass=[]) {
    const div = document.createElement('div');
    div.classList.add(...cssClass);
    div.append(...childs);

    return div;
}

function createElement(type, attributes = {}, cssClass=[]) {
    const element = document.createElement(type);
    for(let attributeType in attributes) {
        element.setAttribute(attributeType, attributes[attributeType])
    }
    element.classList.add(...cssClass);
    return element;
}

function createButton(label, cssClass=[], attributes = {}) {
    const button = document.createElement('button');
    button.classList.add(...cssClass);
    button.innerText = label;
    for(let attributeType in attributes) {
        button.setAttribute(attributeType, attributes[attributeType])
    }

    return button;
}

function createLiElement(note, index) {
    const li = document.createElement('li');
    li.classList.add('note__list')
    li.innerText = note.title;
    li.setAttribute('data-id', index);
    return li;
}

function createNoteList(data, cssClass=[]) {
    const ul = document.createElement('ul');
    ul.classList.add(...cssClass);

    data.forEach((note, index) => ul.append(createLiElement(note, index)));

    return ul
}

function updateNoteList(listELement, data) {
    listELement.innerHTML = '';
    const noteElements = data.map((note, index) => createLiElement(note, index));

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
const list = createNoteList(noteData, ['note-lists']);

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
const save = createButton('save', ['button', 'button_basic']);
const remove = createButton('remove', ['button', 'button_remove']);

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
    const activeNote = getActiveNote();
    const dataIndex = activeNote.dataset.id;

    const title = titelElement.value;
    const text = textArea.value;

    noteData[dataIndex] = {title, text};

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
