'use strict';

const addTask = document.querySelector('.open-new-task');
const newTask = document.querySelector('.new-task');
const done = document.querySelector('#submit');
const displayList = document.querySelector('.display-list');
const clearBtn = document.querySelector('.btn-clear');

let text;

function newTaskElement() {
	text = document.querySelector('#text-field').value;
	// add as a new list item
	if (!text) displayList.innerHTML += '';
	else {
		let li = document.createElement('li');
		li.setAttribute('id', text);
		li.appendChild(document.createTextNode(text));
		displayList.appendChild(li);
	}
}

// opening a new task menu
addTask.addEventListener('click', function () {
	newTask.classList.remove('hidden');
});

// adding a new task to the list
done.addEventListener('click', function () {
	// display text input into list
	newTaskElement();
	document.querySelector('#text-field').value = '';
	// close new task window
	newTask.classList.add('hidden');
});

// completing a task
displayList.addEventListener('click', function (e) {
	if (e.target.innerText) {
		document.getElementById(e.target.textContent).style.color = '#e807077a';
		document.getElementById(e.target.textContent).style.border = 'none';
		document.getElementById(e.target.textContent).style.textDecoration =
			'line-through';
	}
	text = '';
});

// clearing all tasks
clearBtn.addEventListener('click', function () {
	let compLi = document.querySelectorAll('li');
	for (let i = 0; i < compLi.length; i++) {
		if (
			document.querySelector('li').style.textDecoration === 'line-through'
		)
			compLi[i].style.display = 'none';
	}
});
