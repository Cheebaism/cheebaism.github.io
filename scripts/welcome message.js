
// Personalized welcome message code

//put in HTML/BoDY	 
	//the button below goes in the HTML BODY & changes user for the welcom message JS
		// <!--	<button>Change user</button>-->  
	//may need to poin to the js in the head too


/*
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// this version works without entering a name, displaying null

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Let's fuck up the world, ${myName}`;
}

//this version, wont let u through until something is entered, or check box is clcked and original text from html (cheeba cheeb yo) remains

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
*/
