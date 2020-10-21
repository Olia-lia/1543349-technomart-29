
//Форма обратной связи

const modalFeedback = document.querySelector(".modal-feedback");
const openForm = document.querySelector(".open-form");
const closeForm = modalFeedback.querySelector(".modal-close");
const modalForm = modalFeedback.querySelector(".feedback-form");
const nameFieldForm = modalFeedback.querySelector(".form-name");
const emailFieldForm = modalFeedback.querySelector(".form-email");
const textFieldForm = modalFeedback.querySelector(".form-text");

const isStorageSupport = true;
const storage = "";

openForm.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalFeedback.classList.add("modal-show");
  nameFieldForm.focus();
});

closeForm.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalFeedback.classList.remove("modal-show");
});



modalForm.addEventListener("submit", function (evt) {
 
  if (!nameFieldForm.value || !emailFieldForm.value || !textFieldForm.value) {
    evt.preventDefault();}
    else  {
      if (isStorageSupport) {
        localStorage.setItem("emaill", emailFieldForm.value);
      }
    }
  });


document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
    }
  }
});



//Карта

const mapLink = document.querySelector(".modal-map-link");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show-map");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show-map");
});


document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show-map")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show-map");
    }
  }
});


//Слайдер

const slides = document.querySelectorAll(".promo-slide"); 
const controls = document.querySelectorAll(".slider-control");
const nextSlide = document.querySelector(".slider-arrow-right");
const previousSlide = document.querySelector(".slider-arrow-left");


let slideNumber = 1;

showSlide(slideNumber);

function showSlide(n) {
  let i;
  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide-current");
  }
  for (i = 0; i < controls.length; i++) {
    controls[i].classList.remove("slider-control-current"); 
  }

  slides[slideNumber-1].classList.add("slide-current");
  controls[slideNumber-1].classList.add("slider-control-current");};


  function nextSlides(n) {
    showSlide(slideNumber += 1);
  }
  function currentSlide (n) {
    showSlide(slideNumber = n);
  }
  nextSlide.onclick = function() {
    nextSlides(-1);
  }

  previousSlide.onclick = function() {
    nextSlides(+1);
  }  




const slidesService = document.querySelectorAll(".slide-service"); 

const controlService = document.querySelectorAll(".service-control");

let slideIndex = 1;


showService(slideIndex);

function showService(n) {
  let i;
  if (n > slidesService.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidesService.length;
  }
  for (i = 0; i < slidesService.length; i++) {
    slidesService[i].classList.remove("slide-current");
  }
  for (i = 0; i < controlService.length; i++) {
    controlService[i].classList.remove("service-current"); 
  }

  slidesService[slideIndex-1].classList.add("slide-current");
  controlService[slideIndex-1].classList.add("service-current");};


 function currentService (n) {
    showService(slideIndex = n);
  }






