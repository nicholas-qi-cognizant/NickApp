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