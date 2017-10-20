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

    context.response.body = items;

    callback();
  };