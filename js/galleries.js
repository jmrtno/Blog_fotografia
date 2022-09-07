(() => {

  const imageGallery = document.querySelector('.image-gallery');
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('full-img');
  const closeImg = document.getElementById('close-modal');
  document.oncontextmenu = noContextMenu;


  // load items
  window.addEventListener("DOMContentLoaded", () => {
    displayGalleryItems(gallery);
  });

  function displayGalleryItems(galleryItems) {
    let displayGallery = galleryItems.map(function (item) {
      return `<li>
                <img src=${item.img} alt=${item.title} id="myImg"/>
                <div class="item-info">
                  <span>${item.title}</span>
                </div>
              </li>`;
    });
    displayGallery = displayGallery.join("");
    imageGallery.innerHTML = displayGallery;

    const img = document.querySelectorAll("#myImg");
    img.forEach(function (item) {
      item.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = item.src;
      })
    })
  };

  closeImg.addEventListener("click", () => {
    modal.style.display = "none";
  });

  function noContextMenu() {
    return false;
  }

})();