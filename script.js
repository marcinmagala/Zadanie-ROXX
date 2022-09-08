"use strict";

const sliderContainer = document.querySelector(".slider-container");
const sectionHeroBackground = document.querySelectorAll(
  ".section-hero-background"
);

const thxBtn = document.querySelector(".thx-btn");
const formBtn = document.querySelector(".form-btn");
const containerFormThx = document.querySelector(".container-form-thx");
const inputs = document.querySelectorAll("input");
const radioInput = document.querySelectorAll(".radio-input");

const containerMobileNav = document.querySelector(".container-mobile-nav");
const openMobileNavBtn = document.querySelector(".open-mobile-nav-btn");
const closeMobileNavBtn = document.querySelector(".close-mobile-nav-btn");
const mobileNavOption = document.querySelectorAll(".mobile-nav-option");
const ctaMobile = document.querySelector(".cta-mobile");

openMobileNavBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerMobileNav.classList.remove("hidden");
});

closeMobileNavBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerMobileNav.classList.add("hidden");
});

ctaMobile.addEventListener("click", function (e) {
  e.preventDefault();
  containerMobileNav.classList.add("hidden");
});

mobileNavOption.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    containerMobileNav.classList.add("hidden");
  })
);

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
