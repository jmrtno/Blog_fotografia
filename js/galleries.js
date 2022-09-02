const gallery = [];

for (let i = 1; i <= 7; i++) {
  gallery.push(
    {
      title: "Tokyo " + i,
      img: "./img/tokyo" + i + ".jpg",
    }
  ) * i;
};

const imageGallery = document.querySelector('.image-gallery');
const fullImg = document.querySelector('.full-img');
const img = document.getElementById('img');

// load items
window.addEventListener("DOMContentLoaded", () => {
  displayGalleryItems(gallery);
});

function displayGalleryItems(galleryItems) {
  let displayGallery = galleryItems.map(function (item) {
    return `<li>
              <img src=${item.img} alt=${item.title} onclick="openFullImg(this.src)"/>
              <div class="item-info">
                <span>${item.title}</span>
              </div>
            </li>`;
  });
  displayGallery = displayGallery.join("");
  imageGallery.innerHTML = displayGallery;
};

function openFullImg(reference) {
  fullImg.style.display = "flex";
  img.src = reference;
};

function closeImg() {
  fullImg.style.display = "none";
};

