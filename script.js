document.addEventListener("DOMContentLoaded", function () {
    function validateForm(event, formId) {
        event.preventDefault();
        let isValid = true;

        const form = document.getElementById(formId + "Form");
        const mobile = form.querySelector(".mobile");
        const email = form.querySelector(".email");
        const password = form.querySelector(".password");
        const confirmPassword = form.querySelector(".confirm-password");

        // Validate Mobile Number (10 digits)
        if (!/^\d{10}$/.test(mobile.value)) {
            mobile.classList.add("is-invalid");
            isValid = false;
        } else {
            mobile.classList.remove("is-invalid");
        }

        // Validate Email
        if (!/\S+@\S+\.\S+/.test(email.value)) {
            email.classList.add("is-invalid");
            isValid = false;
        } else {
            email.classList.remove("is-invalid");
        }

        // Validate Password (min 8 characters)
        if (password.value.length < 8) {
            password.classList.add("is-invalid");
            isValid = false;
        } else {
            password.classList.remove("is-invalid");
        }

        // Confirm Password (only for register form)
        if (confirmPassword && confirmPassword.value !== password.value) {
            confirmPassword.classList.add("is-invalid");
            isValid = false;
        } else if (confirmPassword) {
            confirmPassword.classList.remove("is-invalid");
        }

        // If all validations pass, redirect
        if (isValid) {
            window.location.href = "index.html"; // Redirect on success
        }
    }

    // Attach event listeners to forms
    document.getElementById("loginForm")?.addEventListener("submit", (event) => validateForm(event, "login"));
    document.getElementById("registerForm")?.addEventListener("submit", (event) => validateForm(event, "register"));
});


 // Array of countries to rotate every 0.2 seconds
 const countries = ["United States", "India", "France", "Germany", "Japan", "Australia"];
 let index = 0;

 function rotatePlaces() {
     const placeNameElement = document.querySelector('.place-name');
     placeNameElement.textContent = `Visit ${countries[index]}`;
     index = (index + 1) % countries.length;
 }

 // Rotate every 0.2 seconds
 setInterval(rotatePlaces, 200);

 // Set the brand name dynamically
 document.getElementById('brand-name').textContent = 'RoamRite';  // Replace with your brand name if needed
 document.getElementById("bookNowBtn").addEventListener("click", function() {
    // window.location.href = "login.html"; // Change this to your actual booking page
});