const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementsByClassName("author");
const button = document.getElementById("btn");
function randomQuote() {
     fetch("https://api.quotable.io/random")
 .then(response => response.json())
 .then(data => {
        quoteText.textContent = data.content;
        quoteAuthor.textContent = `-- ${data.author}`;
 }); 

}
randomQuote();
button.addEventListener('click', () => {
        randomQuote();
});
