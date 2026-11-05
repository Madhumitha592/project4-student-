const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const bio = document.getElementById("bio");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const bioError = document.getElementById("bioError");

const Count = document.getElementById("count");
const Btn = document.getElementById("btn");

function validateName() {
   
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required  !";
    }
    else if(name.length < 5){
        nameE.textContent=" Name must be at least 5 characters";
        return false;
    }
    else{
     nameError.textContent = "";
    return true;
    }
}
function validateEmail() {
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    }
else{
    emailError.textContent = "";
    return true;
}
}
function validatePassword() {
    if (password.value === "") {
        passwordError.textContent = "Password is required";
        return false;
    }

    else if (password.value.length < 6) {
        passwordError.textContent =
            "Password must be  atleast 6 digits";
        return false;
    }

    passwordError.textContent = "";
    return true;
}
function validateBio() {
    const length = bio.value.length;

    count.textContent = length + " / 200 characters";

    if (length === 0) {
        bioError.textContent = "Bio is required";
        return false;
    }

    bioError.textContent = "";
    return true;
}
function completeForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isBioValid = validateBio();

    Btn.disabled = !(
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isBioValid
    );
}
name.addEventListener("input", completeForm);
email.addEventListener("input", completeForm);
password.addEventListener("input", completeForm);
bio.addEventListener("input", completeForm);


document.getElementById("studentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    completeForm();

    if (!btn.disabled) {
        alert(" Your Registration has completed Successfully !!");

        this.reset();

        count.textContent = "0 / 200 characters";

        completeForm();
    }
});
completeForm();