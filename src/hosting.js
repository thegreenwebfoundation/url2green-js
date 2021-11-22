"use strict";

const log = require("debug")("tgwf:hosting");
const hostingDatabase = require("./hosting-database");

function check(domain, dbName) {
  return hostingDatabase.check(domain, dbName);
}

module.exports = {
  check,
};
