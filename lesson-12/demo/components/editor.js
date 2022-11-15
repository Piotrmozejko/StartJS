import { createElement, createWrapper } from "../utils.js";

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

function clearEditor() {
    titelElement.value = null;
    textArea.value = null;
}

function setData({title, text}) {
    titelElement.value = title;
    textArea.value = text;
}

function getData() {
    return {
        title: titelElement.value,
        text: textArea.value
    }
}

export default {
    element: wrapperTextBlock,
    setData,
    clearEditor,
    getData
}