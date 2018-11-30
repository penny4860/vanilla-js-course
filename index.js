const title = document.querySelector("#title");

function handleClick(event) {
  title.style.color = "blue";
}

// "click" event 에 대해서 handleClick 함수를 mapping
title.addEventListener("click", handleClick);

