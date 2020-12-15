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
  itemsLeft();
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
    itemsLeft();
  });
}

// Error

function inputError() {
  const inputEl = document.querySelector(".main-input");
  inputEl.classList.add("error");
}

// Count list

function itemsLeft() {
  const itemsLeftEl = document.querySelector(".p-items-left");
  const listAll = document.querySelectorAll(".list");
  let listNumb = listAll.length;
  console.log(listNumb);
  itemsLeftEl.innerText = `${listNumb} items left`;
  const mainOutput = document.querySelector(".main-output");
  if (listNumb === 0) {
    mainOutput.classList.add("hide");
  } else {
    mainOutput.classList.remove("hide");
  }
}

// clear completed

const clearBtn = document
  .querySelector(".btn-clear")
  .addEventListener("click", () => {
    const all = document.querySelectorAll(".list");
    all.forEach((list) => {
      const listBtn = list.children[0];
      if (listBtn.classList.contains("completed")) {
        console.log(listBtn.parentNode.remove());
      } else {
        console.log("chuj");
      }
    });
    itemsLeft();
  });

// Control buttons

const controlBtns = document.querySelectorAll(".c-btn");

controlBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    controlBtns.forEach((btnEl) => {
      btnEl.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
