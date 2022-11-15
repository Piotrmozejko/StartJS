import { createWrapper, createButton, createElement } from "./utils.js";
import todos from "./data.js";
import createButtonHeader from "./button.js";

//header
let i = 0;
const task = [];

for (const iterator of todos) {
  for (let key in iterator) {
    if (key === "text") {
      task.push(iterator[key]);
    }
  }
}

function header() {
  // BUTTON DELET ALL
  function deletAllTask() {
    task.length = 0;
    todoList(task, taskWraper);
    todos.length = 0;
    i = 0;
  }
  const deletAll = createButtonHeader(
    [],
    "delete_all",
    { type: "submit" },
    "Delete all",
    deletAllTask
  );
  // BUTTON ADD
  function addTask() {
    const texTodo = titelElement.value;
    if (!texTodo.length) {
      alert("Ты ленивая жопа, введи что нибудь!");
      return;
    }
    if (!task.length) {
      task.push(texTodo);
      todoList(task, taskWraper);
    } else {
      task.push(texTodo);
      let nextTodo = [todoItem([texTodo])];
      taskWraper.firstElementChild.append(...nextTodo);
    }
    titelElement.value = "";
  }
  const addElement = createButtonHeader(
    [],
    "add",
    { type: "submit" },
    "Add",
    addTask
  );
  // input
  const titelElement = createElement(
    "input",
    {
      type: "text",
      placeholder: "Enter todo ...",
    },
    ["todo"]
  );
  const headWrapper = createWrapper(
    "div",
    [deletAll, titelElement, addElement],
    ["header-wrap"]
  );
  return headWrapper;
}

//task
function todoList(data = [], conteiner) {
  const tasks = data.map((task) => todoItem(task));
  conteiner.innerHTML = "";
  const list = createWrapper("ul", [...tasks], ["task-list"]);
  conteiner.append(list);

  return conteiner;
}
function todoItem(task) {
  const contentCheck = createElement("input", { type: "checkbox" }, [
    "content-check",
  ]);

  const contenText = createElement("p", {}, ["content-text"], task);
  const deletOne = createButton([], "delete-one", { type: "submit" }, "X");
  let dataOld;
  let baloo = false;
  for (let it of todos) {
    if (it["text"] === contenText.innerText) {
      baloo = true;
      dataOld = it["data"];
    }
  }
  if (!baloo) {
    dataOld = randomDate("01/01/2030");
  }
  if (!todos.length) {
    dataOld = randomDate("01/01/2030");
  }
  const contentData = createElement(
    "input",
    {
      type: "text",

      value: dataOld,
      readonly: "readonly",
    },

    ["content-data"]
  );

  const data = contentData.value;
  const text = contenText.innerText;
  const check = contentCheck.checked;

  const todo = {
    id: Math.round(Math.random() * 10000),
    text: text,
    data: data,
    isChecked: check,
  };

  baloo = true;
  if (todos.length) {
    for (let it of todos) {
      if (it["text"] === text) {
        baloo = false;
        if (it["isChecked"] === true) {
          contentCheck.setAttribute("checked", "true");
        } else {
          contentCheck.removeAttribute("checked");
        }
      }
      if (!(it["data"] === data)) {
        contentData.value = it["data"];
      }
    }
    if (baloo) {
      todos.push(todo);
    }
  } else {
    todos.push(todo);
  }

  const contentParametr = createWrapper(
    "div",
    [deletOne, contentData],
    ["content-parametr"]
  );
  const todoLi = createWrapper(
    "li",
    [contentCheck, contenText, contentParametr],
    ["task-content"]
  );
  let date = new Date();
  if (contentCheck.checked) {
    todoLi.style.backgroundColor = "red";
    contenText.style.backgroundColor = "green";
    contenText.style.textDecoration = "line-through";
    // contentData.type = "text";
    // contentData.setAttribute("readonly", "readonly");
    contentData.value = date.toLocaleDateString();
  } else {
    todoLi.style.backgroundColor = "antiquewhite";
    contenText.style.backgroundColor = "white";
    contenText.style.textDecoration = "none";
    // contentData.type = "date";
    contentData.value = dataOld;
    // contentData.removeAttribute("readonly");
  }
  deleteTask(deletOne);
  checkTask(contentCheck, contenText, contentData);
  clickData(contentData, contenText);

  return todoLi;
}
function randomDate(date2) {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  var date1 = "01-01-1970";
  var date2 = date2 || new Date().toLocaleDateString();
  date1 = new Date().getTime();
  date2 = new Date(date2).getTime();
  let newData = new Date(getRandomArbitrary(date1, date2)).toLocaleDateString();
  let arrayNewData = newData.split(".");
  arrayNewData.reverse();
  newData = arrayNewData.join("-");

  return newData;
}
function clickData(element, element2) {
  element.addEventListener("input", () => {
    // alert(element.value);
    for (let it of todos) {
      if (it["text"] === element2.innerText) {
        it["data"] = element.value;
      }
    }
  });
}
function checkTask(element, element2, element3) {
  element.addEventListener("click", () => {
    for (let it of todos) {
      if (it["text"] === element.nextElementSibling.innerText) {
        it["isChecked"] = element.checked;
      }
    }

    let date = new Date();
    if (element.checked) {
      element.parentElement.style.backgroundColor = "red";
      element2.style.backgroundColor = "green";
      element2.style.textDecoration = "line-through";
      // element3.type = "text";
      // element3.setAttribute("readonly", "readonly");
      element3.value = date.toLocaleDateString();
    } else {
      element.parentElement.style.backgroundColor = "antiquewhite";
      element2.style.backgroundColor = "white";
      element2.style.textDecoration = "none";
      // element3.type = "date";
      element3.value = randomDate("01/01/2030");
      for (let it of todos) {
        if (it["text"] === element.nextElementSibling.innerText) {
          it["data"] = element3.value;
        }
      }
      // element3.removeAttribute("readonly");
    }
  });
}
function deleteTask(element) {
  element.addEventListener("click", (event) => {
    let n = 0;
    let k = 0;
    element.parentElement.parentElement.remove();
    for (const iterator of todos) {
      for (let key in iterator) {
        if (
          iterator[key] ===
          element.parentElement.previousElementSibling.innerText
        ) {
          k = n;
        }
      }
      n++;
    }
    todos.splice(k, 1);
  });
}
const conteiner = createWrapper("div", [], ["conteiner"]);
const taskWraper = createWrapper("div", [], ["task"]);
const rootElement = document.getElementById("root");
rootElement.append(conteiner);
conteiner.append(header());
conteiner.append(todoList(task, taskWraper));
document.body.append(rootElement);
