const addButton = document.querySelector('#button');
const input = document.querySelector('#input-box');
const form = document.querySelector('#form');
const listContainer = document.querySelector('#list-container');

// load tasks from local storage 
document.addEventListener('DOMContentLoaded', loadTasks);

// Add item
addButton.addEventListener('click', addItem);

function addItem(e) {
    e.preventDefault();
    // Text

    // get input value
    var newItem = input.value;

    // if text input is empty
    if (newItem.trim() === "") {
        return;
    }

    // create new li element
    var li = document.createElement('li');

    // create the left div
    var leftDiv = document.createElement('div');
    leftDiv.className = 'left'

    // create new checkbox element
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'chbox';
    leftDiv.appendChild(checkbox);
     
    // create new label element
    var label = document.createElement('label');
    label.className = 'item';
    label.appendChild(document.createTextNode(newItem));
    leftDiv.appendChild(label);

    // create div for options
    var optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    // create new edit button element
    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    optionsDiv.appendChild(editBtn);

    // create new delete button element
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    optionsDiv.appendChild(deleteBtn);

    // Append leftDiv and optionsDiv to li
    li.appendChild(leftDiv);
    li.appendChild(optionsDiv);
        
    // Append new li to the listContainer
    listContainer.appendChild(li);

    saveTasks(newItem);

    // clear input
    input.value = '';
}

function saveTasks(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        // create new li element
        var li = document.createElement('li');

        // create the left div
        var leftDiv = document.createElement('div');
        leftDiv.className = 'left'

        // create new checkbox element
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'chbox';
        leftDiv.appendChild(checkbox);
        
        // create new label element
        var label = document.createElement('label');
        label.className = 'item';
        label.appendChild(document.createTextNode(task));
        leftDiv.appendChild(label);

        // create div for options
        var optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        // create new edit button element
        const editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.appendChild(document.createTextNode('Edit'));
        optionsDiv.appendChild(editBtn);

        // create new delete button element
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.appendChild(document.createTextNode('Delete'));
        optionsDiv.appendChild(deleteBtn);

        // Append leftDiv and optionsDiv to li
        li.appendChild(leftDiv);
        li.appendChild(optionsDiv);

        // Append new li to the listContainer
        listContainer.appendChild(li);
    });
}

// events for edit and delete button
listContainer.addEventListener('click', (e) => {
    // edit
    if(e.target.classList.contains('edit')) {
        // edit
        const editButton = e.target;
        const li = editButton.closest('li');

        // remove edit button
        editButton.remove();

        // create new save button
        const saveButton = document.createElement('button');
        saveButton.className = 'save';
        saveButton.appendChild(document.createTextNode('Save'));

        // create an input element
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'newItem';

        // get the label
        const label = li.querySelector('.item');
        input.value = label.textContent.trim();

        // clear content of the li and append the input
        const left = li.querySelector('.left');
        left.textContent = '';
        left.append(input);

        // prepend save button
        const options = li.querySelector('.options');
        options.prepend(saveButton);

        // save the edited text
        saveButton.addEventListener('click', () => {
            // update the text input
            label.textContent = input.value;

            // restore
            left.innerHTML = `
                <input type="checkbox" id="checkbox" class="chbox">
                <label class="item">${input.value}</label>
            `;

            // re-add the edit button
            saveButton.remove();
            
            options.prepend(editButton);
        });
    }

    // delete
    if (e.target.classList.contains('delete')) {
        const deleteButton = e.target;
        const li = deleteButton.closest('li'); // take the parent li
        const task = li.querySelector('.item').textContent.trim();
        li.remove();

        removeTasks(task);
    }
});


function removeTasks(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((storedTask, index) => {
        if(storedTask === task) {
            tasks.splice(index, 1);
            console.log(storedTask);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}