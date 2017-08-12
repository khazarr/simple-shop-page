//function
function jsonToUri(json) {
  return encodeURIComponent(JSON.stringify(json));
}

function xwwwfurlenc(srcjson){
    if(typeof srcjson !== "object")
      if(typeof console !== "undefined"){
        console.log("\"srcjson\" is not a JSON object");
        return null;
      }
    u = encodeURIComponent;
    var urljson = "";
    var keys = Object.keys(srcjson);
    for(var i=0; i <keys.length; i++){
        urljson += u(keys[i]) + "=" + u(srcjson[keys[i]]);
        if(i < (keys.length-1))urljson+="&";
    }
    return urljson;
}


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




//products array
var products = [
  {
    product_id:"021",
    product_title:"BUTY NIKE STEFAN JANOSKI GS",
    product_url:"http://i.imgur.com/quGZsz2.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: 259,
    active: true
  },
  {
    product_id:"022",
    product_title:"BUTY NIKE ZOOM STEFAN JANOSKI CNVS 642",
    product_url:"https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-cnvs-642-00-640c.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: 209,
    active: false
  },
  {
    product_id:"023",
    product_title:"BUTY NIKE ZOOM STEFAN JANOSKI 603",
    product_url:"https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-603-00-640c.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: 319,
    active: false
  },
  {
    product_id:"024",
    product_title:"BUTY NIKE ZOOM STEFAN JANOSKI 215",
    product_url:"https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-215-00-640c.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: 309,
    active: false
  },
  {
    product_id:"025",
    product_title:"BUTY NIKE ZOOM STEFAN JANOSKI 409",
    product_url:"https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-409-00-640c.jpg",
    product_category_id:"2~3~4",
    product_category_name:"Główna~Buty~Sportowe~Nike",
    price: 259,
    active: false
  },

];

//basket array

var basket = [];


//calculate basket pirice

function getBasketPrice(bsk){
  var total = 0;

  for (var i = 0; i < bsk.length ; i++){
    total += parseInt(bsk[i]['price']);
  }

  return total;
}

// clear basket

function basketClear() {
  localStorage.removeItem("edrone_basket");
  $("#buy-button").hide();
  $("#basket-info").hide();
  $("#clear-basket").hide();
  basket = [];

}

    //hide buy-button until basket not empty - check local storage
    if(localStorage.getItem("edrone_basket") === null ){
      $("#buy-button").hide();
      $("#basket-info").hide();
      $("#clear-basket").hide();

    }
    else{
      // load basket from local storage
      basket = JSON.parse(localStorage.getItem("edrone_basket"));
      console.log("BASKET HERE");
      console.log(basket);

      $("#basket-info").html("Elementy w koszyku: " + basket.length);
    }



    //add to cart - send trace
    $("#basket-add").click(function(){

      //basket not empty, show buy-button
      $("#buy-button").show();
      $("#basket-info").show();
      $("#clear-basket").show();



      for (var i = 0; i < products.length ; i++){
        if(products[i]['active']){

          //append basket array
          basket.push(products[i]);

          //store basket in localstorage
          localStorage.setItem("edrone_basket",JSON.stringify(basket));

          //send edrone trace
          _edrone.product_ids = products[i]['product_id'];
          _edrone.product_titles = products[i]['product_title'];
          _edrone.product_images = products[i]['product_url'];
          _edrone.product_urls = 'https://www.wp.pl/';
          _edrone.product_category_ids = '2~3~4';
          _edrone.product_category_names = 'Główna~Buty~Sportowe~Nike';
          _edrone.action_type = 'add_to_cart';
          _edrone.init();
          console.log(basket);


          //update basket info
          $("#basket-info").html("Elementy w koszyku: " + basket.length);
        }
      }
      // _edrone.action_type = 'add_to_cart';
      //_edrone.init();
    })



