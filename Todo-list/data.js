const todosDataJson = localStorage.getItem("todos") || "[]";
const todos = JSON.parse(todosDataJson);

window.addEventListener("unload", () => {
  const todosDataJson = JSON.stringify(todos);
  localStorage.setItem("todos", todosDataJson);
});

export default todos;
