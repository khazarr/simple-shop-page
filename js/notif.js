//notifications

Notification.requestPermission();

setTimeout(sendNotification, 5000);

function sendNotification() {
  console.log("HALKO!");
  var e = new Notification("Edrone", data);
  e.onclick = function(event) {
    event.preventDefault(); // prevent the browser from focusing the Notification's tab
    window.open('http://www.edrone.me', '_blank');
  }
}

var data = {
  body: "CRM dla eCommerce",
  icon: 'https://prowly-uploads.s3.amazonaws.com/uploads/press_rooms/company_logos/198/preview_logo-z-nazwa.png'
};
