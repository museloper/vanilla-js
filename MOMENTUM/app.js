// document
console.log(document);

// console.dir Element를 더 상세히 보여준다.
console.dir(document);
document.title = "Hello! From JS!";

// getElementById
const title = document.getElementById("title");
console.log(title);
title.innerText = "Got you!";

// getElementsByClassName
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// querySelector
const title2 = document.querySelector(".hello span");
console.log(title2);

// querySelectorAll
const titles = document.querySelectorAll(".hello span");
console.log(titles);
