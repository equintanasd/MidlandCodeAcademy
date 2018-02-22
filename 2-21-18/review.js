alert('Hello, class!');

var danger = 'big dogs';
var hotdogs = 5;
var liftFiftyLbs = true;

var shoeBrands = ['Nike', 'Adidas', 'New Balance'];
shoeBrands[2];

var backpack = {
  zippers: 3,
  wornIn: true,
  brand: 'Targus',
  pouches: [
    {
      full: false,
      size: 'Large',
      laptop: false
    },
    {
      full: true,
      size: 'Medium',
      laptop: false
    },
    {
      full: true,
      size: 'Small',
      laptop: false
    }
  ]
}

var customer = {
  "id": "cus_CMrlG3IWDXu2Om",
  "object": "customer",
  "account_balance": 0,
  "created": 1519259625,
  "currency": "usd",
  "default_source": null,
  "delinquent": false,
  "description": null,
  "discount": null,
  "email": null,
  "invoice_prefix": "f4e00b7597",
  "livemode": false,
  "metadata": {
  },
  "shipping": null,
  "sources": {
    "object": "list",
    "data": [

    ],
    "has_more": false,
    "total_count": 0,
    "url": "/v1/customers/cus_CMrlG3IWDXu2Om/sources"
  },
  "subscriptions": {
    "object": "list",
    "data": [

    ],
    "has_more": false,
    "total_count": 0,
    "url": "/v1/customers/cus_CMrlG3IWDXu2Om/subscriptions"
  }
}

// has_more for sources
console.log( customer.sources.has_more );

// url for subscriptions
console.log( customer.subscriptions.url );

console.log(`My mom says "Be wary of the ${danger}".`);

console.log('My mom says "Be wary of the ' + danger + '".');
