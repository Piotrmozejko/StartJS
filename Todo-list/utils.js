export function createWrapper(type, childs = [], cssClass = []) {
  const element = document.createElement(type);
  element.classList.add(...cssClass);
  element.append(...childs);
  return element;
}
export function createButton(cssClass = [], cssId, attributes = {}, label) {
  const button = document.createElement("button");
  button.classList.add(...cssClass);
  button.id = cssId;
  for (let attributeType in attributes) {
    button.setAttribute(attributeType, attributes[attributeType]);
  }
  button.innerText = label;
  return button;
}
export function createElement(type, attributes = {}, cssClass = [], label) {
  const element = document.createElement(type);
  for (let attributeType in attributes) {
    element.setAttribute(attributeType, attributes[attributeType]);
  }
  element.classList.add(...cssClass);
  element.innerText = label;
  return element;
}
