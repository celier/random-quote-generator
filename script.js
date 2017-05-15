$(document).ready(function() {

    $("#getMessage").on("click", function() {
       $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
      
        var html = "";

       
        
        
        
        
        json.forEach(function(val) {

         
          html +=  val.content + "<br>" + val.title;

          html += "<br>";

        });

        $(".message").html(html);

      });
    });
  });