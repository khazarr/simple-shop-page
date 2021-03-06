$("#basket-preview").hide();

function basktPreviewDisplay(basket) {
  console.log("basket previewewer");
  //clear preview display
  $("#basket-item-display").html('');

  //add each item
  basket.map(function (item) {
    console.log(item['product_url']);
    $("#basket-item-display").append(
    '<tr>'+
    '  <td class="col-sm-8 col-md-6">' +
      '  <div class="media">' +
            '<a class="thumbnail pull-left" href="#"> <img id="product-preview-img" class="media-object" '+
            'src=' + item['product_url'] +
            ' </a>' +
            '<div class="media-body">' +
                '<h4 class="media-heading">'+ item['product_title']+'</h4>' +
          '  </div>' +
        '</div></td>' +

        '<td class="col-sm-1 col-md-1 text-center"><strong>'+ item['price'] + ' zł</strong></td>' +
    '</tr>'
    );
  });


  //add total bar
  $("#basket-item-display").append(
    '<tr>' +
                      '  <td><h3>Suma:</h3></td>' +
        '<td class="text-right"><h3><strong>'+getBasketPrice(basket)+' zł</strong></h3></td>' +
    '</tr>'+
    '<tr ><td></td><td id="close-basket-preview" class="text-right">Kliknij aby zamknąć</td></tr>'
  );
}


$("#basket-info-preview").click(function () {
  $("#basket-preview").fadeIn();
  basktPreviewDisplay(basket);
});

$("#basket-preview").click(function () {
  $("#basket-preview").fadeOut();
});
// $("#basket-info-preview").mouseleave(function () {
//   setTimeout(function () {
//     $("#basket-preview").fadeOut();
//   },2000);
//
// });
