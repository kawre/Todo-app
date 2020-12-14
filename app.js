// Dark Mode button
const ThemeButton = document.querySelector(".theme-changer");

ThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Todo add

const todoInput = document
  .querySelector(".todo-input")
  .addEventListener("keypress", (e) => {
    let valueEl = document.querySelector(".todo-input").value;
    if (e.key === "Enter" && valueEl.length >= 1) {
      createTodo(valueEl);
      document.querySelector(".todo-input").value = "";
    } else {
      // inputError();
    }
  });

function createTodo(valueEl) {
  const todoList = document.querySelector(".todo-list");
  // create div
  let list = document.createElement("div");
  list.classList.add("list");
  todoList.appendChild(list);
  list.innerHTML = `<button class="todo-button">
  <img src="/images/icon-check.svg" alt="" />
</button>
<h2 class="todo-activity">${valueEl}</h2>
<button class="delete-list">
  <img src="/images/icon-cross.svg" alt="" />
</button>`;
  completedBtn(list);
  deleteList(list);
  itemsLeft(todoList);
}
// Completed

function completedBtn(list) {
  let todoBtn = list.children[0];

  todoBtn.addEventListener("click", () => {
    todoBtn.classList.toggle("completed");
  });
}

// Delete list

function deleteList(list) {
  let deleteBtn = list.children[2];

  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove();
    itemsLeft(list);
  });
}

// Error

function inputError() {
  const inputEl = document.querySelector(".main-input");
  inputEl.classList.add("error");
}

// Count list

function itemsLeft(todoList) {
  const itemsLeftEl = document.querySelector(".p-items-left");
  let listNumb = todoList.childNodes.length;
  console.log(listNumb);
  itemsLeftEl.innerText = `${listNumb} items left`;
}
