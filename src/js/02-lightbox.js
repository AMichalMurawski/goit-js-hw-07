import { galleryItems } from "./gallery-items.js";

const galleryParent = document.querySelector(".gallery");
const markupGallery = addImageToMarkupGallery(galleryItems);
const galleryHtml = addGalleryToHtml(markupGallery, galleryParent);
galleryParent.addEventListener("click", imageClick);

function addImageToMarkupGallery(imagesTable) {
  return imagesTable
    .map(
      (image) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                   class="gallery__image"
                   src="${image.preview}"
                   data-source="${image.original}"
                   alt="${image.description}"
                />
            </a>
        </div>`
    )
    .join("\r\n");
}

function addGalleryToHtml(gallery, htmlElement) {
  htmlElement.innerHTML = gallery;
}

function imageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
}
