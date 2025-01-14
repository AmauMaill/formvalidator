const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

function showError(input, message) {
    // Handle color
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    // Handle message
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    // Handle color
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

function checkPassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
    if (passwordRegex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Password is not valid");
    }
};

function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    } else {
        showSuccess(input2);
    }
}

function getFieldNameCapitalized(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldNameCapitalized(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldNameCapitalized(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldNameCapitalized(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([username, email, password, confirm_password]);
    checkLength(username, 3, 12);
    checkLength(password, 12, 25);
    checkEmail(email);
    checkPassword(password);
    checkPasswordsMatch(password, confirm_password);
});