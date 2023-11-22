const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const textCopy = document.getElementById('quote').innerHTML;
const quoteAuthor = document.getElementById('author');
const instagramBtn = document.getElementById('instagram');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];
//To Pick Random Quote
function newQuotes (){
const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
console.log(quotes);
quoteAuthor.textContent=quotes.author;
quoteText.textContent=quotes.text;


}

async function getQuotes(){
    const ApiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(ApiUrl);
        apiQuotes = await response.json();
        newQuotes();
    } catch (error) {
        
    }
}
function copyText() {
    const textCopy = document.getElementById('quote').innerHTML;
    const authorCopy = document.getElementById('author').innerHTML;
    navigator.clipboard.writeText('"' + textCopy + '"' + '   '+  authorCopy);
    console.log('Content copied to clipboard');    
};
newQuoteBtn.addEventListener('click', newQuotes);
instagramBtn.addEventListener('click', copyText);
getQuotes();
