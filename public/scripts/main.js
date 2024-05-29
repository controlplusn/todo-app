const button = document.querySelector('#button');
const input = document.querySelector('#input-box');
const form = document.querySelector('#form');
const listContainer = document.querySelector('#list-container');
const list = document.querySelector('.item-list');
const icon = document.querySelector('.bx.bx-dots-horizontal-rounded');

// Add item
button.addEventListener('click', addItem);

function addItem(e) {
    e.preventDefault();
    // Text

    // get input value
    var newItem = input.value;

    // if text input is empty
    if (newItem.trim === "") {
        return;
    }

    // create new li element
    var li = document.createElement('li');

    // create new checkbox element
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'chbox';
     
    // create new label element
    var label = document.createElement('label');
    label.className = 'item';
    label.appendChild(document.createTextNode(newItem));
    console.log(label);

    // create new icon element
    var icon = document.createElement('i');
    icon.className = 'bx bx-dots-horizontal-rounded';

    // Append checkbox and label to li
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(icon);

    // Append new li to the list
    listContainer.appendChild(li);

    // clear input
    input.value = '';
}

// settings
icon.addEventListener("click", editTask);

function editTask(e) {
    e.preventDefault();

    // create new div element with menu class
    var menu = document.createElement('div');
    menu.className = 'menu';
    
    // create ul element inside the div
    var settings = document.createElement('ul');
    settings.id = 'settings';
    settings.className = 'settings';

    // Add new edit label element inside the li
    var editLi = document.createElement('li');
    var editLabel = document.createElement('label');
    editLabel.className = 'edit';
    editLabel.appendChild(document.createTextNode("Edit"));
    editLi.appendChild(editLabel);
    
    // Add new delete label element inside the li
    var deleteLi = document.createElement('li');
    var deleteLabel = document.createElement('label');
    deleteLabel.className = 'delete';
    deleteLabel.appendChild(document.createTextNode("Delete"));
    deleteLi.appendChild(deleteLabel);

    // append li elements to ul
    settings.appendChild(editLi);
    settings.appendChild(deleteLi);

    // append ul to div
    menu.appendChild(settings);

    // append menu div to the parent of the clicked icon
    e.target.parentElement.appendChild(menu);
}