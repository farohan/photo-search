const entireForm = document.getElementById('search-form');

const searchField = document.getElementById('search-field');
const limitNum = document.getElementById('limit');

const imageGallery = document.getElementById('img-gallery');

function search() {
    if (imageGallery.hasChildNodes()) 
        imageGallery.textContent = '';

    let content = searchField.value;

    for (let i = 1; i <= limitNum.value; i++) {
        console.log(i);
        let galleryImg = document.createElement('img');
        galleryImg.src = `https://source.unsplash.com/random/?sig=${i}/&${content}`;
        galleryImg.alt = content;
        galleryImg.className = 'gallery-img';

        let galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.appendChild(galleryImg);
        imageGallery.appendChild(galleryItem);
    }
}

function handleForm(event) {
    event.preventDefault();
}

entireForm.addEventListener('submit', handleForm);
