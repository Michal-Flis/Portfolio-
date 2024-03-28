const moreBtn = document.querySelector('.more-btn');
const imgSlider = document.querySelector('.slider');
const titleSlider = document.querySelector('.title-slider');
const sliderText = document.querySelector('.slider-text');
const backgroundSlider = document.querySelector('.background-slider');
const dots = [...document.querySelectorAll('.dots span')];
const rightArrow = document.querySelector('.fa-angle-right');
const leftArrow = document.querySelector('.fa-angle-left');

const time = 7000;
let active = 0;

const slideList = [
  {
    img: './img/piłka.jpg',
    title: 'Piłka Nożna',
    text: 'Od małego bardzo interesowałem się piłką. W wolnym czasie gram w amatorskiej druzynie Stado Szakali w lidze Bemowskiej, staram się śledzić losy klubów którym kibicuje.',
  },

  {
    img: './img/kodowanie.jpg',
    title: 'Kodowanie',
    text: 'Od trzec lat zajmuję sie programowaniem. W wolnym czasie uczęsie programować, ucze się takich języków jak HTML, CSS, JavaScript. Jestem po jednym kursie i drugim w trakcie.',
  },

  {
    img: './img/fotografia.jpg',
    title: 'Fotografowanie',
    text: 'W wolnym czasie lubię robić zdjęcia, na imprezach czy na spacerach. Lubię dokumentować różne rzeczy i wydarzenia w moim życiu.',
  },

  {
    img: './img/ryby.jpg',
    title: 'Łowienie Ryb',
    text: 'W wolnym czasie głównie w wakacje jak pojade na działkę to lubie łowić ryby. Wtedy mam czas na oczyszczenie głowy i ucieczke od życia coziennego.',
  },
];

const changeDot = () => {
  const activeDot = dots.findIndex((dot) =>
    dot.classList.contains('active-dots'),
  );
  dots[activeDot].classList.remove('active-dots');
  dots[active].classList.add('active-dots');
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  imgSlider.src = slideList[active].img;
  titleSlider.textContent = slideList[active].title;
  sliderText.textContent = slideList[active].text;
  changeDot();
};

const keyChangeSlide = (e) => {
  if (e.keyCode === 39 || e.keyCode === 37) {
    clearInterval(index);
  }

  if (e.keyCode === 39) {
    active++;
    if (active === slideList.length) {
      active = 0;
    }
    imgSlider.src = slideList[active].img;
    titleSlider.textContent = slideList[active].title;
    sliderText.textContent = slideList[active].text;
    changeDot();
    index = setInterval(changeSlide, time);
  } else if (e.keyCode == 37) {
    active--;
    if (active === -1) {
      active = 3;
    }
    imgSlider.src = slideList[active].img;
    titleSlider.textContent = slideList[active].title;
    sliderText.textContent = slideList[active].text;
    changeDot();
    index = setInterval(changeSlide, time);
  }
};

moreBtn.addEventListener('click', () => {
  imgSlider.classList.toggle('blur');
  titleSlider.classList.toggle('active');
  moreBtn.classList.toggle('click-btn');
  sliderText.classList.toggle('active');
  backgroundSlider.classList.toggle('active');
  if (moreBtn.innerHTML === 'Zobacz Więcej') {
    moreBtn.innerHTML = 'Zobacz Mniej';
  } else {
    moreBtn.innerHTML = 'Zobacz Więcej';
  }
});

rightArrow.addEventListener('click', () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  imgSlider.src = slideList[active].img;
  titleSlider.textContent = slideList[active].title;
  sliderText.textContent = slideList[active].text;
  changeDot();
});

leftArrow.addEventListener('click', () => {
  active--;
  if (active === -1) {
    active = 3;
  }
  imgSlider.src = slideList[active].img;
  titleSlider.textContent = slideList[active].title;
  sliderText.textContent = slideList[active].text;
  changeDot();
});

let index = setInterval(changeSlide, time);
window.addEventListener('keydown', keyChangeSlide);
