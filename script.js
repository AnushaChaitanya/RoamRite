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