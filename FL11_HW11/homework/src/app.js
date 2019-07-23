let rootNode = document.getElementById('root');
let plusBtn = document.getElementById('plusBtn');
let input = document.getElementById('newAction');
const maxLengthLists = 21;

function addAction(inputText){
    
    let div = document.createElement('div');
    div.classList.add('container');
    div.draggable = true;
    div.addEventListener('dragstart', (event) => {
        console.log('dragstart');
        
        event.dataTransfer.setData('text', rootNode.childNodes.length);
    })
    div.addEventListener('drop', (event) => {
        console.log('drop');
        
        const div = event.dataTransfer.getData('text');
        const pointA = document.getElementById(div)
        const pointB = document.getElementById(event.target.parentNode.id)
        rootNode.insertBefore(pointA, pointB);
        pointA.remove;
    })
    div.setAttribute('id', rootNode.childNodes.length);
    rootNode.append(div);
    let actionCheckBox = document.createElement('input');
    actionCheckBox.setAttribute('type', 'checkbox');  
    let actionContent = document.createElement('p');
    actionContent.innerHTML = inputText;
    let actionEdit = document.createElement('i');
    actionEdit.classList.add('material-icons');
    actionEdit.innerHTML = 'edit';
    let actionDelete = document.createElement('i');
    actionDelete.classList.add('material-icons');
    actionDelete.classList.add('deleteIcon');
    actionDelete.innerHTML = 'delete';

    div.appendChild(actionCheckBox);
    div.appendChild(actionContent);
    div.appendChild(actionEdit);
    div.appendChild(actionDelete);

    input.value = '';
    plusBtn.classList.remove('activeBtn');

    checkMaxLengthList();    
    editAction(actionEdit, div);
    doneAction(actionCheckBox);
    deleteAction(actionDelete);
}

plusBtn.addEventListener('click', () => {
    let inputValue = document.getElementById('newAction').value;
    let listLength = rootNode.childNodes;
    if(inputValue.length > 0 && listLength.length < maxLengthLists){
    addAction(inputValue);
    }
})

function disabledBtn(){
    let input = document.getElementById('newAction');
    input.addEventListener('input', () => {
        if(input.value.length > 0){
            plusBtn.classList.add('activeBtn');
        }else{
            plusBtn.classList.remove('activeBtn');
        }
    })
}

disabledBtn();

function checkMaxLengthList(){
    let listLength = rootNode.childNodes;
    if (listLength.length === maxLengthLists){
        let notifi = document.getElementById('message');
        notifi.classList.remove('notification-off');
        plusBtn.classList.remove('activeBtn');
        input.disabled = true;
    }
}

function deleteAction(delItem){
    delItem.addEventListener('click', () => {
        let divDel = delItem.parentElement;
        divDel.remove();
        input.disabled = false;
        let notifi = document.getElementById('message');
        notifi.classList.add('notification-off');
    })
}

function editAction(editItem ,parentDiv){
    editItem.addEventListener('click', () => {
        while(parentDiv.firstChild){
            parentDiv.removeChild(parentDiv.firstChild);
        }
        let editInput = document.createElement('input');
        editInput.classList.add('edit-input');
        parentDiv.append(editInput);
        let saveEditInput = document.createElement('i');
        saveEditInput.classList.add('material-icons');
        saveEditInput.innerHTML = 'save';
        parentDiv.append(saveEditInput);
        let editInputValue = parentDiv.firstElementChild;

        saveEditInput.addEventListener('click', () => {
            addAction(editInputValue.value);
            let div = saveEditInput.parentElement;
            div.style.display = 'none';
        }) 
    })
}

function doneAction(checkbox){
    checkbox.addEventListener('click', () => {
        checkbox.disabled = true;
    })
}


