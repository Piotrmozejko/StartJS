import { createElement } from "../utils.js";

let _data = null;
const list = createElement('ul', {}, ['note-lists']);

function createLiElement (index, text) {
    return createElement('li', {'data-id': index}, ['note__list'], text)
}

function render(data) {
    _data = data;
    const noteElements = data.map((note, index) => createLiElement(index, note.title));
    list.innerHTML = '';

    list.append(...noteElements);
}

function getActiveNote() {
    return list.querySelector('.note-list_active');
}

function getActiveElementIndex() {
    const activeNode = getActiveNote();
    return activeNode?.dataset.id;
}

export default function (cb = () => {}) {
    list.addEventListener('click', (event) => {
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
        const data = _data[dataIndex];
        cb(data)
    });

    return {
        element: list,
        render,
        getActiveElementIndex,
    };
}