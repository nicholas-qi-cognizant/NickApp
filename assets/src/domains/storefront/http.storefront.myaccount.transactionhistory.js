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