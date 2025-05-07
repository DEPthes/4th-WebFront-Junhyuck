const input = document.querySelector(".input");
const addButton = document.querySelector(".add");
const list = document.querySelector(".todo-list");

input.addEventListener("click", () => {
  input.value = "";
});

addButton.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }

  const text = input.value;
  const li = document.createElement("li");
  li.textContent = text;

  const button = document.createElement("button");
  button.textContent = "X";
  button.classList.add("delete-btn");

  button.addEventListener("click", () => {
    li.remove();
    todoCount();
  });

  li.appendChild(button);
  list.appendChild(li);
  todoCount();

  input.value = "";
});

function todoCount() {
  const count = document.querySelectorAll(".todo-list li").length;
  const counter = document.querySelector(".todo-num");
  counter.textContent = `남은 할 일 ${count}개`;
}
