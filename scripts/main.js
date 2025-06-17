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
    myImage.setAttribute("src", "https://dacmx.neocities.org/images/cheebaism_logo_wall.png");
  } else {
    myImage.setAttribute("src", "images/cheebaism_logo_01.png");
  }
});

// Personalized welcome message code


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* this version works without entering a name, displaying null

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Let's fuck up the world, ${myName}`;
}*/

//this version, wont let u through until something is entered, or check box is clcked and original text from html (cheeba cheeb yo) remains
//
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Let's fuck up the world, ${myName}`;
  }
}






if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Let's fuck up the world, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

