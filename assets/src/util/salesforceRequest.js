var needle = require('needle');
var data = {
    grant_type: 'password',
    client_id: "3MVG99S6MzYiT5k_oeMcgP6vHtPt43ZRH.bsSiAXn1AHsE_RuhgLJMRvM5377.MzFSYa018vfvVV15DF2QwtE",
    client_secret: "6808011191677093881",
    username: "kibo@hills.com.au.full",
    password: "k1boCogn1Zant"
  };
exports.makeSampleCall = function () {
	var promise = new Promise(function (resolve, reject) {
		try {
            needle.post('https://cs58.salesforce.com/services/oauth2/token', data, { 
                timeout: 5000, 
                multipart: true 
            }, function (error, response) {
				if (!error && response.statusCode == 200) {
					console.log('Inside needle request');
                    resolve(response);
				} else {
					reject(response.statusCode);
				}
			});
		} catch (err) {
			reject(console.info(err));    
		}
	});
  
	return promise;
};