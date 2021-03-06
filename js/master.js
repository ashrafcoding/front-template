// toggle spin class on icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  // toggle fa-spin class on this icon for rotation
  this.classList.toggle("fa-spin");
  // toggle open class on settings box to appear
  document.querySelector(".settings-box").classList.toggle("open");
};

// switch colors
const colorsList = document.querySelectorAll(".colour-list li")

// loop on all list items
colorsList.forEach(li => {

  // click on every list item
  li.addEventListener("click", (e)=> {

    // set color on root
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
    console.log(e.target.dataset.color)
  })
})
// selecting landing page
let landingPage = document.querySelector(".landing-page");
// get array of images
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgArray.length);
  landingPage.style.backgroundImage =
    'url("imgs/' + imgArray[randomNumber] + '")';
}, 10000);
