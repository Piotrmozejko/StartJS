function createWrapper(childs=[], cssClass=[]) {
    const div = document.createElement('div');
    div.classList.add(...cssClass);
    // const searchElement = childs[0];
    // const titleElement = childs[1];
    // div.append(searchElement, titleElement);
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

function createButton(label, cssClass=[]) {
    const button = document.createElement('button');
    button.classList.add(...cssClass);
    button.innerText = label;

    return button;
}

function createNoteList(childs=[], cssClass=[]) {
    const ul = document.createElement('ul');
    ul.classList.add(...cssClass);

    childs.forEach(element => {
        const li = document.createElement('li');
        li.append(element);
        ul.append(li)
    });

    return ul
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

const notes = Array(20).fill(null).map((v, index) => createButton('note'+index, ['button']))

const list = createNoteList([...notes], ['note-lists']);

const titelElement = createElement('input', {
    type: 'text',
    placeholder: 'Title'
}, ['note-editor__title']);

const textArea = createElement('textarea', {
    placeholder: 'note...'
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


const rootElement = document.getElementById('root');
rootElement.classList.add('container');

rootElement.append(headWrapper, bodyWrapper, footerWrapper);
