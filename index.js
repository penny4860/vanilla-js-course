const title = document.querySelector("#title");

const CLICK_CLASS = "clicked";

function handleClick() {
  // css 에서 정의한 ".clicked" class를 toggle
  title.classList.toggle(CLICK_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

// "click" event 에 대해서 handleClick 함수를 mapping
title.addEventListener("click", handleClick);
init();
