const typingText = document.getElementById("typing");

const words = [
    "Software Developer",
    "Web Developer",
    "Cybersecurity Learner",
    "Linux Learner",
    "Android Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}


typeEffect();


// Mobile menu

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


// Close mobile menu after clicking a link

const links =
    document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});
