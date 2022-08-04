//selctors 
const todoInput = document.querySelector('.todo-input'); 
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 
const filterOption = document.querySelector('.filter-todo'); 

//event listeners 
document.addEventListener('DOMContentLoaded', getTodos); 
todoButton.addEventListener('click', addTodo); 
todoList.addEventListener('click', deleteCheck); 
filterOption.addEventListener('click', filterTodo); 


//functions 

function addTodo(event){
    //prevent form from submitting/stop from refreshing page
    event.preventDefault(); 

    //Create ToDo Div
    const todoDiv = document.createElement('div'); 
    todoDiv.classList.add('todo'); 

        //Create list item that goes in our ToDo Div
        const newTodo = document.createElement('li'); 
        newTodo.innerText = todoInput.value; 
        newTodo.classList.add('todo-item'); 
        //adding the newTodo list item inside of our Div
        todoDiv.appendChild(newTodo); 

        //add todo to local storage 
        saveLocalTodos(todoInput.value); 

        //create check mark button that goes in our ToDo Div
        const completedButton = document.createElement('button'); 
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'; 
        completedButton.classList.add("complete-btn"); 
        // adding the completed-btn to our ToDo Div 
        todoDiv.appendChild(completedButton); 

        //create trash button that goes in our ToDo Div
        const trashButton = document.createElement('button'); 
        trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; 
        trashButton.classList.add("trash-btn"); 
        todoDiv.appendChild(trashButton);

    //insert into list 
    todoList.appendChild(todoDiv); 

    //Clear todo input value 
    todoInput.value = ""; 
}

function deleteCheck(e){
    const item = e.target; 
    
    // delete the todo item 
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation 
        todo.classList.add('fall'); 
        removeLocalTodos(todo); 
        todo.addEventListener('transitionend', function(){
            todo.remove(); 
        });
        
    }

    //clicking the check mark 
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement; 
        todo.classList.toggle("completed"); 
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) { 
        const mStyle = todo.style;  
        console.log(mStyle); 
            if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (todo.classList.contains('completed')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
       }
    });
}

function saveLocalTodos(todo){
    // check if i already have things in my local storage

    let todos; 
    if(localStorage.getItem('todos') === null){
        todos = []; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos')); 
    }

    todos.push(todo); 
    localStorage.setItem('todos', JSON.stringify(todos)); 
}

function getTodos(){
    let todos; 
    if(localStorage.getItem('todos') === null){
        todos = []; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos')); 
    }

    todos.forEach(function(todo){
            //Create ToDo Div
    const todoDiv = document.createElement('div'); 
    todoDiv.classList.add('todo'); 

        //Create list item that goes in our ToDo Div
        const newTodo = document.createElement('li'); 
        newTodo.innerText = todo; 
        newTodo.classList.add('todo-item'); 
        //adding the newTodo list item inside of our Div
        todoDiv.appendChild(newTodo); 


        //create check mark button that goes in our ToDo Div
        const completedButton = document.createElement('button'); 
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'; 
        completedButton.classList.add("complete-btn"); 
        // adding the completed-btn to our ToDo Div 
        todoDiv.appendChild(completedButton); 

        //create trash button that goes in our ToDo Div
        const trashButton = document.createElement('button'); 
        trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; 
        trashButton.classList.add("trash-btn"); 
        todoDiv.appendChild(trashButton);

    //insert into list 
    todoList.appendChild(todoDiv); 
    })
}

function removeLocalTodos(todo){
    let todos; 
    if(localStorage.getItem('todos') === null){
        todos = []; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos')); 
    }

    const todoIndex = todo.children[0].innerText; 
    todos.splice(todos.indexOf(todoIndex), 1); 
    localStorage.setItem("todos", JSON.stringify(todos)); 
}