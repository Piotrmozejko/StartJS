import { createElement } from "../utils.js";

export default function(cssClass, content, handler) {
    const button = createElement('button', {}, cssClass, content);
    button.addEventListener('click', handler)
    return button;
}