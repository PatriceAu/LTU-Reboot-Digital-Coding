let userInput=document.querySelector("input");

let button = document.querySelector("button");

button.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Hello " + userInput.value);
});