// const todolist = [];

// function renderTodoList() {

//   let todotask = document.querySelector('.js-todo3').value;
//   todolist.push(todotask);
//   console.log(todolist);

//   let todolisthtml = '';


// }


// function displayTodo() {
//   let text = document.querySelector('.js-todo1').value;
//   let testArray = JSON.parse(localStorage.getItem('testArray')) || [];
//   testArray.push(text);
//   localStorage.setItem('testArray', JSON.stringify(testArray));
//   console.log(testArray);
// }

// function displayTodo1() {
//   let text = document.querySelector('.js-todo2').value;
//   let testArray = JSON.parse(localStorage.getItem('testArray')) || [];
//   testArray.push(text);
//   localStorage.setItem('testArray', JSON.stringify(testArray));
//   document.querySelector('.js-todo-tasks').innerHTML = `${testArray.join('<br>')} <br>`;


// }

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

const todolist = [];
renderTodoList();
function renderTodoList() {
  let todolisthtml = '';
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    let name = todo.name;
    let date = todo.date;

    // console.log(name, date);
    const html = ` <div class="todo-task"> <p class=task>${name} ${date} <\p>  <button class = "delete-button js-delete-todo-button"
    > delete </button>  </div>`;
    todolisthtml += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todolisthtml;
  // console.log(todolisthtml);
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      console.log(deleteButton);
      todolist.splice(index, 1);
      renderTodoList();
    });

  });

}

function addTodo() {
  let name = document.querySelector('.js-todotask').value
  let date = document.querySelector('.js-todotask-date').value


  todolist.push({
    name: name,
    date: date,
  });
  renderTodoList();
}
