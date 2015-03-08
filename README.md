# Javascript-API
Javascript API for SmartPayKenya

#Instatization
It is recomended you load the Js File Async.
   // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//api.smartpay.co.ke/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'smartpay-jssdk'));
