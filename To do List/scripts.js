//SELECTORS - We have linked our HTML to Javascript via classes which are in '' these - We have given these a reference name each and firstly we are calling the todoButton element.

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');











//EVENT LISTENERS - We are adding an onclick event, which creates an addTodo Function.

todoButton.addEventListener("click", addTodo);


todoList.addEventListener('click', deleteCheck);







//FUNCTIONS - We are now creating the 'addTodo' Function which is implemented on click of button.

function addTodo(event) {
    
    //The below event.preventDefault(); prevents the form from submitting and refreshing the page upon clicking.
 
    event.preventDefault();

    /*
    Here we are firstly going to create a Todo DIV which holds the HTML needed for each list line item.
    Again below with the 'todoDiv' we are creating an element, instead of linking it to HTML we are now going to generate HTML.
    We have generate a DIV element within HTML with the below Javascript.
    */

    const todoDiv = document.createElement('div');

       
    //We are now going to add a class to our generated DIV element.

    todoDiv.classList.add('todo');

    //We now have an empty div with the class of 'todo'.

    //Below we are going to generate the <li></li> which will go in our DIV.

    const newTodo = document.createElement('li');

    //Below we are calling our generated <li></li> and giving it an innerText of the below, making it <li>This is my Innet Text</li>.
        
    newTodo.innerText = todoInput.value;

    //Below we are giving this generated element a class which we can use in CSS to style it.

    newTodo.classList.add('todo-item');


    //The below is appending the DIV with our generated <li></li> element. 

    /*
    The below is appending the DIV with our generated <li></li> element. 

    Creating something like this..

    <div class="todo">
        <li class="todo-item">

        </li>
    </div>

    */

    todoDiv.appendChild(newTodo);

    /* 
    We are going to be creating two buttons below, 
    one being a 'Completed' button and the other being a 'delete item' button.


    The completed button has been created below as 'completedButton'
    and has also been given a list item with a particular icon from the fontawesome
    library we linked earlier on.
    
    Below this we will be giving it a class of "complete-btn".

    Finally we will be appending it to the original DIV similar to before,
    creating something like so..

    <div class="todo">
        <li class="todo-item">

        </li>
        <i class="fas fa-check"></i>

    </div>

    */


    //Here is our complete button.

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");

    //Below we are appending.

    todoDiv.appendChild(completedButton);


    //Here is our delete button.

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");

    //Below we are appending again.

    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    //Below we are clearing INPUT VALUE
    todoInput.value = '';
}


function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}