const button = document.querySelector('#button');
const input = document.querySelector('#input-box');
const form = document.querySelector('#form');
const list = document.querySelector('#list-container');


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

    // create new icon element
    var icon = document.createElement('i');
    icon.className = 'bx bx-dots-horizontal-rounded';

    // Append checkbox and label to li
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(icon);

    // Append new li to the list
    list.appendChild(li);

    // clear input
    input.value = '';

}