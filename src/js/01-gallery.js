import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log("gallery:", galleryItems);

const galleryParent = document.querySelector(".gallery");
// console.log(galleryParent);
const markupGallery = addImageToMarkupGallery(galleryItems);
// console.log(markupGallery);
const galleryHtml = addGalleryToHtml(markupGallery, galleryParent);
// console.log(galleryHtml);
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

  const lightboxDiv = document.createElement("div");
  const lightboxImg = event.target.cloneNode(true);
  lightboxImg.src = event.target.getAttribute("data-source");
  lightboxDiv.append(lightboxImg);
  const instance = basicLightbox.create(lightboxDiv);
  instance.show(
    (window.onkeydown = function (e) {
      if (e.keyCode === 27 && instance.visible() === true) {
        instance.close();
        console.log("close instance");
      }
    })
  );
}

// onShow: (instance) => {
//   document.onkeydown = function (e) {
//     if (e.keyCode === 27) {
//       instance.close();
//     }
//     console.log("close instance");
//   };
// };

// window.onkeydown = function (e) {
//   if (e.keyCode === 27) { instance.close()
//   }
// };
