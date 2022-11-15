export function createWrapper(childs=[], cssClass=[]) {

    const div = document.createElement('div');
    div.classList.add(...cssClass);
    div.append(...childs);

    return div;
}

export function createElement(type, attributes = {}, cssClass=[], content) {
    const element = document.createElement(type);
    for(let attributeType in attributes) {
        element.setAttribute(attributeType, attributes[attributeType])
    }
    element.classList.add(...cssClass);
    if (content) {
        element.innerText = content;
    }
    return element;
}
