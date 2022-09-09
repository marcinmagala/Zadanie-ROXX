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
  slider.forEach((item) => (item.style.backgroundColor = "#fff"));
  slider[i].style.backgroundColor = "#3369d3";
};

const changeImg = function () {
  console.log(sectionHeroBackground.clientWidth);
  if (sectionHeroBackground.clientWidth > 1488) {
    sectionHeroBackground.style.transform = `translateX(${i * -192}rem)`;
  } else {
    sectionHeroBackground.style.transform = `translateX(${
      (i * -sectionHeroBackground.clientWidth) / 3
    }px)`;
  }

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
const inputs = document.querySelectorAll("input");
const radioInput = document.querySelectorAll(".radio-input");

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
formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerFormThx.classList.remove("hidden");

  inputs.forEach((item) => (item.value = ""));
  radioInput.forEach((item) => (item.checked = ""));
});

thxBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerFormThx.classList.add("hidden");
});
