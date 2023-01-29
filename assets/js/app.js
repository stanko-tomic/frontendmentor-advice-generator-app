const adviceTextHtml = document.getElementById("adviceText");
const adviceIdHtml = document.getElementById("adviceId");

const API_URL = "https://api.adviceslip.com/advice";

async function fetchAdvice() {
  const response = await fetch(API_URL);
  const advice = await response.json();
  let id = advice.slip.id;
  let adviceText = advice.slip.advice;
  adviceTextHtml.innerHTML = adviceText;
  adviceIdHtml.innerHTML = id;
}

fetchAdvice();
