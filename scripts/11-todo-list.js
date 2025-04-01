const todoList = ['make dinner', 'wash dishes'];

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++)



function addTodo() {
  let inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  inputElement = '';
  console.log(todoList)
}
