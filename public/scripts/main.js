const button = document.querySelector('#button');
const input = document.querySelector('#input-box');
const form = document.querySelector('#form');
const list = document.querySelector('#list-container');


button.addEventListener('click', addItem);

function addItem(e) {
    // get input value
    var newItem = document.querySelector('#input-box').value;

    // create new li element
    var li = document.createElement('li');
    
    // add class
    li.className = "item";

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    list.appendChild(li);

    input.value = '';
}