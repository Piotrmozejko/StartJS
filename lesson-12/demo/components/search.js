import { createElement } from "../utils.js";


const searchElement = createElement('input', {
    type: 'text',
    placeholder: 'search'
});

export default function (cb = () => {}) {
    searchElement.addEventListener('input', (event) => {
        const searchValue = event.target.value.toLowerCase();
        cb(searchValue);
    });
    return searchElement;
}