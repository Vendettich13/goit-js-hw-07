import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  galleryList: document.querySelector(".gallery"),
};

const item = ({ description, original, preview }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const list = galleryItems.map(item).join("");

refs.galleryList.innerHTML = "";
refs.galleryList.insertAdjacentHTML("beforeend", list);

refs.galleryList.addEventListener("click", onClick);

function onClick(e) {
  if (e.currentTarget === e.target) return;
  e.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
