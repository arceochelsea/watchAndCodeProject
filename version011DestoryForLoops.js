//v11 requirements

//todoList.toggleAll should use forEach
//view.displayTodos should use forEach
this.todos.forEach(function(todo) {
    if (todo.completed === true) {
        completedTodos++;
    }
});

this.todos.forEach(function(todo) {
//case 1: if everythings true then make false.
if (completedTodos === totalTodos) {
    todo.completed = false;
    //case two: otherwise make everything true
} else {
    todo.completed = true;
}
});
}
};