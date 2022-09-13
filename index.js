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
const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;

likeBtn.addEventListener("click", () => {
        if (!clicked) {
          clicked = true;
          likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
          count.textContent++;
        } else {
          clicked = false;
          likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
          count.textContent--;
        }
      });