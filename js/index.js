
// edrone init
(function (srcjs) {
     window._edrone = window._edrone || {};

     _edrone.app_id = '598ee28767cf4';
     _edrone.version = '1.0.0';
     _edrone.platform_version = '1.1.26';
     _edrone.platform = 'magento';

     _edrone.action_type = 'product_view';

     //default products view
     _edrone.product_ids = '021';
     _edrone.product_titles = 'BUTY NIKE STEFAN JANOSKI GS';
     _edrone.product_images = 'http://i.imgur.com/quGZsz2.jpg';
     _edrone.product_urls = 'https://www.wp.pl/';
     _edrone.product_category_ids = '2~3~4';
     _edrone.product_category_names = 'Główna~Buty~Sportowe~Nike';

     var doc = document.createElement('script');
     doc.type = 'text/javascript';
     doc.async = true;
     doc.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + srcjs;
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(doc, s);
 })("//api.edrone.me/edrone_2_0.js");

    //add to cart - send trace
    $("#basket-add").click(function(){
       _edrone.action_type = 'add_to_cart';
       _edrone.init();
    })



//products array
var products = [
  {
    product_id:"021",
    product_title:"BUTY NIKE STEFAN JANOSKI GS",
    product_url:"http://i.imgur.com/quGZsz2.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: "259"
  },
  {
    product_id:"022",
    product_title:"BUTY NIKE ZOOM STEFAN JANOSKI CNVS 642",
    product_url:"https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-cnvs-642-00-640c.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: "259"
  },
  {
    product_id:"023",
    product_title:"BUTY NIKE ZOOM STEFAN JANOSKI 603",
    product_url:"https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-603-00-640c.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: "259"
  },
  {
    product_id:"024",
    product_title:"BUTY NIKE ZOOM STEFAN JANOSKI 215",
    product_url:"https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-215-00-640c.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: "259"
  },
  {
    product_id:"025",
    product_title:"BUTY NIKE ZOOM STEFAN JANOSKI 409",
    product_url:"https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-409-00-640c.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: "259"
  },

];



// thubnails change picture
    $(".small-pic").mouseenter(function(){
      var that = $(this);
        $("#thumb").children().css({border: "2px solid #d4d4d4"});
        that.css({border: "4px solid black"});
        //$("#big-pic").attr("src","pics/pic" + that.data('id') + ".jpg");
        $("#big-pic").attr("src",products[that.data('id')]['product_url']);
        //console.log(thad)
    });

    //thumb onclick
    $(".small-pic").click(function() {
      var that = $(this);
      console.log("Product with id:" + that.data('id')+ "clicked");
    });



    //size button style change

    $("#size-btn-1").click(function(){

        $("#size-col").children().removeClass("btn-size-active");
        $("#size-btn-1").addClass("btn-size-active");

    });

    $("#size-btn-2").click(function(){

        $("#size-col").children().removeClass("btn-size-active");
        $("#size-btn-2").addClass("btn-size-active");

    });

      $("#size-btn-3").click(function(){

        $("#size-col").children().removeClass("btn-size-active");
        $("#size-btn-3").addClass("btn-size-active");

    });
