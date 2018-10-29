
// 1. js-clock class에 h1 tag document 를 가져온다.
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

// 2. clockTitle 로 접근한 html 문서의 내용을 시간으로 채우는 함수.
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 3. 
function init() {
  getTime();
  setInterval(getTime, 1000);
}

// 4. 함수를 실행
init();
