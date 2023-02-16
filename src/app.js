/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domaingenerator() {
  let pronoun = ["The", "Our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let end = [".com", ".net"];
  let resultArray = [];
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < end.length; e++) {
          resultArray.push(`${pronoun[p]}${adj[a]}${noun[n]}${end[e]}`);
        }
      }
    }
  }
  for (const element of resultArray) {
    console.log(element);
  }
}
window.onload = function() {
  //write your code here
  domaingenerator();

  // console.log("Hello Rigo from the console!");
};
// console.log('{pronoun[p]${adj[a]$noun[n]}.com');
