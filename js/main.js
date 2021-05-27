const arrowPrev = document.querySelector('.arrows__prev');
const arrowNext = document.querySelector('.arrows__next');
const sliderBox = document.querySelector('.slider__box');
const sliderSlides = document.querySelectorAll('.slider__slide');
arrowNext.addEventListener('click', sliderGoNext);
arrowPrev.addEventListener('click', sliderGoPrev);

const headerMenu = document.querySelector('.header__menu');
const headerBox = document.querySelector('.header__box');
const headerForm = document.querySelector('.header__form');
const headerSubbox = document.querySelector('.header__subbox');
const wholeBody = document.querySelector('body');
const wholeHTML = document.querySelector('html');
headerMenu.addEventListener('click', menuActive);

function menuActive() {
	headerMenu.classList.toggle('_active');
	headerBox.classList.toggle('_active');
	headerForm.classList.toggle('_active');
	headerSubbox.classList.toggle('_active');
	wholeBody.classList.toggle('_lock');
	wholeHTML.classList.toggle('_lock');
};

const sliderLength = sliderSlides.length;
var sliderLengthCounter = 1;
// initial slider position
sliderPosition = 0;

function sliderGoNext() {
	if (sliderLengthCounter < sliderLength) {
		sliderPosition -= 640;
		sliderBox.style.left = sliderPosition + 'px';
	};
	sliderLengthCounter += 1;

	if (sliderLengthCounter === sliderLength) {
		arrowNext.classList.add('_disabled');
		arrowPrev.classList.remove('_disabled');
	}
};

function sliderGoPrev() {
	if (sliderLengthCounter > 1) {
		sliderPosition += 640;
		sliderBox.style.left = sliderPosition + 'px';
	};
	sliderLengthCounter -= 1;
	if (sliderLengthCounter === 1) {
		arrowPrev.classList.add('_disabled');
	}
	if (sliderLengthCounter < sliderLength) {
		arrowNext.classList.remove('_disabled');
	}
}

