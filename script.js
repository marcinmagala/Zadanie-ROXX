"use strict";

// Hero-section slider
const sliderContainer = document.querySelector(".slider-container");
const sectionHeroBackground = document.querySelector(
  ".section-hero-background"
);
const slider = document.querySelectorAll(".slider");

let i = 0;
const time = 7000;

slider.forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    i === e.target.dataset.id;
    changeImg();
  })
);

const sliderSpan = function () {
  slider.forEach(
    (item) => (item.style.backgroundColor = "var(--unnamed-color-ffffff)")
  );
  slider[i].style.backgroundColor = "var(--bmw-blue)";
};

const changeImg = function () {
  sectionHeroBackground.style.transform = `translateX(${
    (i * -sectionHeroBackground.clientWidth) / 3
  }px)`;

  sliderSpan();

  if (i < 2) {
    i++;
  } else {
    i = 0;
  }
};

setInterval("changeImg()", time);

// Form elements
const thxBtn = document.querySelector(".thx-btn");
const formBtn = document.querySelector(".form-btn");
const containerFormThx = document.querySelector(".container-form-thx");
const dataInputs = document.querySelectorAll(".data-input");
const radioDiv = document.querySelector(".radio-div");
const radioInput = document.querySelectorAll(".radio-input");
const inputPan = document.querySelector(".pan");
const inputPani = document.querySelector(".pani");

// Mobile nav elements
const containerMobileNav = document.querySelector(".container-mobile-nav");
const openMobileNavBtn = document.querySelector(".open-mobile-nav-btn");
const closeMobileNavBtn = document.querySelector(".close-mobile-nav-btn");
const mobileNavOption = document.querySelectorAll(".mobile-nav-option");
const ctaMobile = document.querySelector(".cta-mobile");

// Mobile navigation
openMobileNavBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerMobileNav.style.transform = "translateX(0)";
});

closeMobileNavBtn.addEventListener("click", function (e) {
  e.preventDefault();

  containerMobileNav.style.transform = "translateX(-39rem)";
});

ctaMobile.addEventListener("click", function () {
  containerMobileNav.style.transform = "translateX(-39rem)";
});

mobileNavOption.forEach((btn) =>
  btn.addEventListener("click", function () {
    containerMobileNav.style.transform = "translateX(-39rem)";
  })
);

// Form buttons

radioInput.forEach((radio) =>
  radio.addEventListener("change", (e) => {
    e.preventDefault();
    radioDiv.classList.remove("error_input");
  })
);

dataInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    event.preventDefault();
    if (input.value !== "") {
      input.classList.remove("error_input");
    }
  });
});

formBtn.addEventListener("click", function (e) {
  // kolorowanie radio inputów
  if (inputPan.checked === false && inputPani.checked === false) {
    radioDiv.classList.add("error_input");
  }

  //kolorowanie pól formularzy tekstowych
  dataInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error_input");
    }
  });

  if (
    (inputPan.checked || inputPani.checked) &&
    dataInputs[0].value !== "" &&
    dataInputs[1].value !== "" &&
    dataInputs[2].value !== "" &&
    dataInputs[3].value !== ""
  ) {
    e.preventDefault();

    dataInputs.forEach((item) => (item.value = ""));
    radioInput.forEach((item) => (item.checked = ""));
    containerFormThx.classList.remove("hidden");
  }
});

thxBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerFormThx.classList.add("hidden");
});
