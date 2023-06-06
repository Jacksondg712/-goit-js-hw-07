import { galleryItems } from './gallery-items.js';


console.log(galleryItems);


const ContainGallery = document.querySelector(".gallery");
const galleryElement = galleryItems
.map((element) =>
`<li class= "gallery__item">
 <a class= "gallery__link" href="${element.orininal}">
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
ContainGallery.addEventListener("click", (event) => {
event.preventDefault();
const selectorImage = event.target.src;

const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${selectorImage}">
        <a>Close</a>
    </div>
`, {   onShow: (instance) => {
    instance.element().querySelector('a').onclick = instance.close
}
})


instance.show()});









// let lightbox = new simpleLightbook('.gallery a', {
//     captionData: 'alt',
//     captionDelay: 250,
    
// })

// ContainGallery.insertAdjacentHTML("afterbegin", galleryElement);
// ContainGallery.addEventListener('click', (event) => event.preventDefault());

// const galleryList = document.createElement("li");
    
// galleryList = 
// ` <a href="${element.preview}">
//      <img src="${element.original}" alt="${element.description}"/>
//      </a>          
// `;
// ContainGallery.append(galleryList);
// console.log(galleryList.innerHTML);