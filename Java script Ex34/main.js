

const list = document.querySelector('#list');

function addItem(){


    const newListItem = document.createElement('li');
    newListItem.textContent = 'new item for practice addindg and removimg'
    list.appendChild(newListItem);

    
}

function removeItem(){

    if(list.lastChild){
        list.removeChild(list.lastChild);
    }else alert('walaal kala wareeg');


    
}