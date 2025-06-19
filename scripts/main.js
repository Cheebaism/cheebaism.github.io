//this is a javascript file, a programming language that allows for interactivity
//source https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity

/* this is a basic thing that changes h1 (cheeba cheeba yo) to the one below

// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";*/


// Image switcher code
// myimage links to img, and added click event thing

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cheebaism_logo_01.png") {
    myImage.setAttribute("src", "images/cheebaism_logo_wall.png");
  } else {
    myImage.setAttribute("src", "images/cheebaism_logo_01.png");
  }
});



