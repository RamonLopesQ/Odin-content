const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const content2 = document.createElement("p")
content2.classList.add("content2");
content2.textContent = "Hey I'm red!";
content2.setAttribute("style", "color:red;");

const content3 = document.createElement("h3")
content3.classList.add("content3");
content3.textContent = "Hey I'm blue h3!";
content3.setAttribute("style", "color:blue;");

const content4 = document.createElement("div");
content4.classList.add("content4");
content4.setAttribute("style","border:1px solid black; backgroundColor:pink");

const content5 = document.createElement("h1");
content5.classList.add("content5");
content5.textContent = "I'm in a div!";

const content6 = document.createElement("p");
content6.classList.add("content6");
content6.textContent = "ME TOO!";

content4.appendChild(content5);
content4.appendChild(content6);
container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);
container.appendChild(content4);

// Event:

// METHOD 1
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);

// Parâmetro e

btn.addEventListener("click", function (e) {
    console.log(e.target);
  });

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
}); 

// Listeners em um grupo de nós
/*
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});*/
