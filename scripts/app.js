
// Theme Switcher
const themeButton = document.getElementById("themeButton");
const body = document.body;
const darkThemeClass = "dark-theme";
let isDarkTheme = false;

// Check for a user's theme preference in local storage
if (localStorage.getItem("themePreference") === "dark") {
  isDarkTheme = true;
  body.classList.add(darkThemeClass);
}

// Function to toggle the theme
function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  if (isDarkTheme) {
    body.classList.add(darkThemeClass);
    localStorage.setItem("themePreference", "dark");
  } else {
    body.classList.remove(darkThemeClass);
    localStorage.setItem("themePreference", "light");
  }
}

// Add an event listener to the theme button
if (themeButton) {
  themeButton.addEventListener("click", () => {
    toggleTheme();
    console.log("The theme button was clicked!");
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

// Fetch and display a random quote
const quotesUrl = 'data/quotes.json';
const quoteText = document.getElementById('quote-text');

async function getRandomQuote() {
  try {
    const response = await fetch(quotesUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${quotesUrl}`);
    }

    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    quoteText.textContent = randomQuote;

  } catch (error) {
    console.error(error);
  }
}

// Periodically update the random quote every 10 seconds
function updateQuotePeriodically() {
  getRandomQuote();
  setInterval(getRandomQuote, 10000);
}
updateQuotePeriodically();

// Event listeners for aside buttons to scroll to sections
const buttons = document.querySelectorAll('.btn-aside');
const sections = document.querySelectorAll('.section-hidden');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    sections[index].scrollIntoView({ behavior: 'smooth' });
  });
});
