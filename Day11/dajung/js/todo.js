const createBtn = document.getElementById('create-btn');
const todoList = document.querySelector('.todo-list');
createBtn.addEventListener('click', () => {
  const createInput = document.getElementById('create-input');
  if(createInput.value !==""){
    const todoElm = document.createElement('p');
    const deleteBtn = document.createElement('button');
    todoElm.innerText = createInput.value;
    deleteBtn.innerText = '삭제';
    const todoDiv = document.createElement('div');
    todoList.prepend(todoDiv);
    todoDiv.style.border = '2px solid pink';
    todoDiv.appendChild(todoElm);
    todoDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
      todoDiv.remove();
    })
  } else{
    alert('할 일을 추가해주세요!');
  }
  createInput.value = "";
})