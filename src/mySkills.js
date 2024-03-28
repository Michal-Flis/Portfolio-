const firstAddBtn = document.querySelector('.firstAdd');
const firstRemoveBtn = document.querySelector('.firstRemove');
const secondAddBtn = document.querySelector('.secondAdd');
const secondRemoveBtn = document.querySelector('.secondRemove');
const thirdAddBtn = document.querySelector('.thirdAdd');
const thirdRemoveBtn = document.querySelector('.thirdRemove');
const oneParagraph = document.querySelector('.firstParagraph');
const twoParagraph = document.querySelector('.secondParagraph');
const threeParagraph = document.querySelector('.thirdParagraph');

const textOne =
  'Tworze strony w programach HTML5, CSS3 i JavaScript. Są to strone oparte o najnowsze technologie.';
const textTwo =
  'Projektuje tak strone żeby była jak najbardziej widoczna w wyszukiwaniach.';
const textThree =
  'Tworze strony oparte o RWD - responsywne z urządzeniami mobilnymi tak jak na telefon lub Ipad.';

let indexFirstText = 0;
let indexSecondText = 0;
let indexThirdText = 0;
let idTimeOne;
let idTimeTwo;
let idTimeThree;

const addFirstText = () => {
  firstAddBtn.classList.add('active');
  firstRemoveBtn.classList.remove('active');
  oneParagraph.textContent += textOne[indexFirstText];
  indexFirstText++;
  oneParagraph.style.minHeight = '140px';

  if (indexFirstText === textOne.length) return;
  idTimeOne = setTimeout(addFirstText, 50);
};

const removeFirstText = () => {
  oneParagraph.textContent = '';
  indexFirstText = 0;
  oneParagraph.style.minHeight = '0';
  firstAddBtn.classList.remove('active');
  firstRemoveBtn.classList.add('active');
  clearTimeout(idTimeOne);
};

const addSecondText = () => {
  secondAddBtn.classList.add('active');
  secondRemoveBtn.classList.remove('active');
  twoParagraph.textContent += textTwo[indexSecondText];
  indexSecondText++;
  twoParagraph.style.minHeight = '140px';

  if (indexSecondText === textTwo.length) return;
  idTimeTwo = setTimeout(addSecondText, 50);
};

const removeSecondText = () => {
  twoParagraph.textContent = '';
  indexSecondText = 0;
  twoParagraph.style.minHeight = '0';
  secondAddBtn.classList.remove('active');
  secondRemoveBtn.classList.add('active');
  clearTimeout(idTimeTwo);
};

const addThirdText = () => {
  thirdAddBtn.classList.add('active');
  thirdRemoveBtn.classList.remove('active');
  threeParagraph.textContent += textThree[indexThirdText];
  indexThirdText++;
  threeParagraph.style.minHeight = '140px';

  if (indexThirdText === textThree.length) return;
  idTimeThree = setTimeout(addThirdText, 50);
};

const removeThirdText = () => {
  threeParagraph.textContent = '';
  indexThirdText = 0;
  thirdAddBtn.classList.remove('active');
  thirdRemoveBtn.classList.add('active');
  threeParagraph.style.minHeight = '0';
  clearTimeout(idTimeThree);
};

firstAddBtn.addEventListener('click', addFirstText);
firstRemoveBtn.addEventListener('click', removeFirstText);
secondAddBtn.addEventListener('click', addSecondText);
secondRemoveBtn.addEventListener('click', removeSecondText);
thirdAddBtn.addEventListener('click', addThirdText);
thirdRemoveBtn.addEventListener('click', removeThirdText);

console.log(document.querySelector('.all-pictures').clientHeight);
