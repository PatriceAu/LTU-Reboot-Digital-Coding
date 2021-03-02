let domDiv=document.querySelector("#dom-div");

let paragraph = document.createElement("p");

let paragraphText = document.createTextNode ("text created by ME");

paragraph.appendChild(paragraphText);

domDiv.appendChild(paragraph);
