

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

// Fetch and choose random quote
const jsonFileUrl = 'data/quotes.json';
const quoteText = document.getElementById('quote-text');

async function getRandomQuote() {
  try {
    const response = await fetch(jsonFileUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${jsonFileUrl}`);
    }
    const data = await response.json();

    const randomGenerator = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomGenerator];
    quoteText.textContent = randomQuote;
    
  } catch (error) {
    console.error(error);
  }
}

// 10 second timer to update random quote
function updateQuotePeriodically() {
    getRandomQuote();
    setInterval(getRandomQuote, 10000); 
}
  
updateQuotePeriodically();