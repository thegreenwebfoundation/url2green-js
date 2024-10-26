# url2green-js

An npm module for local analysis and checks of domains against the Green Web Foundation datasets.

Normally you can check domain against the The Green Web Foundation url2green dataset, the `co2` module. Assuming you have installed it with `npm install @tgwf/co2`, you can then check a domain like so:


```js

import greencheck from "@tgwf/hosting"

// returns true if green, otherwise false
await greencheck.check("google.com")

// returns an array of the green domains, in this case ["google"].
await  greencheck.check(["google.com", "kochindustries.com"])"]
```

## Usage

The above checks work by sending a request to the Green Web Foundation Greencheck API, visible at api.thegreenwebfoundation.org.

For speed, privacy or reliability reasons, you may prefer to perform the same kinds of checks against the url2green dataset, a local snapshot of the dataset used when hitting the API.

To do so, install this module with `npm install @tgwf/url2green`. You can then use the same API to check against a local SQLite database.


```js

import hostingDB from "@tgwf/hosting-database"

// returns true if green, otherwise false
await hostingDB.check("google.com", "path/to/database.db");

// returns an array of the green domains, in this case ["google.
await hostingDB.check(["google.com", "kochindustries.com"], "path/to/database.db");
```

## Fetching the latest copy of the url2green dataset

By default, the url2green module includes a recent copy of the url2green dataset, and is accessible at `data/url2green.db`.

You can generate a simple JSON list of the domains to check against, with `dumpDomains`.


```js
import hostingDB from "@tgwf/hosting-database"

await hostingDB.dumpDomains("path/to/database.db", "path/to/output.json");
```

In cases where you don't want to rely on SQLite, this will generate a JSON file that allows you to perform the same lookups, using the `@tgwf/co2` module.


### Fetching updated snapshots from the Green Web Foundation

You can fetch the most recent copy of the url2green dataset from The Green Web Foundation.

https://www.thegreenwebfoundation.org/green-web-datasets/


## Licensing

We encourage the use of this in tooling and services, where you might rely on the [Green Web Foundation Greencheck API][api] - this helps with managing load on our servers, and we hope it will enable uses we haven't thought of yet. If you have questions, please file an issue

The code is licensed under the [Apache 2.0 license][apache-2.0].

The dataset is provided under the [Open Database License][odbl]

[api]: https://.thegreenwebfoundation.org/
[apache-2.0]: https://www.apache.org/licenses/LICENSE-2.0.html
[odbl]: https://opendatacommons.org/licenses/odbl/summary/index.html


