import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log("gallery:", galleryItems);

const galleryParent = document.querySelector('.gallery');
// console.log(galleryParent);
const markupGallery = addImageToMarkupGallery(galleryItems);
// console.log(markupGallery);
const galleryHtml = addGalleryToHtml(markupGallery, galleryParent);
// console.log(galleryHtml);

function addImageToMarkupGallery(imagesTable) {
  return imagesTable
    .map(
      (image) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                   class="gallery__image"
                   src="${image.preview}"
                   alt="${image.description}"
                />
            </a>
        </div>`
    )
    .join('\r\n');
}

function addGalleryToHtml(gallery, htmlElement) {
  htmlElement.innerHTML = gallery;
}
