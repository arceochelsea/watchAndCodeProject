//objects!
var myComputer = {
operatingSystem: mac,
screenSize: '15 inches',
purchaseYear: 2011
};

//objects and functions

var gordon = {
    name: 'Gordon',
    sayName: function() { //method
        console.log(this.name);
    }
}

//V3 Requirements
//It should store the todos array on an object
//It should have a displayTodos method
//It should have an addTodo method
//It should have a changeTodo method
//It should have a deleteTodo method


var todoList = { //1
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    }, //2
    addTodo: function(todo) {
      this.todos.push(todo);
      this.displayTodos();
    }, //3
    changeTodo: function(position, newValue) {
      this.todos[position] = newValue;
      this.displayTodos();
    }, //4
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    }
    };