let url = 'https://talaikis.com/api/quotes/random/';

function showQuote() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function manipulateHTML(randomQuote) { 
      document.querySelector('.quote-text').textContent = randomQuote.quote;
      document.querySelector('.quote-author').textContent = randomQuote.author;
      document.querySelector('.tweet').setAttribute('href', `https://twitter.com/intent/tweet?text=${randomQuote.quote} -${randomQuote.author}`);
      document.querySelector('.new-quote').addEventListener('click', showQuote);
    })
    .catch(function () {
      console.log("error");
    });
}

showQuote();
