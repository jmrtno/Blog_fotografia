const galleries = [
  {
    title: 'Tokio',
    href: 'gallerytokyo.html',
  },
  {
    title: 'Scandinavia',
    href: 'galleryscandinavia.html',
  },
  {
    title: 'Macro',
    href: 'gallerymacro.html',
  },
];

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdowns = document.querySelector('.dropdown');

window.addEventListener("DOMContentLoaded", function () {
  displayDropdown(galleries);
});

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

dropdownBtn.addEventListener('click', function () {
  dropdowns.classList.toggle('show-dropdown');
});


function displayDropdown(galleryItems) {
  let displayDrop = galleryItems.map(function (item) {
    return `<a href=${item.href}>${item.title}</a>`;
  });
  displayDrop = displayDrop.join("");
  dropdowns.innerHTML = displayDrop;
}