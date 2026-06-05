// Smooth fade-in animation

window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});

// Search bar interaction

const searchBox = document.querySelector("input");

searchBox.addEventListener("focus", () => {
    searchBox.placeholder = "☕ Search coffees, desserts, pastries...";
});

searchBox.addEventListener("blur", () => {
    searchBox.placeholder = "Search for Coffee Or a Dish";
});

// Typewriter effect

const tagline = document.querySelector("main p");

const text = "Life happens. Coffee helps.";
let index = 0;

tagline.textContent = "";

function typeWriter() {

    if(index < text.length){

        tagline.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter, 80);
    }
}

typeWriter();

// Navbar hover sound effect ready
// Add audio file later if desired

console.log("☕ Borcelle Coffee Loaded Successfully");