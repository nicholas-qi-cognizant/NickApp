# Kibo API CLI

# Setup
```
npm install
```

# Environment Variables
```
export KIBO_TENANT_ID=23413
export KIBO_SITE_ID=34451
export KIBO_APPLICATION_ID=Hills.NickApp.1.0.0.Release
export KIBO_SHARED_SECRET=26bbe27d44124325abfde5bca27a5d5d
export KIBO_DEVELOPER_ACCOUNT_ID=6576
export KIBO_MASTER_CATALOG_ID=1

node index GET api/commerce/customer/accounts
```

# Request Body
There are two ways to manipulate the request body.
```
node index POST api/commerce/admin/locationtypes "{\"code\":\"test\",\"name\":\"Test Location Type\"}"
node index POST api/commerce/admin/locationtypes < test.json
```


