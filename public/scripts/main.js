const addButton = document.querySelector('#button');
const input = document.querySelector('#input-box');
const form = document.querySelector('#form');
const listContainer = document.querySelector('#list-container');

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
    checkbox.id = 'checkbox';
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

    // clear input
    input.value = '';
}

// events for edit and delete button
listContainer.addEventListener('click', (e) => {
    // delete
    if (e.target.classList.contains('delete')) {
        const deleteButton = e.target;
        const li = deleteButton.closest('li'); // take the parent li
        li.remove();
    }
});