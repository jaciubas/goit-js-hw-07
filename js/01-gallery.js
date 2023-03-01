import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryImg = `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`;

  gallery.insertAdjacentHTML("beforeend", galleryImg);
});
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
        <img width="1400" height="900" src="${event.target.dataset.source}">
        `
  );
  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
