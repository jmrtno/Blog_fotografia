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
const dropdowns = document.querySelector('.dropdown-content');

window.addEventListener("DOMContentLoaded", () => {
  displayDropdown(galleries);
});

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

// dropdownBtn.addEventListener('mouseover', function () {
//   dropdowns.style.overflow = 'visible';
//   dropdowns.style.height = '8rem';
// });

// dropdownBtn.addEventListener('mouseout', function () {
//   dropdowns.style.overflow = 'hidden';
//   dropdowns.style.height = '0rem';
// });

// dropdowns.addEventListener('mouseover', function () {
//   dropdowns.style.overflow = 'visible';
//   dropdowns.style.height = '8rem';
// });

// dropdowns.addEventListener('mouseout', function () {
//   dropdowns.style.overflow = 'hidden';
//   dropdowns.style.height = '0rem';
// });

[dropdownBtn, dropdowns].forEach(item => {
  item.addEventListener('mouseover', () => {
    dropdowns.style.overflow = 'visible';
    dropdowns.style.height = '8rem';
  })

  item.addEventListener('mouseout', () => {
    dropdowns.style.overflow = 'hidden';
    dropdowns.style.height = '0rem';
  })
});

function displayDropdown(galleryItems) {
  let displayDrop = galleryItems.map((item) => {
    return `<a href=${item.href}>${item.title}</a>`;
  });
  displayDrop = displayDrop.join("");
  dropdowns.innerHTML = displayDrop;
}