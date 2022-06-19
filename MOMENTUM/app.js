const title = document.querySelector("#title");

function handleTitleClick() {
  /* JS를 통해 CSS를 직접적으로 컨트롤 */
  //   const currentColor = title.style.color;
  //   let newColor;

  //   if (currentColor === "blue") {
  //     newColor = "tomato";
  //   } else {
  //     newColor = "blue";
  //   }

  //   title.style.color = newColor;

  const clickedClass = "active";

  /* CLASS를 통해서 CSS를 간접적으로 컨트롤 */
  //   if (title.className === clickedClass) title.className = "";
  //   else title.className = clickedClass;

  //   if (title.classList.contains(clickedClass)) {
  //     title.classList.remove(clickedClass);
  //   } else {
  //     title.classList.add(clickedClass);
  //   }

  title.classList.toggle(clickedClass);
}

title.addEventListener("click", handleTitleClick);
