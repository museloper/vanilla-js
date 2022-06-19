const title = document.querySelector("#title");

function handleTitleClick() {
  title.style.color = "blue";
  console.log("title was clicked");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI!");
}

function handleWindowOnline() {
  alert("ALL GOOD!");
}

// title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter = handleMouseEnter;
// title.addEventListener("mouseleave", handleMouseLeave);
title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
