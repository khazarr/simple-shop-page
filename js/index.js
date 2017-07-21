// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    //product view
    
    
    //add to cart
    
    
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