
interface UserLogin {
    username: string;
    email: string;
    password: string;
    rememberMe: boolean;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm") as HTMLFormElement;
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const rememberMeInput = document.getElementById("rememberMe") as HTMLInputElement;
    const showPasswordInput = document.getElementById("showPassword") as HTMLInputElement;
    const usernameError = document.getElementById("usernameError") as HTMLElement;
    const emailError = document.getElementById("emailError") as HTMLElement;
    const passwordError = document.getElementById("passwordError") as HTMLElement;
    const successMsg = document.getElementById("successMsg") as HTMLElement;

    showPasswordInput.addEventListener("change", () => {
        passwordInput.type = showPasswordInput.checked ? "text" : "password";
    });

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        clearMessages();
        let isValid: boolean = true;
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
            const user: UserLogin = {
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

    function validateEmail(email: string): boolean {
        const pattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function clearMessages(): void {
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        successMsg.textContent = "";
    }
});
