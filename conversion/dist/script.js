    function validateForm() {
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("emailError");

        // Check if the email field is empty or contains an invalid email format
        if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
            emailError.classList.remove("hidden");
            return false;
        } else {
            emailError.classList.add("hidden");
            return true;
        }
    }

    function isValidEmail(email) {
        // Simple email format validation using regular expression
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }