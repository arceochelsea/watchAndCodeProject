//V7    REQUIREMENTS

// There should be a "display todos" button and a "Toggle all" button in the app.
// Clicking "display todos" should run todoList.displayTodos.
// Clicking "Toggle all" should run todoList.toggleAll.


<button id='displayTodosButton'>Display Todos</button>
<button id='toggleAllButton'>Toggle All</button>


    //1.
    var displayTodosButton = document.getElementById('displayTodosButton');
    var toggleAllButton = document.getElementById('toggleAllButton');
    console.log(displayTodosButton);
   
    //2.

    displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
    });

    toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();    
    });
