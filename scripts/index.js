
const themeButton = document.getElementById("themeButton");

if (themeButton !== null) {
    themeButton.addEventListener("click", function(e) {
        console.log("the button was clicked!");
        document.body.classList.toggle("dark-theme");
    });
}else{
    console.log("it's null");
}
