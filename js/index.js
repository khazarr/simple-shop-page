// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    

   

    //product view -send
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
    
    //add to cart
    $("#basket-add").click(function(){
        $.getScript('js/add-to-cart.js');
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