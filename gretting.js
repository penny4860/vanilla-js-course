const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// web browser 에 {USER_LS: text} 를 저장
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// 2. USER_LS 에 내용이 없으면 input form을 display 하고 event listener를 mapping
function askForName() {
  form.classList.add(SHOWING_CN);
  // submit event 에 대해서 handleSubmit() 함수를 mapping
  form.addEventListener("submit", handleSubmit);
}

// 3. USER_LS 에 내용이 있으면 input form을 가리고, 
// greeting tag 에 내용을 출력
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

// 1. local storage 에 저장되어있는지 여부로 분기
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
