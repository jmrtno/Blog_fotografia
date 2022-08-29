const galeries = [
  {
    title: 'Tokio',
    href: 'galerytokyo.html',
  },
  {
    title: 'Dinamarca',
    href: '#',
  },
  {
    title: 'Macro',
    href: '#',
  },
];

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdowns = document.querySelector('.dropdown');

window.addEventListener("DOMContentLoaded", function () {
  displayDropdown(galeries);
});

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

dropdownBtn.addEventListener('click', function () {
  dropdowns.classList.toggle('show-dropdown');
});


function displayDropdown(galeryItems) {
  let displayDrop = galeryItems.map(function (item) {
    return `<a href=${item.href}>${item.title}</a>`;
  });
  displayDrop = displayDrop.join("");
  dropdowns.innerHTML = displayDrop;
}