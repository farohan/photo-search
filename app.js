//Preventing form from refreshing
const form = document.getElementById('image-searcher');

function formHandler(event) {
    event.preventDefault();
}

form.addEventListener('submit', formHandler);

//The actual request function
const gallery = document.getElementById('img-gallery');

function fetchPhotos() {
    gallery.innerHTML = '';

    //Setting up the fetch url
    const accessKey = 'LbrjWfBDlZiVt-4LozPJulF9KBKloXut5L1kz2zIShc';
    const query = document.getElementById('search-bar').value; 
    const url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}`;

    //Making the request
    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            console.log(data);

            data.results.forEach(image => {
                //Creating the elements
                let galleryItem = document.createElement('div');
                let img = document.createElement('img');
                let desc = document.createElement('p');
                let hyperLink = document.createElement('a');
                let openImage = document.createElement('button');

                //Specifying them
                galleryItem.classList.add('gallery-item');

                img.src = image.urls.regular;
                img.alt = image.alt_description;
                img.classList.add('gallery-img');

                let description = image.alt_description;
                let capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
                desc.innerHTML = `${capitalizedDescription}.`;
                desc.style.textAlign = 'center';

                //Download Link Setup
                hyperLink.href = image.links.html;

                //Download Button
                openImage.innerHTML = 'Open Image in Unsplash';
                openImage.classList.add('open-image-btn');

                //Appending everything to the gallery
                gallery.appendChild(galleryItem);
                galleryItem.appendChild(img);
                galleryItem.appendChild(desc);
                galleryItem.appendChild(hyperLink);
                hyperLink.appendChild(openImage);
            });
        })
}