// thubnails change picture / add border
    $(".small-pic").mouseenter(function(){
      var that = $(this);
        $("#thumb").children().css({border: "2px solid #d4d4d4"});
        that.css({border: "4px solid black"});
        //$("#big-pic").attr("src","pics/pic" + that.data('id') + ".jpg");
        //$("#big-pic").attr("src",products[that.data('id')]['product_url']);
        //console.log(thad)
    });

    //thumb onclick
    $(".small-pic").click(function() {
      var that = $(this);
      console.log("Product with id:" + that.data('id')+ "clicked");

      //change page view
      $("#product-name").html(products[that.data('id')]['product_title']);
      $("#product-code").html(products[that.data('id')]['product_id']);
      $("#price").html(products[that.data('id')]['price'] + ",00 zł");
      $("#big-pic").attr("src",products[that.data('id')]['product_url']);


      //change state of product to active
      for(var i = 0; i< products.length ; i++){
        products[i]['active'] = false;
      }

      products[that.data('id')]['active'] = true;

      //console.log(products[that.data('id')]);
      //console.log(products);

      //send trace product view

      _edrone.product_ids = products[that.data('id')]['product_id'];
      _edrone.product_titles = products[that.data('id')]['product_title'];
      _edrone.product_images = products[that.data('id')]['product_url'];
      _edrone.product_urls = 'https://www.wp.pl/';
      _edrone.product_category_ids = '2~3~4';
      _edrone.product_category_names = 'Główna~Buty~Sportowe~Nike';
      _edrone.action_type = 'product_view';
      _edrone.init();

    });


    //clearing basket
    $("#clear-basket").click(function() {
      localStorage.removeItem("edrone_basket");
      $("#buy-button").hide();
      $("#basket-info").hide();
      $("#clear-basket").hide();
      basket = [];

    });



    //buy-button logic
    $("#buy-button").click(function () {
      $("#basket-quantity-total").html("Elementy w koszyku: " + basket.length);
      $("#basket-value-total").html("Wartość koszyka: " + getBasketPrice(basket) +" zł");
    });

    //place order
    $("#place-order").click(function () {
        console.log("Kupuje!");
        var order = {};

        //prepare data for POST
        // ids, titles, imgages, urls,categories,prod
        var ids = "";
        for(var i = 0; i < basket.length ; i++){
          ids += basket[i]['product_id'] + "|";
        }
        ids = ids.slice(0,-1);

        order['ids'] = ids;

        var titles = "";
        for(var i = 0; i < basket.length ; i++){
          titles += basket[i]['product_title'] + "|";
        }
        titles = titles.slice(0,-1);

        order['titles'] = titles;

        var imgs = "";
        for(var i = 0; i < basket.length ; i++){
          imgs += basket[i]['product_url'] + "|";
        }
        imgs = imgs.slice(0,-1);

        order['imgs'] = imgs;
        order['urls'] = imgs;


        var catIds = "";
        var counts = "";
        var catNames = "";
        for(var i = 0; i < basket.length ; i++){
          catIds += basket[i]['product_category_id'] + "|";
          counts += "1|";
          catNames += basket[i]['product_category_name'] + "|";
        }
        catIds = catIds.slice(0,-1);
        counts = counts.slice(0,-1);
        catNames = catNames.slice(0,-1);
        order['catIds'] = catIds;
        order['catNames'] = catNames;
        order['counts'] = counts;



        order['email'] = $("#email-form").val();
        order['first_name'] = $("#name-form").val();
        order['last_name'] = $("#surname-form").val();
        order['subscribe'] = $("#subscribe-form").is(':checked') ? 1 : 0;
        order['city'] = $("#city-form").val();
        order['payment_value'] = getBasketPrice(basket);


       _edrone.action_type = 'order';
       _edrone.email = order['email'];
       _edrone.first_name = order['first_name'];
       _edrone.last_name = order['last_name'];
       _edrone.subscriber_status = order['subscribe'];
       _edrone.product_ids = order['ids'];
       _edrone.product_titles = order['titles'];
       _edrone.product_images = order['imgs'];
       _edrone.product_urls = order['urls'];
       _edrone.product_category_ids = order['catIds'];
       _edrone.product_category_names = order['catNames'];
       _edrone.product_counts = order['counts'];
       _edrone.order_id = '4321';
       _edrone.country = 'Polska';
       _edrone.city = order['city'];
       _edrone.base_currency = 'PLN';
       _edrone.order_currency = 'PLN';
       _edrone.base_payment_value = order['payment_value'];
       _edrone.order_payment_value = order['payment_value'];

        //AJAX send
        var json_upload = JSON.stringify(_edrone);
        var edroneURI = xwwwfurlenc(_edrone);
        //console.log(json_upload);
        //console.log(edroneURI);

        $.ajax({
            url: "js/edrone.php",
            type: "post",
            data: {data:edroneURI} ,
            success: function (response) {
               // you will get response from your php page (what you echo or print)
               console.log(response);
               alert("Zamówienie przetworzone pomyślnie");
               $("#myModal").modal('hide');
               basketClear();
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
            }


        });

    })
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
