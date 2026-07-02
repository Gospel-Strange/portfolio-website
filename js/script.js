const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        console.log("Navigation clicked");

    });

});

const titles = [
    "Frontend Developer",
    "Web Designer",
    "IT Support",
    "Problem Solver"
];

const typingText = document.getElementById("typing-text");

let index = 0;

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = titles[wordIndex];

    if (!isDeleting) {

        charIndex++;

        typingText.textContent = currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        charIndex--;

        typingText.textContent = currentWord.substring(0, charIndex);

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === titles.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();