"use strict";

import hostingDatabase from "./hosting-database";

function check(domain, dbName) {
  return hostingDatabase.check(domain, dbName);
}

export default { check };
