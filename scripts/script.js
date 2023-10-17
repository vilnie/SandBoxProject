

console.log("hello esfesf");

//Theme Switcher
const themeButton = document.getElementById("themeButton");
if (themeButton !== null) {
    themeButton.addEventListener("click", function() {
        console.log("the button was clicked!");
        document.body.classList.toggle("dark-theme");
    });
}else{
    console.log("it's null");
}

// Scrolling Reveal Effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-show');
        } else {
            entry.target.classList.remove('section-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section-hidden')
hiddenElements.forEach((el) => observer.observe(el));
