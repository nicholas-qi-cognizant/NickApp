// var rp = require('request');
var needle = require('needle');

module.exports = function (context, callback) {


  console.info(context.request);
  console.info(context.request.headers);
  console.info(context.request.body);

  var caserequest = {
    "status": "S",
    "errorMsg": "",
    "caseID": "01425186"
  };

  // context.response.body = caserequest;

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
  var accessToken = '00D0l000000CuYe!ARsAQB4T2S_9zX6czS52D2lLJulOUjNPIc9Y7A7k7ofX_1_oOK4ICZzkoJiD19v4fTPz7aNoRh0Oype2N1PA.tfpuQqnfh4t';

  var options = {
    headers: {
        'Authorization': 'Bearer ' + accessToken
    },
    json: true
  };

  needle.post('https://cs58.salesforce.com/services/apexrest/api/Case', data, options, function(err, res) {
      context.response.body = res.body;
      callback();
  });

};