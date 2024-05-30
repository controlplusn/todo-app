const button = document.querySelector('#button');
const input = document.querySelector('#input-box');
const form = document.querySelector('#form');
const listContainer = document.querySelector('#list-container');
const list = document.querySelector('.item-list');

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

    // Append checkbox and label to li
    li.appendChild(checkbox);
    li.appendChild(label);

    // Append new li to the list
    listContainer.appendChild(li);

    // clear input
    input.value = '';
}