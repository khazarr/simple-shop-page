<?php

  $content = $_POST['data'];
  //$decoded = json_decode($content);

  // foreach ($decoded as $key => $value) {
  //   echo "{$key} => {$value} \n";
  // }



  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.edrone.me/trace.php",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    //CURLOPT_POSTFIELDS => "app_id=598ee28767cf4&version=1.0.0&action_type=product_view&platform_version=1.1.26&platform=prestashop&sender_type=server&product_ids=123&product_titles=BUTY%20NIKE%20STEFAN&product_images=http%3A%2F%2Fi.imgur.com%2FquGZsz2.jpg&product_urls=http%3A%2F%2Fi.imgur.com%2FquGZsz2.jpg&product_category_ids=2~3~4&product_category_names=G%C5%82%C3%B3wna~Buty~Sportowe~Nike",
    CURLOPT_POSTFIELDS => $content,
    CURLOPT_HTTPHEADER => array(
      "cache-control: no-cache",
      "content-type: application/x-www-form-urlencoded",
      "postman-token: 535a0f1b-27d7-4fdb-3771-9f8134fc285a"
    ),
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    echo $response;
  }

  echo "\n \n $content \n \n";
  echo "DOSZŁO";

 ?>
