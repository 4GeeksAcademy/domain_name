/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let primera = [" super", " mega", " very", "important", "cool"];
let segunda = ["code", "stack", "tech", "geeks", "duper"];
let tercera = [".com", ".es", ".us", ".uk", ".com"];

for (let i = 0; i < primera.length; i++) {
  for (let j = 0; j < segunda.length; j++) {
    for (let k = 0; k < tercera.length; k++) {
      let div = document.createElement("div");
      div.innerText = `
        ${primera[i]}${segunda[j]}${tercera[k]}
        `;

      document.body.appendChild(div);
    }
  }
}
