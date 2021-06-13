
let todoList = document.querySelector('input');
let btn = document.querySelector('button');
let output = document.querySelector('ul');
let liElement = document.createElement('li');
let child = output.appendChild(liElement);

btn.addEventListener('click', function () {
    child.innerHTML = todoList.value;
    todoList.value = '';
    liElement = document.createElement('li');
    child = output.appendChild(liElement);
});


(async function fetchTodoList() {
    const response = await fetch('http://localhost:4000/todolist')
    const data = await response.json()
    for (let i=0; i<10; i++) {
        console.log(data[i]);
        liElement = document.createElement('li');
        child = output.appendChild(liElement);
        child.innerHTML = 'UserId: ' + data[i].userId + ',' + ' id: ' + data[i].id + ',' + ' Title: ' + data[i].title + ',' + ' Completed: ' + data[i].completed;
    }
})();


