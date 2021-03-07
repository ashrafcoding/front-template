// check for the local storage color option
let mainColor = localStorage.getItem("color_option");
if (mainColor != null) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  // remove active class from all colors list items
  document.querySelectorAll(".colour-list li").forEach((element) => {
    element.classList.remove("active");

    // add active class on element of data-color == local storage item
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

// toggle spin class on icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  // toggle fa-spin class on this icon for rotation
  this.classList.toggle("fa-spin");

  // toggle open class on settings box to appear
  document.querySelector(".settings-box").classList.toggle("open");
};

// switch colors
const colorsList = document.querySelectorAll(".colour-list li");

// loop on all list items
colorsList.forEach((li) => {
  // click on every list item
  li.addEventListener("click", (e) => {
    // set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // remove active class from all elements
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // add active class on self
    e.target.classList.add("active");
  });
});

// switch random background option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// loop on all spans
randomBackEl.forEach((span) => {
  // click on every span
  span.addEventListener("click", (e) => {
   
    // remove active class from all spans
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // add active class on self
    e.target.classList.add("active");
  });
});

// selecting landing page
let landingPage = document.querySelector(".landing-page");

// get array of images
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgArray.length);
  landingPage.style.backgroundImage =
    'url("imgs/' + imgArray[randomNumber] + '")';
}, 10000);
