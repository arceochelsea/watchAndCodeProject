//V10 REQUIREMENTS

//there should be a way to create delete buttons
//there should be a delete button for each todo
//each li should have an id that has the todo position.
//delete buttons should have access to the todo id
//clicking delete should update todoList.todos and the DOM

todoLi.id = i;
todoLi.textContent = todoTextWithCompletion;
todoLi.appendChild(this.createDeleteButton());
todosUl.appendChild(todoLi);
}
},
createDeleteButton: function() {
var deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'deleteButton';
return deleteButton;
},
setUpEventListeners: function() {
var todosUl = document.querySelector('ul');

todosUl.addEventListener('click', function() {
//get element that was clicked on
var elementClicked = event.target;

//check if elementClicked is a delete button
if (elementClicked.className === 'deleteButton') {
handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
}
});
}
};

view.setUpEventListeners();