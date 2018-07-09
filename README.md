# About the site

The random quote generator and blog was born out of my love for quotes and pithy statements. The goldmine of quotes can be found at https://talaikis.com/random_quotes_api/. 

Calling upon this API enables the user to get a random quote out of a collection of 75,000+ quotes from a plethora of authors!



The blog content was born out of my goodwill to spread encouraging content. I provide an accompanying summary of the content along with an explanation as to why a viewer should consume the content. I am using this as my chance to spread content that has helped me on a personal level.



Bootstrap was used. I did some CSS overrides because Bootstrap styling of certain elements takes precedence on the page. Javascript was used to perform the API call. 

# How the API call was done in JavaScript!

```javascript
let url = 'https://talaikis.com/api/quotes/random/'; //Here, we store the API URL into a variable.

function showQuote() {        //A function to get the quote to show.
  fetch(url)                  //Fetching the URL and...
    .then(function (response) {       
      return response.json();       //We turn the data into readable JSON data!
    })                              //The data transfers over to the next functions. Thanks .then!
    .then(function manipulateHTML(randomQuote) {        // Here, this function is meant to literally manipulate HTML. Watch...
      document.querySelector('.quote-text').textContent = randomQuote.quote;
      //The section on the HTML with the class named ".quote-text" is made to inherit the random API quote!
      
      document.querySelector('.quote-author').textContent = randomQuote.author;   
      //The section on the HTML with the class named ".quote-author" is changed to inherit the random quote's author!
      document.querySelector('.tweet').setAttribute('href',`https://twitter.com/intent/tweettext=${randomQuote.quote}-${randomQuote.author}`);               
      //The HREF attribute with the element belonging to class named ".tweet" is changed to the specific twitter path to make a new tweet.          JavaScript ES6 template literals were used in the new custom URL path. 
                                              
      document.querySelector('.new-quote').addEventListener('click', showQuote);  
      //The actual HTML button with the class of .new-quote will now initiate the function "showQuote" in order to get us a new quote 
          and start the transformation
    })
    .catch(function () {
      console.log("error");
    });              
}  // Here is some JavaScript goodness; We are able to create an error catching mechanism here in case 
                            something goes wrong with our operation!

showQuote();          // Remember to declare your function after you make it so we can get the ball rolling.





```
