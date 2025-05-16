function switchTab(tab) {
    document.getElementById('content-projects').classList.add('hidden');
    document.getElementById('content-team').classList.add('hidden');

    if (tab === 'projects') {
      document.getElementById('tab-projects').classList.add('border-[#FAF1E0]');
      document.getElementById('content-projects').classList.remove('hidden');
    } else {
      document.getElementById('tab-team').classList.add('border-[#F99736]');
      document.getElementById('content-team').classList.remove('hidden');
    }
  }

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote');
    
    // Fetch quotes from your API
    async function fetchQuotes() {
        try {
            const response = await fetch('https://test001-2425.vercel.app/api/quotes');
            if (!response.ok) {
                throw new Error('Failed to fetch quotes');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching quotes:', error);
            return null;
        }
    }
    
    // Display a random quote
    async function displayRandomQuote() {
        const quotes = await fetchQuotes();
        if (quotes && quotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            quoteText.textContent = `${randomQuote.quotes}`;
            quoteAuthor.textContent = `— ${randomQuote.author}`;
        } else {
            quoteText.textContent = "Failed to load quotes. Please try again later.";
            quoteAuthor.textContent = "";
        }
    }
    
    // Initial quote load
    displayRandomQuote();

