# Javascript-API
Javascript API for SmartPayKenya

##Instatization
It is recomended you load the Js File Async.

```javascript
   // Load the SDK asynchronously
   var script = document.createElement("script");  
        script.src = '//api.smartpay.co.ke/sdk.js';  
        script.onload = script.onreadystatechange = function(){  
          script.onreadystatechange = script.onload = null;  
        }  
        var head = document.getElementsByTagName("head")[0];  
        (head || document.body).appendChild( script ); 
```
