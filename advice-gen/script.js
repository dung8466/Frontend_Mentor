const buttonAdvice = document.querySelector("#dice");
const adviceContent = document.querySelector(".advice-text");
const idNum = document.querySelector("#advice-number");
const APIrandom = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(APIrandom, { cache: "reload" });
  if (!response.ok) {
    throw new Error(response.status);
  }
  const res = await response.json();
  const data = res.slip;
  idNum.innerHTML = data.id;
  adviceContent.innerHTML = '"' + data.advice + '"';
  setTimeout(2000);
}

buttonAdvice.addEventListener("click", getAdvice);
