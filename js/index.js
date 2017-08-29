// edrone init
(function(srcjs) {
  window._edrone = window._edrone || {};

  _edrone.app_id = '59a553d62e4a3';
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
var products = [{
    product_id: "021",
    product_title: "BUTY NIKE STEFAN JANOSKI GS",
    product_url: "http://i.imgur.com/quGZsz2.jpg",
    product_category_id: "2~3~4",
    product_category_name: "Główna~Buty~Sportowe~Nike",
    price: 259,
    active: true
  },
  {
    product_id: "022",
    product_title: "BUTY NIKE ZOOM STEFAN JANOSKI CNVS 642",
    product_url: "https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-cnvs-642-00-640c.jpg",
    product_category_id: "2~3~4",
    product_category_name: "Główna~Buty~Sportowe~Nike",
    price: 209,
    active: false
  },
  {
    product_id: "023",
    product_title: "BUTY NIKE ZOOM STEFAN JANOSKI 603",
    product_url: "https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-603-00-640c.jpg",
    product_category_id: "2~3~4",
    product_category_name: "Główna~Buty~Sportowe~Nike",
    price: 319,
    active: false
  },
  {
    product_id: "024",
    product_title: "BUTY NIKE ZOOM STEFAN JANOSKI 215",
    product_url: "https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-215-00-640c.jpg",
    product_category_id: "2~3~4",
    product_category_name: "Główna~Buty~Sportowe~Nike",
    price: 309,
    active: false
  },
  {
    product_id: "025",
    product_title: "BUTY NIKE ZOOM STEFAN JANOSKI 409",
    product_url: "https://static.eastend.pl/e2pl/zdjecia/buty-nike-zoom-stefan-janoski-409-00-640c.jpg",
    product_category_id: "2~3~4",
    product_category_name: "Główna~Buty~Sportowe~Nike",
    price: 259,
    active: false
  },

];

//basket array

var basket = [];

// functions ///////////////////////////////////////////////////////////////////////////

//json to x-www-form-urlencoded
function xwwwfurlenc(srcjson) {
  if (typeof srcjson !== "object")
    if (typeof console !== "undefined") {
      console.log("\"srcjson\" is not a JSON object");
      return null;
    }
  u = encodeURIComponent;
  var urljson = "";
  var keys = Object.keys(srcjson);
  for (var i = 0; i < keys.length; i++) {
    urljson += u(keys[i]) + "=" + u(srcjson[keys[i]]);
    if (i < (keys.length - 1)) urljson += "&";
  }
  return urljson;
}

//calculate basket pirice
function getBasketPrice(bsk) {
  var total = 0;

  for (var i = 0; i < bsk.length; i++) {
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


function mailValidate(email) {
  var re = /\S+@\S+\.\S+/;

  if (re.test(email)) {
    return true;
  } else {
    alert("Wprowadź poprawny adres email.")
    return false;
  }
}

function textValidate(text) {
  var re = /^[a-zA-Z]+$/;

  if (text === "") {
    alert("Żadne pole nie może byc puste");
    return false;
  }
  else {
    return true;
  }

  //regex for only letters - no special characters
  // if (re.test(text)) {
  //   return true;
  // } else {
  //   alert(text + " jest niepoprawne. Użyj tylko liter, bez polskich znaków.");
  //   return false;
  // }



}


function validateOrderInput() {

  var nameVal = textValidate($("#name-form").val());
  if (!nameVal) return false;

  var surnameVal = textValidate($("#surname-form").val());
  if (!surnameVal) return false;

  var mailVal = mailValidate($("#email-form").val());
  if (!mailVal) return false;

  var cityVal = textValidate($("#city-form").val());
  if (!cityVal) return false;


  return true;
}


function saveMail(email) {

  localStorage.setItem("customerMail", email);
  console.log("Mail saved: " + email);

}

function getMail() {
  var mail = localStorage.getItem("customerMail");
  return mail === null ? "unknown@mail.com" : mail;
}

function isMailStored() {
  var mail = localStorage.getItem("customerMail");
  return mail === null ? false : true;
}

function isOrderIdStored() {
  var id = localStorage.getItem("edroneOrderId");
  return id === null ? false : true;
}

function getStoredOrderId() {
  if (isOrderIdStored) {
    return localStorage.getItem("edroneOrderId");
  }
}

function mailClearStorage() {

}

function orderClearStorage() {
  localStorage.removeItem("edroneOrderId");
}
////////////////////////////////////////////////////////////////////////////////////////////////
//hide cancel-order && basket-info-preview
if (isOrderIdStored()) {
  $("#cancel-last-order").show();
  $("#basket-info-preview").show();
} else {
  $("#cancel-last-order").hide();
  $("#basket-info-preview").hide();
}
//hide buy-button until basket not empty - check local storage
if (localStorage.getItem("edrone_basket") === null) {
  $("#buy-button").hide();
  $("#basket-info").hide();
  $("#clear-basket").hide();

} else {
  // load basket from local storage
  basket = JSON.parse(localStorage.getItem("edrone_basket"));
  console.log("BASKET HERE");
  console.log(basket);

  $("#basket-info").html("Elementy w koszyku: " + basket.length);
  $("#basket-info-preview").show();
}



//add to cart - send trace
$("#basket-add").click(function() {

  //basket not empty, show buy-button
  $("#buy-button").show();
  $("#basket-info").show();
  $("#clear-basket").show();
  $("#basket-info-preview").show();


  for (var i = 0; i < products.length; i++) {
    if (products[i]['active']) {

      //append basket array
      basket.push(products[i]);

      //store basket in localstorage
      localStorage.setItem("edrone_basket", JSON.stringify(basket));

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
$(".small-pic").mouseenter(function() {
  var that = $(this);
  $("#thumb").children().css({
    border: "2px solid #d4d4d4"
  });
  that.css({
    border: "4px solid black"
  });
  //$("#big-pic").attr("src","pics/pic" + that.data('id') + ".jpg");
  //$("#big-pic").attr("src",products[that.data('id')]['product_url']);
  //console.log(thad)
});

//thumb onclick
$(".small-pic").click(function() {
  var that = $(this);
  console.log("Product with id:" + that.data('id') + "clicked");

  //change page view
  $("#product-name").html(products[that.data('id')]['product_title']);
  $("#product-code").html(products[that.data('id')]['product_id']);
  $("#price").html(products[that.data('id')]['price'] + ",00 zł");
  $("#big-pic").attr("src", products[that.data('id')]['product_url']);


  //change state of product to active
  for (var i = 0; i < products.length; i++) {
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


//clearing basket - order canacel
$("#clear-basket").click(function() {
  localStorage.removeItem("edrone_basket");
  $("#buy-button").hide();
  $("#basket-info").hide();
  $("#clear-basket").hide();
  $("#basket-info-preview").hide();
  basket = [];

});



//buy-button logic
$("#buy-button").click(function() {
  $("#basket-quantity-total").html("Elementy w koszyku: " + basket.length);
  $("#basket-value-total").html("Wartość koszyka: " + getBasketPrice(basket) + " zł");
});

//place order
$("#place-order").click(function() {
  console.log("Kupuje!");
  //create new order object
  var order = {};

  //prepare data for POST
  // ids, titles, imgages, urls,categories,prod
  var ids = "";
  var titles = "";
  var imgs = "";
  var catIds = "";
  var counts = "";
  var catNames = "";

  for (var i = 0; i < basket.length; i++) {
    catIds += basket[i]['product_category_id'] + "|";
    counts += "1|";
    catNames += basket[i]['product_category_name'] + "|";
    ids += basket[i]['product_id'] + "|";
    titles += basket[i]['product_title'] + "|";
    imgs += basket[i]['product_url'] + "|";
  }
  catIds = catIds.slice(0, -1);
  counts = counts.slice(0, -1);
  catNames = catNames.slice(0, -1);
  imgs = imgs.slice(0, -1);
  titles = titles.slice(0, -1);
  ids = ids.slice(0, -1);

  // fill order objcect with data
  order['action_type'] = 'order';
  order['product_category_ids'] = catIds;
  order['product_category_names'] = catNames;
  order['product_counts'] = counts;
  order['email'] = $("#email-form").val();
  order['first_name'] = $("#name-form").val();
  order['last_name'] = $("#surname-form").val();
  order['subscriber_status'] = $("#subscribe-form").is(':checked') ? 1 : 0;
  order['city'] = $("#city-form").val();
  order['base_payment_value'] = getBasketPrice(basket);
  order['order_payment_value'] = getBasketPrice(basket);
  order['order_id'] = Math.floor(Math.random() * (1000 - 2)) + 1;
  order['country'] = 'Polska';
  order['base_currency'] = 'PLN';
  order['order_currency'] = 'PLN';
  order['product_images'] = imgs;
  order['product_urls'] = imgs;
  order['product_titles'] = titles;
  order['product_ids'] = ids;

  //obligatory edrone lib fields
  order['app_id'] = _edrone['app_id'];
  order['version'] = _edrone['version'];
  order['platform_version'] = _edrone['platform_version'];
  order['platform'] = _edrone['platform'];

  //encode JSON to x-www-form-urlencoded
  var edroneURI = xwwwfurlenc(order);
  var orderStringified = JSON.stringify(order);
  //console.log(edroneURI);

  // save order_id to allow order canacel
  localStorage.setItem("edroneOrderId", order['order_id']);

  //before sending data to check if they are valid
  if (validateOrderInput()) {

    $.ajax({
      url: "js/edrone.php",
      type: "post",
      data: {
        data: orderStringified
      },
      success: function(response) {
        console.log(response);
        alert("Zamówienie przetworzone pomyślnie");
        $("#myModal").modal('hide');
        basketClear();
        $("#cancel-last-order").show();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  }




})

//save mail to local storage
$("#email-form").focusout(function() {
  var that = $(this);
  var mail = that.val();
  if (mailValidate(mail)) {
    saveMail(mail);
  }
  //console.log(that.val());

  //send subscribe trace (0 - not willing to subscribe)
  _edrone.action_type = 'subscribe';
  _edrone.email = mail;
  _edrone.subscriber_status = '0';
  _edrone.init();
});

//send subscribe trace after tick
$("#subscribe-form").click(function() {
  if ($("#subscribe-form").is(':checked') && $("#email-form").val() !== "") {

    //if mail field is not empty - mail is saved to local storage
    _edrone.action_type = 'subscribe';
    _edrone.email = getMail();
    _edrone.subscriber_status = '1';
    _edrone.init()
    console.log("SUBSKRYBENT");
  }
});

//cancel-last-order
$("#cancel-last-order").click(function() {
  console.log("Canceled");

  //send order cancel trace
  _edrone.email = getMail();
  _edrone.action_type = 'order_cancel';
  _edrone.order_id = getStoredOrderId();
  _edrone.init();

  orderClearStorage();
  $("#cancel-last-order").hide();

  alert("Zamówienie zostało anulowane");

});


//size button style change

$("#size-btn-1").click(function() {

  $("#size-col").children().removeClass("btn-size-active");
  $("#size-btn-1").addClass("btn-size-active");

});

$("#size-btn-2").click(function() {

  $("#size-col").children().removeClass("btn-size-active");
  $("#size-btn-2").addClass("btn-size-active");

});

$("#size-btn-3").click(function() {

  $("#size-col").children().removeClass("btn-size-active");
  $("#size-btn-3").addClass("btn-size-active");

});
