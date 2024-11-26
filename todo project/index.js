
let todoList = [
    { item:'basant' ,
    duedate:'14/5/2024'},
    {
        item:'kisan',
        duedate:'12/11/2024'
    }

];
DisplayItems();
function Addtodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    todoList.push({item:todoItem, duedate:todoDate});
    inputElement.value = '';
    dateElement.value= '';

    DisplayItems();


}

function DisplayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    
    for(let i=0;i<todoList.length;i++){
        let {item,duedate} = todoList[i];
        newHtml += `
        
        <span>${item}</span>
        <span>${duedate}</span>
        <button  class="btn-delete" onclick="todoList.splice(${i},1),DisplayItems()">Delete</button>
        
        `;
    }
    containerElement.innerHTML = newHtml;

}