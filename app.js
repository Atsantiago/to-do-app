// function onReady() {
//   const addToDoForm = document.getElementById('addToDoForm');
//   const newToDoText = document.getElementById('newToDoText');
//   const toDoList = document.getElementById('toDoList');
//
//   addToDoForm.addEventListener('submit', () => {
//     event.preventDefault();
//
//     //get the text
//     let title = newToDoText.value;
//
//     //create a new li
//     let newLi = document.createElement('li');
//
//     //create a new input
//     let checkbox = document.createElement('input');
//
//     //set the input's type to checkbox
//     checkbox.type = "checkbox";
//     checkbox.class = "inputChecked";
//     //set the title
//     newLi.textContent = title;
//
//     //attach the checkbox to the li
//     newLi.appendChild(checkbox);
//
//     //attach the li to the ul
//     toDoList.appendChild(newLi);
//
//     //empty the input
//     newToDoText.value = '';
//   });
//   }
// }
// function removeItems() {
//   var list = document.getElementsByClass('inputChecked'),
//   for (var i = 0; i < list.length; i++) {
//     list[i].checked;
//     if(list[i].checked){
//       list[i].innerHTML="";
//     }
//   }
// }
//
// window.onload = function() {
//   onReady();
// }
function onReady() {
<<<<<<< HEAD
  let toDos = [];
  const addToDOForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) {return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI();
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
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
=======
 const addToDoForm = document.getElementById('addToDoForm');
 const newToDoText = document.getElementById('newToDoText');
 const toDoList = document.getElementById('toDoList');

 addToDoForm.addEventListener('submit', () => {
   event.preventDefault();

   //get the text
   let title = newToDoText.value;

   //create a new li
   let newLi = document.createElement('li');

   //create a new input
   let checkbox = document.createElement('input');

   //set the input's type to checkbox
   checkbox.type = "checkbox";
   checkbox.className = "inputCheck"
   //set the title
   newLi.textContent = title;

   //attach the checkbox to the li
   newLi.appendChild(checkbox);

   //attach the li to the ul
   toDoList.appendChild(newLi);

   //empty the input
   newToDoText.value = '';
 });
 }

 function removeItems() {
   var list = document.getElementsByClassName("inputCheck")
   for(var i = 0; i < list.length; i++){
    if(list[i].checked){
    toDoList.removeChild(list[i].parentNode);
    }
>>>>>>> checkpoint-10-DOMScripting
  }
 }

window.onload = function() {
 onReady();
}
