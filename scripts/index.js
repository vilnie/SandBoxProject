

console.log("hello esfesf");

const themeButton = document.getElementById("themeButton");

if (themeButton !== null) {
    themeButton.addEventListener("click", function() {
        console.log("the button was clicked!");
        document.body.classList.toggle("dark-theme");
    });
}else{
    console.log("it's null");
}

