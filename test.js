var todoList = { 
    todos: [],
    displayTodos: function() {
    if (this.todos.length === 0) {
    console.log('your todo list is empty!');
    } else {
    console.log('My Todos:');
    for (var i = 0; i < this.todos.length; i++) {
    if (this.todos[i].completed === true) {
    console.log('(x)', this.todos[i].todoText);
    } else {
    console.log('( )', this.todos[i].todoText);
    }
  }
}
}, 
addTodo: function(todoText) {
  this.todos.push({
    todoText: todoText,
    completed: false 
    });
  this.displayTodos();
}, 
changeTodo: function(position, todoText) {
  this.todos[position].todoText = todoText; 
  this.displayTodos();
}, 
deleteTodo: function(position) {
  this.todos.splice(position, 1);
  this.displayTodos();
},
toggleCompleted: function(position) {
var todo = this.todos[position];
todo.completed = !todo.completed;
this.displayTodos();
}, 
toggleAll: function() {
var totalTodos = this.todos.length;
var completedTodos = 0;

//get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    //if everythings true make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      //case 2// toggleAll: otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  }
};


//1.
var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton);

//2.
//todos button

displayTodosButton.addEventListener('click', function() {
todoList.displayTodos();
});
