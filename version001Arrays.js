//V1 requirements 

// It should have a place to store todos
// It should have a way to display todos
// It should have a way to add new todos
// It should have a way to change a todo
// It should have a way to delete a todo

//1 arrays
//how to write & declare the variable
let todos = ['item 1', 'item 2', 'item 3'];

//2 
//how to display contents of the array and make it print out other text
console.log('My Todos:', todos);

//3
//using a method how to add items to end of the array
todos.push('item 4')
todos.push('item 5')

//4
//how to access each element and change the element using dot notation
todos[0] = 'item 1 updated';

//5
//how to delete items using splice method! first num is where to start & 2nd is how many to delete
todos.splice(0, 1)
todos.splice(3, 1)
