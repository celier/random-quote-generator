$(document).ready(function() {

    $( "#quote-btn" ).on("click", function() {
       $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
      
       $ ( "#quote" ).html("<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>" + json[0].content + "<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>");
       $ ( "#quote-author" ).html("A quote from " + json[0].title);

    });
   });
});