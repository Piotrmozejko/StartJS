import { createButton } from "./utils.js";

export default function (cssClass, cssId, attributes, label, handler) {
  const button = createButton(cssClass, cssId, attributes, label);
  button.addEventListener("click", handler);
  return button;
}
