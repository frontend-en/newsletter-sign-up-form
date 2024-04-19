const form = document.getElementById('form');
const email = document.getElementById("email");
const error = document.getElementById("error");
const card = document.getElementById("card");
const thanks = document.getElementById("thanks");
const dismiss = document.getElementById("dismiss");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener("input", () => {
  console.log(email.value);
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    error.textContent = "";
  } else {
    email.className = "";
    error.textContent = ""
    error.className = "";
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "error";
    error.textContent = "Valid email required";
    error.classList.add("invalid-message");
  } else {
    error.textContent = "";
    error.className = "";
    card.classList.add('hidden');
    thanks.classList.remove('hidden');
  }
});


dismiss.addEventListener("click", () => {
  thanks.classList.add('hidden');
  card.classList.remove('hidden');
  email.value = "";
})