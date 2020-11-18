const element = document.getElementById("open-menu");
const menu = document.getElementById("menu");
const button = document.getElementById("close-button");
const wrapContant = document.getElementById("wrap-content");
const hero_images = document.getElementById("hero-images");
//elementos slider
const header = document.getElementById("slice-header");
const content = document.getElementById("slice-content");

const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
let translateX = 0;
const data = [
  {
    header: "Discover innovative ways to decorate",
    content: `We provide unmatched quality, comfort, and style for property
    owners across the country. Our experts combine form and function
    in bringing your vision to life. Create a room in your own style
    with our collection and make your property a reflection of you and
    what you love.`,
  },
  {
    header: "We are available all across the globe",
    content: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    header: "Manufactured with the best materials",
    content: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
  },
];

let open = false;

function setSlide(object = {}) {
  header.innerHTML = object.header;
  content.innerHTML = object.content;
}
let cont = 0;

setSlide(data[cont]);

buttonLeft.addEventListener("click", function () {
  if (cont > 0) {
    cont--;
    translateX = translateX + 100;
    console.log(translateX);
    hero_images.style.transform = `translateX(${translateX}%)`;
    setSlide(data[cont]);
  } else {
    return false;
  }
});
buttonRight.addEventListener("click", function () {
  if (cont < 2) {
    cont++;
    translateX = translateX - 100;
    console.log(translateX);
    hero_images.style.transform = `translateX(${translateX}%)`;
    setSlide(data[cont]);
  } else {
    return false;
  }
});

function handleMenu(e) {
  if (!open) {
    menu.style.left = "0";
    wrapContant.style.display = "block";
    open = true;
  } else {
    closeMenu();
  }
}
function closeMenu() {
  if (open) {
    menu.style.left = "-550px";
    wrapContant.style.display = "none";
    open = false;
  }
}
button.addEventListener("click", closeMenu);
element.addEventListener("click", handleMenu);
wrapContant.addEventListener("click", function () {
  closeMenu();
});
