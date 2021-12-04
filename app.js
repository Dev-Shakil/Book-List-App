//Constructor..
function Book(name, author, type) {
	this.name = name;
	this.author = author;
	this.type = type;
}

//display constructor..
function display() {

}
//add method to display prototype..
display.prototype.add = function (book) {
	let uiString = `
		<tr>
			<td>${book.name}</td>
			<td>${book.author}</td>
			<td>${book.type}</td>
		</tr>
	`;
	let tbody = document.getElementById('tbody');
	tbody.innerHTML += uiString;
}
//implimenting clear function
display.prototype.clear = function () {
	let libraryForm = document.getElementById('libraryForm');
	libraryForm.reset();
}
//implimenting the validate function..
display.prototype.validate = function (book) {
	if (book.name.length < 2 || book.author.length < 2) {
		return false;
	}
	else {
		return true;
	}
}

//add submit event listener to libraryForm..
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {

	let name = document.getElementById('bookName').value;
	let author = document.getElementById('authorName').value;
	let fiction = document.getElementById('fiction');
	let programming = document.getElementById('programming');
	let cooking = document.getElementById('cooking');
	let type;
	if (fiction.checked) {
		type = fiction.value;
	}
	else if (programming.checked) {
		type = programming.value;
	}
	else if (cooking.checked) {
		type = cooking.value;
	}
	let book = new Book(name, author, type)

	let Display = new display();
	if (Display.validate(book)) {
		Display.add(book);
		Display.clear();

	}
	else {
		console.log("error");
	}
	console.log("You have submited form")
	console.log(book);
	e.preventDefault();
}
console.log("hello bangla")

let submitBtn = document.getElementById('submitBtn');
