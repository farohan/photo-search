//Form for searching
const entireForm = document.getElementById('search-form');

//Grabbing the search bar and limit bar
const searchField = document.getElementById('search-field');
const limitNum = document.getElementById('limit');

//Declaring future variables
let randomImageURL = 'https://source.unsplash.com/random/?';
let content;
let limit;

function search() {
    content = searchField.value;
    limit = limitNum.value;
}

//Stops the form from refreshing
function handleForm(event) {
    event.preventDefault();
}

entireForm.addEventListener('submit', handleForm);
