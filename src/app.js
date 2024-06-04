/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronouns = ["the", "our"];
  const adjs = ["great", "big"];
  const nouns = ["jogger", "racoon"];
  const domains = [];
  for (const p in pronouns) {
    for (const a in adjs) {
      for (const n in nouns) {
        domains.push(
          "<h6>" + pronouns[p] + adjs[a] + nouns[n] + ".com" + "</h6>"
        );
      }
    }
  }
  const innerHtml = domains.join("\n");
  const p = document.querySelector("#Domains");
  p.innerHTML = innerHtml;
  console.log("Hello Rigo from the console!");
};
