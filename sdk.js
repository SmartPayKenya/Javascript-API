/*      @source: http://api.smartpay.co.ke/sdk.js
        @licstart  The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2016  Geoffrey Mureithi

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
        */
/* global ajax */

Smartpay = {
    API: 'http://www.smartpay.co.ke/api',
    CLIENT_ADD: '/clients/add',
    CLIENT_BILL: '/clients/bill',
    CLIENT_SUBSCRIBE: '/clients/subscribe',
    PAYMENT_ADD: '/payments/add',
    PAYMENT_CONFIRM: '/payments/confirm',
    client : {
        add : function(client, callback){
            ajax.post(Smartpay.API + Smartpay.CLIENT_ADD ,client,function(response){
                callback(response.status, response.data);
                if(Smartpay.hooks.on.client.add && response.status === 200)
                    Smartpay.hooks.on.client.add();
            });
            
        },
        
        bill : function(bill, callback){
            ajax.post(Smartpay.API + Smartpay.CLIENT_BILL,bill,function(response){
                callback(response.status, response.data);
                if(Smartpay.hooks.on.client.bill && response.status === 200)
                    Smartpay.hooks.on.client.bill();
            });
            
        },
        subscribe : function(subscription, callback){
            ajax.post(Smartpay.API + Smartpay.CLIENT_SUBSCRIBE,subscription,function(response){
                callback(response.status, response.data);
                if(Smartpay.hooks.on.client.subscribe && response.status === 200)
                    Smartpay.hooks.on.client.subscribe();
            });
            
        }
    },
    payment :{
        add: function(payment, callback){
                ajax.post(Smartpay.API + Smartpay.PAYMENT_ADD,payment,function(response){
                        callback(response.status, response.data);
                        if(Smartpay.hooks.on.payment.add && response.status === 200)
                            Smartpay.hooks.on.payment.add();
                });
                
        },
        confirm: function(payment, callback){
                    ajax.get(Smartpay.API + Smartpay.PAYMENT_CONFIRM ,payment,function(response){
                        callback(response.status, response.data);
                        if(Smartpay.hooks.on.payment.confirm && response.status === 200)
                            Smartpay.hooks.on.client.confirm();
                    });
                    
        }
    },
    hooks : {
        on:{
            client:{
                
            },
            payment: {
                
            }
        }
    }
};


