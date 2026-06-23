const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const togglePasswordButton = document.querySelector("#togglePassword");
const forgotPasswordButton = document.querySelector("#forgotPassword");
const registerButton = document.querySelector("#registerAccount");
const formMessage = document.querySelector("#formMessage");

function setMessage(text, type = "") {
  formMessage.textContent = text;
  formMessage.className = "form-message";

  if (type) {
    formMessage.classList.add(`is-${type}`);
  }
}

togglePasswordButton.addEventListener("click", () => {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";
  togglePasswordButton.setAttribute(
    "aria-label",
    isPasswordVisible ? "Показать пароль" : "Скрыть пароль"
  );
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const login = loginInput.value.trim();
  const password = passwordInput.value.trim();

  if (!login || !password) {
    setMessage("Введите логин и пароль.", "error");
    return;
  }

  setMessage("Данные приняты. Подключите серверную авторизацию.", "success");
});

forgotPasswordButton.addEventListener("click", () => {
  setMessage("Восстановление пароля будет доступно после подключения сервера.");
});

registerButton.addEventListener("click", () => {
  setMessage("Регистрация будет доступна после подключения сервера.");
});
