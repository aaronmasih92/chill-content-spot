# About the site

The random quote generator and blog was born out of my love for quotes and pithy statements. The goldmine of quotes can be found at https://talaikis.com/random_quotes_api/. 

Calling upon this API enables the user to get a random quote out of a collection of 75,000+ quotes from a plethora of authors!



The blog content was born out of my goodwill to spread encouraging content. I provide an accompanying summary of the content along with an explanation as to why a viewer should consume the content. I am using this as my chance to spread content that has helped me on a personal level.



Bootstrap was used. I did some CSS overrides because Bootstrap styling of certain elements takes precedence on the page. Javascript was used to perform the API call. 

# How the API call was done in JavaScript!

```javascript
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





```
