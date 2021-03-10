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

// random background option
let backgroundOption = true;

// variable to control the interval
let backgroundInterval;

// check if there is local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option");
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem == "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // remove active class from all span
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".no").classList.add("active");
  }
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

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// selecting landing page
let landingPage = document.querySelector(".landing-page");

// get array of images
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

// function to randomize imgs
function randomizeImgs() {
  if (backgroundOption == true) {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imgArray.length);
      landingPage.style.backgroundImage =
        'url("imgs/' + imgArray[randomNumber] + '")';
    }, 1000);
  }
}


// Select skills selector
let ourSkills = document.querySelector(".skills")
window.onscroll = function(){
  let skillsOffsetTop = ourSkills.offsetTop
  let skillsOuterHeight = ourSkills.offsetHeight
  let windowHeight = this.innerHeight
  let windowScrollTop = this.pageYOffset
  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span")
    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress
    })

  }
}
