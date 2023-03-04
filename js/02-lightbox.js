import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryImg = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    <div class="gallery__caption">${item.description}</div>
  </a>`;

  gallery.insertAdjacentHTML("beforeend", galleryImg);
});

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionsDelay: 250,
});
