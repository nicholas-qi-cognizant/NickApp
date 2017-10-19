(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.index = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var rp = require('request-promise');
// var rp = require('./../../../lib/request-promise');

module.exports = function (context, callback) {

  var data = {
    "caseDetails": {
      "caseID": "",
      "caseType": "enquiry",
        "caseDatetime": "",
        "customerID": "",
        "data": {
          "note": "note",
          "enquiryType": "test"
        }
      }
  };

  console.info(context.request);
  console.info(context.request.headers);
  console.info(context.request.body);
  
  var addCase = {
    method: 'POST',
    uri: 'https://cs58.salesforce.com/services/apexrest/api/Case',
    auth: {
        'bearer': "00D0l000000CuYe!ARsAQNSwDA7Y4l7vIwkzkuW.WHRZoWZDi6tu8ce9pfL6EcYeTtW_LRJmkPEO3KGU0zWQ1RlbXgUU.uuUjE92FVHgM7fmd0h9"
    },
    body : data,
    json: true
  };

  var caserequest = {
    "status": "S",
    "errorMsg": "",
    "caseID": "01425186"
  };

  // context.response.body = caserequest;

  // rp(addCase)
  // .then(function (response) {
  //   console.info(response);
  // })
  // .catch(function (err) {
  //   console.info(err);
  // });

  var http = require('http');
  var options = {
    hostname: 'https://cs58.salesforce.com',
    path: '/services/apexrest/api/Case',
    port: 80,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': data.length
    },
    body: data,
    auth: {
      'bearer': "00D0l000000CuYe!ARsAQNSwDA7Y4l7vIwkzkuW.WHRZoWZDi6tu8ce9pfL6EcYeTtW_LRJmkPEO3KGU0zWQ1RlbXgUU.uuUjE92FVHgM7fmd0h9"
    }
  };
  var google = {
    hostname: 'www.google.com',
    port: 80,
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  var req = http.request(options, function(res) {
    context.response.body = res;
    // callback();
  });
  req.end();
  callback();
};
},{"http":undefined}],2:[function(require,module,exports){
/**
 * Implementation for http.storefront.routes


 * HTTP Actions all receive a similar context object that includes
 * `request` and `response` objects. These objects are similar to
 * http.IncomingMessage objects in NodeJS.

{
  configuration: {},
  request: http.ClientRequest,
  response: http.ClientResponse
}

 * Call `response.end()` to end the response early.
 * Call `response.set(headerName)` to set an HTTP header for the response.
 * `request.headers` is an object containing the HTTP headers for the request.
 * 
 * The `request` and `response` objects are both Streams and you can read
 * data out of them the way that you would in Node.

 */

module.exports = function(context, callback) {
    console.info(context.request);
    console.info(context.request.url);
    
    var transaction_history = {
        "head": {
            "uuid": "8588e37e-ef62-4723-8ab3-8104a39943ba",
            "ifaceKey": "KB603",
            "ts": 1508028285771
        },
        "body": [{
            "type": "INV",
            "dateTime": "2017-09-21T20:03:38.598Z",
            "reference": "382411509",
            "amount": "2229.26",
            "offset": "-708.45",
            "nett": "1520.81",
            "cumulative": "1520.81"
        }, {
            "type": "INV",
            "dateTime": "2017-09-21T20:03:38.598Z",
            "reference": "382423038",
            "amount": "2388.49",
            "offset": "",
            "nett": "2388.49",
            "cumulative": "3909.30"
        }, {
            "type": "CSH",
            "dateTime": "2017-09-21T20:03:38.598Z",
            "reference": "WEWER",
            "amount": "-1000.00",
            "offset": "",
            "nett": "-1000.00",
            "cumulative": "2909.30"
        }]
    };

    context.response.body = JSON.stringify(transaction_history);

    callback();
};
},{}],3:[function(require,module,exports){
/**
 * Implementation for http.storefront.routes


 * HTTP Actions all receive a similar context object that includes
 * `request` and `response` objects. These objects are similar to
 * http.IncomingMessage objects in NodeJS.

{
  configuration: {},
  request: http.ClientRequest,
  response: http.ClientResponse
}

 * Call `response.end()` to end the response early.
 * Call `response.set(headerName)` to set an HTTP header for the response.
 * `request.headers` is an object containing the HTTP headers for the request.
 * 
 * The `request` and `response` objects are both Streams and you can read
 * data out of them the way that you would in Node.

 */

module.exports = function(context, callback) {
  
    var items = {
        "head": {
            "uuid": "4d92ce1f-50a9-42fc-8c9b-e3a32ba8dae7",
            "ifaceKey": "KB601",
            "ts": 1507940072226
        },
        "body": {
            "customerID": "2023497",
            "totalInvoices": "5542.64",
            "totalUnoffset": "0.00",
            "totalBalance": "5542.64",
            "openItems":    
            [{
                    "hcsInvoiceID": "981805181",
                    "date": "07.09.17",
                    "invoiceAmount": "85.80",
                    "offsetAmount": "",
                    "unoffsetAmount": "85.80"
            }, {
                    "hcsInvoiceID": "981805234",
                    "date": "08.09.17",
                    "invoiceAmount": "3336.85",
                    "offsetAmount": "",
                    "unoffsetAmount": "3336.85"
            }, {
                    "hcsInvoiceID": "981806300",
                    "date": "20.09.17",
                    "invoiceAmount": "1791.76",
                    "offsetAmount": "",
                    "unoffsetAmount": "1791.76"
            }, {
                    "hcsInvoiceID": "981806944",
                    "date": "27.09.17",
                    "invoiceAmount": "328.23",
                    "offsetAmount": "",
                    "unoffsetAmount": "328.23"
            }]
        }
    };

    context.response.body = JSON.stringify(items);

    callback();
  };
},{}],4:[function(require,module,exports){
/**
 * Implementation for http.storefront.routes


 * HTTP Actions all receive a similar context object that includes
 * `request` and `response` objects. These objects are similar to
 * http.IncomingMessage objects in NodeJS.

{
  configuration: {},
  request: http.ClientRequest,
  response: http.ClientResponse
}

 * Call `response.end()` to end the response early.
 * Call `response.set(headerName)` to set an HTTP header for the response.
 * `request.headers` is an object containing the HTTP headers for the request.
 * 
 * The `request` and `response` objects are both Streams and you can read
 * data out of them the way that you would in Node.

 */

module.exports = function(context, callback) {
    console.info(context.request.body);
    var signup = {
      "status": "S",
      "errorMsg": "",
      "caseID": "01425184"
    };
    context.response.body = JSON.stringify(signup);
    
    // var AWS = require('aws-sdk');
    // console.info(context.configuration.accessKeyId);
    // console.info(context.configuration.secretAccessKey);
    // AWS.config.update({
    //   region: 'ap-southeast-2', 
    //   credentials: {
    //     "accessKeyId": context.configuration.accessKeyId,
    //     "secretAccessKey": context.configuration.secretAccessKey
    //   }
    // });
    // var s3 = new AWS.S3();
    // var myBucket = 'hills-dev-arcjs';
    // var myKey = 'myBucketKey';
    // s3.createBucket({
    //     Bucket: myBucket
    // }, function(err, data) {
    //     if (err) {
    //         console.info(err);
    //     } else {
    //         params = {
    //             Bucket: myBucket,
    //             Key: myKey,
    //             Body: 'Hello!'
    //         };
    //         s3.putObject(params, function(err, data) {
    //             if (err) {
    //                 console.info(err);
    //             } else {
    //               console.info("Successfully uploaded data");
    //             }
    //         });
    //     }
    // });
    callback();
  };
},{}],5:[function(require,module,exports){
module.exports = {
  
  'sign_up': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/http.storefront.signup')
  },
  'case_request': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/http.storefront.caserequest')
  },
  'open_item': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/http.storefront.openitems')
  },
  'myaccount_transactionhistory': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/http.storefront.myaccount.transactionhistory')
  }
};

},{"./domains/storefront/http.storefront.caserequest":1,"./domains/storefront/http.storefront.myaccount.transactionhistory":2,"./domains/storefront/http.storefront.openitems":3,"./domains/storefront/http.storefront.signup":4}]},{},[5])(5)
});