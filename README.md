# Javascript-API
Javascript API for SmartPayKenya

##Instatization
It is recomended you load the Js File Async.

```javascript
   // Load the SDK asynchronously
   var script = document.createElement("script");  
        script.src = '//www.smartpay.co.ke/ajax.js';  
        script.onload = script.onreadystatechange = function(){  
          script.onreadystatechange = script.onload = null;  
        }  
        var head = document.getElementsByTagName("head")[0];  
        (head || document.body).appendChild( script ); 
   var script = document.createElement("script");  
        script.src = '//www.smartpay.co.ke/sdk.js';  
        script.onload = script.onreadystatechange = function(){  
          script.onreadystatechange = script.onload = null;  
        }  
        var head = document.getElementsByTagName("head")[0];  
        (head || document.body).appendChild( script ); 

```
You can also include directly
```html
<script src="/ajax.js"></script> <!--Handle Ajax Requests-->
<script src="/sdk.js"></script>
```
##Setting Up
Set up the `SmartPay` Settings

```javascript
SmartPay.API = 'Your API Url';
//And the API Paths
SmartPay.CLIENT_ADD: '/clients/add',
SmartPay.CLIENT_BILL: '/clients/bill',
SmartPay.CLIENT_SUBSCRIBE: '/clients/subscribe',
SmartPay.PAYMENT_ADD: '/payments/add',
SmartPay.PAYMENT_CONFIRM: '/payments/confirm',
```
##Actions
### Creating a Client
```javascript
var client;
SmartPay.client.add({
  name: 'John Wanjiku',
  phone: '0712232222',
  email: 'wanjikujohn@gmail.com'
}, function(status, response) {
    console.log(response.id);
    console.log(status);
    //status is the code. eg 200, 404
    // response.id is the client id.
    client = response.id;
});
```
### Creating a Bill to the Client
```javascript
var bill;
SmartPay.client.bill({
  client: client,
  amount: 900,
  items: [
      [{name : 'Domain smartpay.co.ke'}, {price: 800}],
      [{name : 'Privacy'}, {price: 100}]
  ]
}, function(status, response) {
    console.log(response.id);
    console.log(status);
    //status is the code. eg 200, 404
    // response.id is the bill id.
    bill = response.id;
});
```
### Confirm a Payment
```javascript
var payment;
SmartPay.payment.confirm({
  client: client,
  amount: 900,
  method: 'MPESA',
  code: 'KXAPORTZD90'
}, function(status, response) {
    console.log(response.id);
    console.log(status);
    //status is the code. eg 200, 404
    // response.id is the Payment id.
    payment = response.id;
});
```

## Hooks
###Example on client create
```javascript
SmartPay.hooks.on.client.add = function(){
    console.log('Client Added');
};
```
