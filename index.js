const title = document.querySelector("#title");

const CLICK_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICK_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

// "click" event 에 대해서 handleClick 함수를 mapping
title.addEventListener("click", handleClick);
init();
