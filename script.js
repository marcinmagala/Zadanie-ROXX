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

formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerFormThx.classList.remove("hidden-thx-form");

  inputs.forEach((item) => (item.value = ""));
  radioInput.forEach((item) => (item.checked = ""));
});

thxBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerFormThx.classList.add("hidden-thx-form");
});
