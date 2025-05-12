const searchInput = document.getElementById("search-input");
const quoteList = document.getElementById("quote-list");

async function fetchQuotes() {
  try {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    console.log(data);  
    allQuotes = data.quotes;  // Save the quotes in a global variable
    displayQuotes(allQuotes);  // Display all quotes initially
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

function displayQuotes(quotes) {
  quoteList.innerHTML = '';  // Clear any existing quotes
  quotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = `${quote.quote} - ${quote.author}`;  // Use the 'quote' and 'author' keys
    quoteList.appendChild(li);
  });
}

function filterQuotes(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredQuotes = allQuotes.filter((quote) =>
    quote.quote.toLowerCase().includes(searchTerm)  // Filter by 'quote' key
  );
  displayQuotes(filteredQuotes);
}

let allQuotes = [];

searchInput.addEventListener("input", filterQuotes);

fetchQuotes();  // Initial fetch of quotes
