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