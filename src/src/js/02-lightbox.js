import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const ContainGallery = document.querySelector(".gallery");
const galleryElement = galleryItems
.map((element) =>
`<li class= "gallery__item">
 <a class= "gallery__link" href="${element.original}">
    <img
        class="gallery__image"
        src= "${element.preview}"
        alt= "${element.description}"
        />
    </a>
    </li>`
)
.join("");

ContainGallery.insertAdjacentHTML("afterbegin", galleryElement);
ContainGallery.addEventListener("click", (event) => 
    event.preventDefault())
    let lightbox = new SimpleLightbox('.gallery a', { 
        captionData: "alt",
        captionDelay: 250,
    
});