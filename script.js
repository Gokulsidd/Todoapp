//selectors
var todoInput = document.querySelector('.input-value');
var addBtn = document.querySelector('.add-btn');
var todoList = document.querySelector('.todo-list');

//events
addBtn.addEventListener('click', addTodo);
addBtn.addEventListener('enter', addTodo);

//functions
function addTodo(event){

    event.preventDefault();
    
    if(todoInput.value == ''){
        alert('empty')
    }
    else{
    //create li tag
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoList.appendChild(newTodo);
    //create checkbutton
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    checkBtn.addEventListener('click' , checked);
    checkBtn.classList.add('check-btn');
    newTodo.appendChild(checkBtn);
    //create deletebutton
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-square-xmark"></i>';
    deleteBtn.addEventListener('click' , deleteTodo);
    deleteBtn.classList.add('delete-btn');
    newTodo.appendChild(deleteBtn);
    
    todoInput.value = '';
    }
}

function deleteTodo(e){
    e.preventDefault();
    e.target.parentElement.remove();
}

function checked(e){
    e.preventDefault();
    e.target.parentElement.classList.toggle('checked');
}

function delChecked(e){

    const tags = document.querySelectorAll('.checked');
    tags.forEach( tag => tag.remove())
}

function delAll(){
    const tags = document.querySelectorAll('.todo-item');
    tags.forEach( tag => tag.remove())
}






