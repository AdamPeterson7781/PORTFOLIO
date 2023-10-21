let navSvgIcon = document.querySelector('.nav-svg');
let svg = document.querySelector('#svg');
let secondSvg = document.querySelector('#second-svg');
let navTxt1 = document.querySelector('#nav-txt-1');
let navTxt2 = document.querySelector('#nav-txt-2');
let navTxt3 = document.querySelector('#nav-txt-3');
let button = document.getElementById("showButton");

let isNavVisible = false;

function navSvg() {
  if (!isNavVisible) {
    navTxt1.style.display = "block";
    navTxt2.style.display = "block";
    navTxt3.style.display = "block";

    svg.style.display = "none";
    secondSvg.style.display = "block"
  } else {
    navTxt1.style.display = "none";
    navTxt2.style.display = "none";
    navTxt3.style.display = "none";

    svg.style.display = "block";
    secondSvg.style.display = "none"
  }
  isNavVisible = !isNavVisible; // Toggle the flag
}
navSvgIcon.addEventListener("click", toggleNav);


function toggleImage() {
  let arrowImage = document.getElementById("arrow-image-2");
  if (arrowImage.style.display === "none") {
    arrowImage.style.display = "block";
  } else {
    arrowImage.style.display = "none";
  }
}
button.addEventListener("click", toggleImage);
