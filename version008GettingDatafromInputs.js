//V8 REQUIREMENTS

//it should have working controls for .addTodo
//It should have working controls for .changeTodo
//It should have working controls for .deleteTodo
//It should have working controls for .toggleCompleted


<div>
        <button onclick='handlers.displayTodos()'>Display Todos</button>
        <button onclick='handlers.toggleAll()'>Toggle All</button>
    </div>

    <div>
        <button onclick='handlers.addTodo()'>Add</button>
        <input id='addTodoTextInput' type="text">
    </div>

    <div>
        <button onclick='handlers.changeTodo()'>Change Todo</button>
        <input id='changeTodoPositionInput' type="number">
        <input id='changeTodoTextInput' type="text">
    </div>

    <div>
        <button onclick='handlers.deleteTodo()'>Delete</button>
        <input id='deleteTodoPositionInput' type="number">
    </div>

    <div>
        <button onclick='handlers.toggleCompleted()'>Toggle Completed</button>
        <input id='toggleCompletedPositionInput' type="number">
    </div>



var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
    },
    toggleAll: function() {
        todoList.toggleAll();    
    }
};