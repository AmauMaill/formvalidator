# Simple Form Validation with Vanilla JS

This project demonstrates a form validation system built with plain JavaScript. The validation logic ensures that user inputs adhere to specific rules, providing real-time feedback and error messages. The project is based on a tutorial by Brad Traversy.

## Features

- **Input Validations**:
  - Required fields check.
  - Username and password length constraints.
  - Email format validation.
  - Password complexity enforcement (uppercase, lowercase, number, and special character).
  - Password match confirmation.
- **Real-Time Feedback**:
  - Success and error states with styled visual cues.
  - Descriptive error messages for users.
- **Lightweight and Simple**:
  - No external dependencies or frameworks required.

## How It Works

### Core Validation Functions

1. **Required Fields**: Ensures all specified fields are not left blank.
2. **Length Check**: Validates input length (e.g., username and password).
3. **Email Validation**: Confirms proper email format using a regex.
4. **Password Strength**: Checks for a mix of uppercase, lowercase, numbers, and special characters.
5. **Password Match**: Verifies that the password and confirmation match.

### Code Highlights

- **Dynamic Messages**: The `getFieldNameCapitalized()` function dynamically generates field-specific messages.
- **Event Listener**: Form submission is intercepted using `addEventListener` to validate inputs and prevent submission on errors.
- **Reusable Functions**: Functions like `checkRequired()` and `checkLength()` are built for extensibility.

### Example Code Snippet

```javascript
form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([username, email, password, confirm_password]);
    checkLength(username, 3, 12);
    checkLength(password, 12, 25);
    checkEmail(email);
    checkPassword(password);
    checkPasswordsMatch(password, confirm_password);
});
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/AmauMaill/form-validation-js.git
   ```
2. Open the project directory and launch `index.html` in your browser.
3. Fill out the form to see the validation in action.

## Credits

- Tutorial by [Brad Traversy](https://www.traversymedia.com).

## License

This project is licensed under the MIT License and is intended for educational purposes.