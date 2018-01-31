function onReady() {
  let id = 0;
  let toDos = [];
  const addToDOForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) {return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id
    });
    id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function deleteToDo(id){
    toDos = toDos.filter(item => item.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');

      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      const title = document.createElement('span');
      title.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      const deleteButton = document.createElement("button");
      newLi.appendChild(deleteButton);
      deleteButton.innerHTML = "Delete"

     deleteButton.addEventListener("click", event => {
       deleteToDo(toDo.id);
       event.preventDefault();
       renderTheUI();
     })
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
  }

window.onload = function() {
  onReady();
}
