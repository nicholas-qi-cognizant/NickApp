// var rp = require('request-promise');
var rp = require('./../../../lib/request-promise');

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
        'bearer': "00D0l000000CuYe!ARsAQD0CCs0JAmwuQ86uCH30qCBxeXm8sX55UMQLVJBRNMDUQ0S8r_x3XhQKyPydc6v0ZmH2SchrBKVM7csYumMrVfUpUh86"
    },
    body : data,
    json: true
  };

  var caserequest = {
    "status": "S",
    "errorMsg": "",
    "caseID": "01425186"
  };

  rp(addCase)
  .then(function (response) {
    console.info(response);
  })
  .catch(function (err) {
    console.info(err);
  });

  context.response.body = caserequest;
  callback();
};