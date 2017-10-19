var needle = require('needle');
exports.makeSampleCall = function (bodyStr) {
	var promise = new Promise(function (resolve, reject) {
		try {
			needle.post('http://google.com',
			{
				headers: {
					'Content-Type': 'text/xml'
				},
				body: bodyStr
			}, function (error, response) {
				if (!error && response.statusCode == 200) {
					console.log('Inside needle request');
					resolve(response);
				} else {
					reject(response.statusCode);
				}
			});
		} catch (err) {
			reject(console.error(err));    
		}
	});
  
	return promise;
};