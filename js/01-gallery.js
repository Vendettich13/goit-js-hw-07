import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryList: document.querySelector(".gallery"),
};

const item = ({ description, original, preview }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const render = () => {
  const list = galleryItems.map(item).join("");

  refs.galleryList.innerHTML = "";
  refs.galleryList.insertAdjacentHTML("beforeend", list);
};

render();

refs.galleryList.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  const instance = basicLightbox.create(`
    <div class="modal">
    <img
    class="gallery__image"
    src="${e.target.dataset.source}"
    />
    </div>
    `);

  instance.show();

  const modal = document.querySelector(".basicLightbox");
  modal.addEventListener("click", closeModal);
  function closeModal() {
    instance.close();
  }
  window.addEventListener("keydown", onPress);
  function onPress(e) {
    if (e.code === "Escape" && instance.visible()) {
      instance.close();
    }
  }
}
