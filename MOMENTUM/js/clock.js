const clock = document.querySelector("#clock");

// function sayHello() {
//   console.log("hello");
// }

// // Interver '매 번'
// // setInterval(handler, ms)
// setInterval(sayHello, 5000);

// // Timeout '한 번'
// setTimeout(sayHello, 5000);

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
