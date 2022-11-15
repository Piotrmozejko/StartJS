import {createWrapper} from './utils.js';
import createSearchComponent from './components/search.js';
import noteData from "./data.js";
import createListComponent from './components/list.js';
import editorComponent from './components/editor.js';
import createButtonComponent from './components/button.js'


// handlers
const searchHandler = (searchValue) => {
    if (searchValue.length === 0) {
        listComponent.render(noteData);;
        return;
    }

    const searchNotes = noteData.filter(note => note.title.toLowerCase().includes(searchValue));

    listComponent.render(searchNotes);
}

const showNote = (data) => {
    editorComponent.setData(data);
}

function removeNoteHandler() {
    const dataIndex = listComponent.getActiveElementIndex();

    noteData.splice(dataIndex, 1);
    listComponent.render(noteData);
    editorComponent.clearEditor()
}

function saveNoteHandler() {
    const activeIndex = listComponent.getActiveElementIndex();
    const nextIndex = noteData.length;
    const dataIndex = activeIndex || nextIndex;

    noteData[dataIndex] = editorComponent.getData();

    listComponent.render(noteData);
}


// create components
const searchComponent = createSearchComponent(searchHandler);

const listComponent = createListComponent(showNote);
listComponent.render(noteData);


const save = createButtonComponent(['button', 'button_basic'], 'save', saveNoteHandler);
const remove = createButtonComponent(['button', 'button_remove'], 'remove', removeNoteHandler);


//creatre wrappers
const headWrapper = createWrapper(
    [searchComponent],
    ['note-head']
);

const bodyWrapper = createWrapper(
    [listComponent.element, editorComponent.element],
    ['note-body']
);

const footerWrapper = createWrapper(
    [save, remove],
    ['note-footer', 'button-collection']
);



// attach to DOM
const rootElement = document.getElementById('root');
rootElement.classList.add('container');

rootElement.append(headWrapper, bodyWrapper, footerWrapper);
