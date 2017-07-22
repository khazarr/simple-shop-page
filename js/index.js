
$( document ).ready(function() {
    console.log( "Page loaded" );
    
    

   

    //product view -send
          (function (srcjs) {
               window._edrone = window._edrone || {};

               _edrone.app_id = '59722eee745af';

               var doc = document.createElement('script');
               doc.type = 'text/javascript';
               doc.async = true;
               doc.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + srcjs;
               var s = document.getElementsByTagName('script')[0];
               s.parentNode.insertBefore(doc, s);
           })("//d3bo67muzbfgtl.cloudfront.net/edrone_2_0.js");
       _edrone.app_id = '59722eee745af';
       _edrone.version = '1.0.0';
       _edrone.action_type = 'product_view';
       _edrone.platform_version = '1.1.26';
       _edrone.platform = 'customer';
       _edrone.product_skus = '525104021';
       _edrone.product_ids = '021';
       _edrone.product_titles = 'BUTY NIKE STEFAN JANOSKI GS';
       _edrone.product_images = 'http://i.imgur.com/quGZsz2.jpg';
       _edrone.product_urls = 'index.html';
       _edrone.product_category_ids = '2~3~4';
       _edrone.product_category_names = 'Główna~Buty~Sportowe~Nike';
    
    //add to cart - send trace
    $("#basket-add").click(function(){
        //$.getScript('js/add-to-cart.js');
        (function (srcjs) {
            window._edrone = window._edrone || {};

            _edrone.app_id = '59722eee745af';

            var doc = document.createElement('script');
            doc.type = 'text/javascript';
            doc.async = true;
            doc.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + srcjs;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(doc, s);
        })("//d3bo67muzbfgtl.cloudfront.net/edrone_2_0.js");       


        _edrone.app_id = '59722eee745af';
       _edrone.version = '1.0.0';
       _edrone.action_type = 'add_to_cart';
       _edrone.platform_version = '1.1.26';
       _edrone.platform = 'customer';
       _edrone.product_skus = '525104021';
       _edrone.product_ids = '021';     
       _edrone.product_titles = 'BUTY NIKE SUPER';
       _edrone.product_images = 'http://i.imgur.com/quGZsz2.jpg';
       _edrone.product_urls = 'index.html';
       _edrone.product_category_ids = '2~3~4';
       _edrone.product_category_names = 'Główna~Buty~Sportowe~Nike';
        alert("Dodano do koszyka");
        
 
    })
    
    
    //thumbnail
    //change pic on enter and add border, remove border on other pics
    
    //pic 1
    $("#pic1").mouseenter(function(){
        $("#thumb").children().css({border: "2px solid #d4d4d4"});
        $("#pic1").css({border: "4px solid black"});
        $("#big-pic").attr("src","pics/pic1.jpg");
    });
    
    //pic2
    $("#pic2").mouseenter(function(){
        $("#thumb").children().css({border: "2px solid #d4d4d4"});
        $("#pic2").css({border: "4px solid black"});
        $("#big-pic").attr("src","pics/pic2.jpg");
    });
    
    //pic3
    $("#pic3").mouseenter(function(){
        $("#thumb").children().css({border: "2px solid #d4d4d4"});
        $("#pic3").css({border: "4px solid black"});
        $("#big-pic").attr("src","pics/pic3.jpg");
    });
    
     //pic4
    $("#pic4").mouseenter(function(){
        $("#thumb").children().css({border: "2px solid #d4d4d4"});
        $("#pic4").css({border: "4px solid black"});
        $("#big-pic").attr("src","pics/pic4.jpg");
    });
    
     //pic5
    $("#pic5").mouseenter(function(){
        $("#thumb").children().css({border: "2px solid #d4d4d4"});
        $("#pic5").css({border: "4px solid black"});
        $("#big-pic").attr("src","pics/pic5.jpg");
    });
  
    
    
    
    
    
});