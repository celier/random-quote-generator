/***
@name : random quote generator.
@objectives : Grabs a quote from API, print it to screen.
***/

$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });
});

var currentQuote = "";

function getQuote() {
 	 
 	 $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
      
       $ ( "#quote" ).html(json[0].content);
       $ ( "#quote-author" ).html("A quote from " + json[0].title);
       currentQuote = "\"" + $("#quote").text() + "\"" + "  -" + $("#quote-author").text() + "\!";
    });
 }

 getQuote();

$( "#quote-btn" ).click(function() {
	
getQuote();

   });

$(document).ready(function() {
  $('#twitter-btn').click(function() {
    if (currentQuote.length <= 140) {
      window.open("https://twitter.com/intent/tweet?text=" + currentQuote);
    } else {
      window.open("https://twitter.com/intent/tweet?text=" + currentQuote.slice(0, 136) + "...");
    }
  });
});