

const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        console.log("The button was clicked!");
        document.body.classList.toggle("dark-theme");
    });
} else {
    console.log("The themeButton element is null.");
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

const hiddenElements = document.querySelectorAll('.section-hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Fetch and choose random quote
const quotesUrl = 'data/quotes.json';
const quoteText = document.getElementById('quote-text');

async function getRandomQuote() {
    try {
        const response = await fetch(quotesUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${quotesUrl}`);
        }

        const data = await response.json();
        const randomGenerator = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomGenerator];
        quoteText.textContent = randomQuote;

    } catch (error) {
        console.error(error);
    }
}

// 10-second timer to update random quote
function updateQuotePeriodically() {
    getRandomQuote();
    setInterval(getRandomQuote, 10000);
}
updateQuotePeriodically();


// Event listener for each aside button
const buttons = document.querySelectorAll('.btn-aside');
const sections = document.querySelectorAll('.section-hidden');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});
