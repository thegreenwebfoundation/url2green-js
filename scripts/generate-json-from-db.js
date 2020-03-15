#!/usr/bin/env node

/*eslint no-console: 0*/

const path = require("path");

const hostingDB = require("../src/hosting-database");

const dbPath = path.resolve(__dirname, "..", "data", "url2green.db");

const jsonPath = path.resolve(__dirname, "..", "data", "url2green.json");

hostingDB.dumpDomains(dbPath, jsonPath);
