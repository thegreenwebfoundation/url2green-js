# url2green-js

An npm module for local analysis and checks of domains against the Green Web Foundation datasets.

Normally you can check domain against the The Green Web Foundation url2green dataset, the `co2` module. Assuming you have installed it with `npm install @tgwf/co2`, you can then check a domain like so:


```js

const greencheck = require('@tgwf/hosting')

// returns true if green, otherwise false
greencheck.check("google.com")

// returns an array of the green domains, in this case ["google"].
greencheck.check(["google.com", "kochindustries.com"])"]
```

## Usage

The above checks work by sending a request to the Green Web Foundation Greencheck API, visible at api.thegreenwebfoundation.org.

For speed, privacy or reliability reasons, you may prefer to perform the same kinds of checks against the url2green dataset, a local snapshot of the dataset used when hitting the API.

To do so, install this module with `npm install @tgwf/url2green`. You can then use the same API to check against a local SQLite database.


```js

const hostingDB = require('@tgwf/hosting-database');

// returns true if green, otherwise false
hostingDB.check("google.com", "path/to/database.db");

// returns an array of the green domains, in this case ["google.
hostingDB.check(["google.com", "kochindustries.com"], "path/to/database.db");
```

## Fetching the latest copy of the url2green dataset

You can fetch the most recent copy of the url2green dataset from:

https://www.thegreenwebfoundation.org/green-web-datasets/


## Licensing

The code is licensed Apache 2.0.

The dataset


