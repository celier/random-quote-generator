/* start function */
  function getQuote(container,authorContainer,field){
    
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json){
    var array = json;
    
    
    /* Test */
    
    for (var i = 0; i < array.length; i++){
      console.log(array);  
      return array.indexOf(content);     
       }
    
    console.log(array);
     var html = "";
      
     json.filter(function(val){
       /* add a way to filter out all json keys except for the "field" passed as function parameter */
       
     });
      
        json.forEach(function(val) {
        var keys = Object.keys(val);
          keys.forEach(function(key) {  
            
            html += val[key] + "<br>";  
});          
});
      
    $( container ).html(html);
       });
    
    var html = "";
      
     json.filter(function(val){
       /* add a way to filter out all json keys except for the "field" passed as function parameter */
       return val.indexOf(key) == field;
     });
      
        json.forEach(function(val) {
        var keys = Object.keys(val);
          keys.forEach(function(key) {  
            
            html += val[key] + "<br>";  
});          
});
      
    $( authorContainer ).html(html);
       };
    
/* end function */  

$(document).ready(function(){

  getQuote('#quote','#quote-author',content);
    
  $( '#quote-btn' ).on("click", function(){
   
    getQuote('#quote','#quote-author',content);       
    }) 
  });