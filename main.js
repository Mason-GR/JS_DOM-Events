console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").innerText =
  'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].textContent =
  'I used the getElementByClassName("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Nodes = document.getElementsByTagName("h3");

for (let element of h3Nodes) {
  element.innerText = `I used the getElementByTagName("h3") method to access all of these`;
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
const ex2Parent = document.getElementById("parent");

ex2Parent.appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const a = document.createElement("a");

a.innerText = "I am a <a> tag";

// BONUS: Add a link href to the <a>
a.href = "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
ex2Parent.insertBefore(a, p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// BONUS - Make the red box go all the way around the perimeter of the green box
let n1 = document.getElementById("N1");
let exercise3 = document.getElementById("exercise-container3");

let newP = document.createElement("p");
newP.textContent = "New Child Node";

exercise3.replaceChild(newP, n1);

// TODO: Remove the "New Child Node"
setTimeout(function () {
  exercise3.removeChild(newP);
}, 4000);

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
let container = document.querySelector("#container");
let box = document.getElementById("box");

let x = 0;
let y = 0;
let isHorizontal = true;
let direction = 1;
let containerEdge = container.clientWidth - box.clientWidth;

let timer = setInterval(move, 50);

function move() {
  if (!x && !y) {
    direction = 1;
    isHorizontal = true;
    containerEdge = container.clientWidth - box.clientWidth;
  }

  if (isHorizontal) {
    if (x == containerEdge) {
      isHorizontal = false;
    } else {
      x += direction;
      box.style.left = x + "px";
    }
  } else {
    if (y == containerEdge) {
      isHorizontal = true;
      direction = -1;
      containerEdge = 0;
    } else {
      y += direction;
      box.style.top = y + "px";
    }
  }
}

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
let btn = document.getElementById("btn");

btn.addEventListener("click", show);

function show() {
  alert(
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
  );
}

// BONUS: The modal popup should be able to be closed. Refactor for this functionality
