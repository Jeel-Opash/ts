var form = document.getElementById("loginForm");
var usernameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var rememberMeInput = document.getElementById("rememberMe");
var showPasswordInput = document.getElementById("showPassword");
var usernameError = document.getElementById("usernameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var successMsg = document.getElementById("successMsg");
showPasswordInput.addEventListener("change", function () {
    passwordInput.type = showPasswordInput.checked ? "text" : "password";
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessages();
    var isValid = true;
    if (usernameInput.value.trim().length < 3) {
        usernameError.textContent = "Username must be at least 3 characters";
        isValid = false;
    }
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    }
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }
    if (isValid) {
        var user = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            rememberMe: rememberMeInput.checked
        };
        console.log("User Data:", user);
        successMsg.textContent = "Login Successful!";
        form.reset();
    }
});
function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
function clearMessages() {
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMsg.textContent = "";
}
