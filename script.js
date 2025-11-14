const email = document.getElementById("email")
const username = document.getElementById("username")
const form = document.getElementById("registrationForm")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const usernameError = document.getElementById("usernameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const confirmPasswordError = document.getElementById("confirmPasswordError")

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("savedUsername")
    if (saved) {
        username.value = saved
    }
})

function validateUsername() {
    if(username.validity.valueMissing) {
        usernameError.textContent = "Username is required"
        return false
    }
    if (username.validity.tooShort) {
        usernameError.textContent = "Username must be at least 5 characters"
        return false
    }
    usernameError.textContent = ""
    return true
}

function validateEmail(){
    if (email.validity.valueMissing) {
        emailError.textContent = "Email is required"
        return false
    }
    if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address"
        return false
    }
    emailError.textContent = ""
    return true
}

function validatePassword() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "Password is required"
        return false
    }
    if (password.validity.patternMismatch) {
        passwordError.textContent = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number"
        return false
    }
    passwordError.textContent=""
    return true
}

function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match"
        return false
    }
    confirmPasswordError.textContent = ""
    return true
}