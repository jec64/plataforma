const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulação de login (pode ser substituído por API no futuro)
  if (email.value === "admin@email.com" && password.value === "123456") {
    alert("Login bem-sucedido!");
    // Redirecionar para o dashboard depois
    // window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "E-mail ou senha incorretos.";
    errorMsg.style.display = "block";
  }
});
