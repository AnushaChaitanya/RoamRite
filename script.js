
document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

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

document.addEventListener("DOMContentLoaded", () => {
    const countries = ["United States", "India", "France", "Germany", "Japan", "Australia"];
    let index = 0;

    function rotatePlaces() {
        const placeNameElement = document.querySelector('.place-name');
        if (placeNameElement) {
            placeNameElement.textContent = `Visit ${countries[index]}`; // Instantly change text
            index = (index + 1) % countries.length; // Move to the next country
        }
    }

    setInterval(rotatePlaces, 200); // Change every 0.2 seconds (200ms)
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle visibility

    // Change the icon between open and close
    const icon = document.querySelector('.hamburger i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times'); // Change to close (X) icon
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let destination = document.getElementById("destination").value;
        let persons = document.getElementById("persons").value;
        let startDate = new Date(document.getElementById("startDate").value);
        let endDate = new Date(document.getElementById("endDate").value);
        let description = document.getElementById("description").value;

        if (!destination || persons < 1 || !startDate || !endDate || description.length < 50) {
            alert("Please fill all fields correctly.");
            return;
        }

        if (endDate <= startDate) {
            alert("End Date should be greater than Start Date.");
            return;
        }

        alert("Booking Successful!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const hiddenImages = document.querySelectorAll(".gallery-item.hidden");

    viewMoreBtn.addEventListener("click", function () {
        hiddenImages.forEach(img => img.classList.remove("hidden"));
        viewMoreBtn.style.display = "none"; // Hide button after clicking
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Submission
    if (document.getElementById("registerForm")) {
        document.getElementById("registerForm").addEventListener("submit", function (event) {
            event.preventDefault();

            let fullname = document.getElementById("fullname").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let dob = document.getElementById("dob").value;
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let gender = document.getElementById("gender").value;

            if (!fullname || !contact || !dob || !email || !password || !gender) {
                alert("All fields are required!");
                return;
            }

            if (contact.length < 10 || isNaN(contact)) {
                alert("Enter a valid contact number!");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters!");
                return;
            }

            // Store user data in localStorage
            let user = { fullname, email, password };
            localStorage.setItem("user", JSON.stringify(user));

            alert("Registration successful! You can now login.");
            window.location.href = "login.html"; // Redirect to login page
        });
    }

    // Login Form Submission
    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();

            let email = document.getElementById("loginEmail").value.trim();
            let password = document.getElementById("loginPassword").value.trim();

            if (!email || !password) {
                alert("Both fields are required!");
                return;
            }

            // Retrieve stored user data
            let storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser) {
                alert("No user found! Please register first.");
                return;
            }

            if (email === storedUser.email && password === storedUser.password) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to Home Page
            } else {
                alert("Invalid credentials! Please try again.");
            }
        });
    }
});





