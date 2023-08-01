const form = document.querySelector("form");
const nextBtn = document.querySelector(".nextBtn");
const backBtn = document.querySelector(".backBtn");
const input = document.querySelector(".first input");

nextBtn.addEventListener("click", () => {
  form.classList.add("seactive");
});
backBtn.addEventListener("click", () => {
  form.classList.remove("seactive");
});
