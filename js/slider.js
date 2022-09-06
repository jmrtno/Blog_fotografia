const sliderImgs = [
  {
    background: "background-image: url('img/banner1.jpg');",
    title: 'TOKYO',
    desc: 'Maravillas al otro lado del mundo.',
    href: 'gallerytokyo.html',
  },
  {
    background: "background-image: url('img/banner2.jpg');",
    title: 'SCANDINAVIA',
    desc: 'Un ambiente único.',
    href: 'galleryscandinavia.html',
  },
  {
    background: "background-image: url('img/banner3.jpg');",
    title: 'MACRO',
    desc: 'Un mundo que se escapa a simple vista.',
    href: 'gallerymacro.html',
  },
]
const img = document.querySelector('.slide-img');
const title = document.getElementById('title');
const desc = document.getElementById('desc');
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slide = document.getElementById('slide');
const href = document.getElementById('href');

// next/prev slide btn
nextBtn.addEventListener('click', () => {
  nextSlide()
});
prevBtn.addEventListener('click', () => {
  prevSlide();
});


// set starting item
let currentItem = 0;

// show slide based on item
function displaySlider() {
  const slider = sliderImgs[currentItem];
  img.style = slider.background;
  title.textContent = slider.title;
  desc.textContent = slider.desc;
  href.href = slider.href;
};

// next/prev functions
let nextSlide = () => {
  currentItem++;
  if (currentItem > sliderImgs.length - 1) {
    currentItem = 0;
  }
  displaySlider();
};

let prevSlide = () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = sliderImgs.length - 1;
  }
  displaySlider();
};

let initSlide = setInterval(() => { nextSlide() }, 3000);

slide.addEventListener('mouseover', () => {
  clearInterval(initSlide);
})
slide.addEventListener('mouseout', () => {
  initSlide = setInterval(() => { nextSlide() }, 3000);
})
