"use strict"
let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

//embedded video
let demoBtn = document.querySelector(".demo");
let loginContainer = document.querySelector(".embeddebVideo-container");
let containerClose = document.querySelector("#container-close");
let iframe = document.querySelector(".iframe"); //iframe

demoBtn.addEventListener("click", () => {
  loginContainer.classList.add("active");
});

// stopping you tube video
containerClose.addEventListener("click", () => {
  loginContainer.classList.remove("active");
  let source = iframe.src;
  iframe.src = "";
  iframe.src = source;
  // iframe.src = "";
  // iframe.src = "https://www.youtube.com/embed/Atf_Af1q_5w?rel=0";
});

// scrolling page
window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  loginContainer.classList.remove("active"); // removing active container
  // embedded video reset
  let source = iframe.src;
  iframe.src = "";
  iframe.src = source;
  // iframe.src = "";
  // iframe.src = "https://www.youtube.com/embed/Atf_Af1q_5w?rel=0";
};;

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

//sign up page
let registerNow = document.querySelector(".registerNow");
let login1 = document.querySelector(".login1");
let signUp = document.querySelector(".signUp");
let loginNow = document.querySelector(".loginNow");
registerNow.addEventListener("click", () => {
  signUp.classList.remove("hidden");
  login1.classList.add("hidden");
});
loginNow.addEventListener("click", () => {
  signUp.classList.add("hidden");
  login1.classList.remove("hidden");
});


//thank you page
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const validRegex = /.+@gmail\.com/;
let email = document.querySelector("#email");
let thankYou = document.querySelector(".thankYou");
let newSignUp = document.querySelector(".newsignUp");
let registered = document.querySelector(".registered");
let newLoginNow = document.querySelector(".newLoginNow")

thankYou.addEventListener("click", () => {
  if (email.value.match(validRegex)) {
    registered.classList.remove("hidden");
    signUp.classList.add("hidden");
  }
});

newLoginNow.addEventListener("click", () => {
  registered.classList.add("hidden");
  login1.classList.remove("hidden");
});
