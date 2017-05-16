/***
@name : random quote generator.

@objectives : Grabs a quote from API, print it to screen.

***/


function getQuote() {
 	 
 	 $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
      
       $ ( "#quote" ).html(json[0].content);
       $ ( "#quote-author" ).html("A quote from " + json[0].title);

    });
 }

 getQuote();

$(document).ready(function() {

$( "#quote-btn" ).on("click", function() {

      getQuote();

   });
});