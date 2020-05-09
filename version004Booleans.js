//V4    REQUIREMENTS

//todolist.addTodo should add objects
//todoList.changeTodo should change the todoText property
//todoList.toggleCompleted should change the completed property

var todoList = { 
    todos: [],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    }, //1
    addTodo: function(todoText) {
      this.todos.push( {
        todoText: todoText,
        completed: false } );
      this.displayTodos();
    }, //2
    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText; 
      this.displayTodos();
    }, 
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },//3
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
    };