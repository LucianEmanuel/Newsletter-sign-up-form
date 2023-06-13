"use strict";

const error = document.querySelector(".error");
console.log(error);
const btn = document.querySelector(".subscribe .btn");
console.log(btn);
const dismiss = document.querySelector(".btn-dismiss");
const mainContainer = document.querySelector("main");
const succesMsg = document.querySelector(".success-msg");
const subscribe = document.querySelector(".subscribe");
const imgContainer = document.querySelector(".img-container");
const email = document.querySelector("#email");

let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (regex.test(email.value)) {
    succesMsg.classList.remove("hidden");
    subscribe.classList.add("hidden");
    imgContainer.classList.add("hidden");
    mainContainer.classList.add("success");
  } else {
    error.classList.remove("hidden");
    email.classList.add("error-input");
  }
});
dismiss.addEventListener("click", (e) => {
  e.preventDefault();
  succesMsg.classList.add("hidden");
  error.classList.add("hidden");
  subscribe.classList.remove("hidden");
  imgContainer.classList.remove("hidden");
  mainContainer.classList.remove("success");
  email.classList.remove("error-input");
  email.value = "";
});
