const sliderImgs = [
  {
    background: "background-image: url('img/banner1.jpg');",
    title: 'TOKYO',
    desc: 'Maravillas al otro lado del mundo.'
  },
  {
    background: "background-image: url('img/banner2.jpg');",
    title: 'DENMARK',
    desc: 'Un ambiente único.'
  },
  {
    background: "background-image: url('img/banner3.jpg');",
    title: 'MACRO',
    desc: 'Un mundo que se escapa a simple vista.'
  },
]
const img = document.querySelector('.slide-img');
const title = document.getElementById('title');
const desc = document.getElementById('desc');
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// next/prev slide btn
nextBtn.addEventListener('click', function () {
  nextSlide()
});
prevBtn.addEventListener('click', function () {
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
};

// next/prev functions
let nextSlide = function () {
  currentItem++;
  if (currentItem > sliderImgs.length - 1) {
    currentItem = 0;
  }
  displaySlider();
};

let prevSlide = function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = sliderImgs.length - 1;
  }
  displaySlider();
};

setInterval(function () {
  nextSlide()
}, 5000);
