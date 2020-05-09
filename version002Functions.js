//functions are just recipes 
//structure of a function
//how to run a function

makeTurkeySandwich
Get one slice of bread.
add turkey.
put a sice of bread on top.

function makeTurkeySandwich() {
    Get one slice of bread;
    add turkey;
    put a sice of bread on top;
}
makeTurkeySandwich() 

//customizing functions
function makeSandwichWith(filling) {
    Get one slice of bread;
    add filling;
    put a sice of bread on top;
}
makeTurkeySandwich('ham') 

//more on customizing functions
function sayHiTo(person) {
    console.log('hi', person);
}
sayHiTo('gordon')

//V2 Requirements 

// It should have a function to display todos
// It should have a function to add todos
// It should have a function to change todos
// It should have a function to delete todos

//1

function displayTodos() {
console.log('My todos:', todos);
}

displayTodos()
My todos: (3) ["item 1", "item 2", "item 3"]

//2

function addToDo(todo) { 
    todos.push(todo);
    displayTodos();
    }
    addToDo('some stuff')
    displayTodos()

// 3 
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

// 4
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(0)
deleteTodo(2)

