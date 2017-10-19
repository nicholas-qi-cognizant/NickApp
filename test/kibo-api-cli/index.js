var request = require('request-promise');
var fs = require('fs');

/* read settings from environment variables */
const tenantId = process.env.KIBO_TENANT_ID;
const siteId = process.env.KIBO_SITE_ID;
const masterCatalogId = process.env.KIBO_MASTER_CATALOG_ID;
const developerAccountId = process.env.KIBO_DEVELOPER_ACCOUNT_ID;
const applicationId = process.env.KIBO_APPLICATION_ID;
const sharedSecret = process.env.KIBO_SHARED_SECRET;

const baseURL = 'home.mozu.com'
const sandboxURL = `t${tenantId}.sandbox.mozu.com`;

const helpText = `Usage is
node index {METHOD} {URL} [REQUEST_BODY_STRING]
node index {METHOD} {URL} < [INPUT_FILE]

E.g.
  node index GET api/commerce/customer/accounts
  node index POST api/commerce/admin/locationtypes "{\\"code\\":\\"test\\",\\"name\\":\\"Test Location Type\\"}"
  node index POST api/commerce/admin/locationtypes < test.json
`;

if (process.argv.length < 4) {
    console.log(helpText);
    return 1;
}




const method = process.argv[2];
const apiURL = process.argv[3] || 'api/commerce/customer/accounts';


const requestURL = `https://${sandboxURL}/${apiURL}`;
const userAgent = 'WGET';


const loginURL = 'https://' + sandboxURL + '/api/platform/developer/authtickets/?developerAccountId=' + developerAccountId;
const applicationAuth = 'https://' + baseURL + '/api/platform/applications/authtickets/?responseFields=';
const tenantPod = 'https://' + sandboxURL;



const applicationAuthJSON = JSON.stringify({
    "applicationId": applicationId,
    "sharedSecret": sharedSecret,
});


//console.log(process.stdin);

var requestJSON = "";
if (process.argv.length > 4) {
    requestJSON = process.argv[4]
    makeCall().then(function () {
        process.exit(0);
    }).catch(function () {
        process.exit(1);
    });
} else {
    var readableCount = 0;
    var hasData = false;
    process.stdin.on('data', function (chunk) {
        requestJSON += chunk;
        if (requestJSON) {
            hasData = true;
        }
    });
    process.stdin.on('end', function () {
        makeCall().then(function () {
            process.exit(0);
        }).catch(function () {
            process.exit(1);
        });
    });
    process.stdin.on('readable', function () {
        readableCount++;
        if (readableCount === 2 && !hasData) {
            makeCall().then(function () {
                process.exit(0);
            }).catch(function () {
                process.exit(1);
            })
        }
    });
}



function makeCall() {
    return request({
        url: applicationAuth,
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Connection": "close",
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": userAgent,
            'Content-Length': applicationAuthJSON.length.toString()
        },
        body: applicationAuthJSON
    }).then(function (res) {
        let accessToken = JSON.parse(res).accessToken;
        let requestJSONString = typeof requestJSON === 'string' ? requestJSON : JSON.stringify(requestJSON);
        return request({
            url: requestURL,
            method: method,
            headers: {
                "Accept": "application/json",
                "Connection": "close",
                "Content-Type": "application/json; charset=utf-8",
                "User-Agent": userAgent,
                "Content-Length": !requestJSONString ? 0 : requestJSONString.length.toString(),
                "x-vol-app-claims": accessToken,
                "x-vol-tenant": tenantId,
                "x-vol-site": siteId,
                "x-vol-master-catalog": masterCatalogId,
                "x-vol-version": "1.1705.17038.0"
            },
            body: requestJSONString
        });
    }).then(function (res) {
        console.log(res);
        console.log('DONE');
    }).catch(function (error) {
        console.log(error);
        console.log('ERROR');
        throw error;
    })
}

