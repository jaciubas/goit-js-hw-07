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

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgSrcOrginal = e.target.dataset.source;
  const modal = basicLightbox.create(`<img
    src="${imgSrcOrginal}"
  />}"`);
  modal.show();
});
