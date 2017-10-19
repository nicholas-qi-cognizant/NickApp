module.exports = {
  
  'sign_up': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/http.storefront.signup')
  },
  'case_request': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/http.storefront.caserequest')
  },
  'open_item': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/http.storefront.openitems')
  },
  'myaccount_transactionhistory': {
      actionName: 'http.storefront.routes',
      customFunction: require('./domains/storefront/http.storefront.myaccount.transactionhistory')
  }
};
