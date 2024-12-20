"use strict";

import debug from "debug";
import Database from "better-sqlite3";
import fs from "fs";
import { promisify } from "util";

const log = debug("tgwf:hostingDatabase");
const writeFile = promisify(fs.writeFile);

function getQ(domains) {
  const q = [];
  for (let domain of domains) {
    q.push("?");
  }
  return q.join(",");
}

function getDatabase(databaseFullPathAndName) {
  log(`looking for db at ${databaseFullPathAndName}`);
  return new Database(databaseFullPathAndName, {
    readonly: true,
    fileMustExist: true,
  });
}

function check(domain, dbName) {
  let db;

  try {
    db = getDatabase(dbName);
  } catch (SqliteError) {
    log(`couldn't find SQlite database at path: ${dbName}`);
    throw SqliteError;
  }

  // is it a single domain or an array of them?
  if (typeof domain === "string") {
    return checkInDB(domain, db);
  } else {
    return checkDomainsInDB(domain, db);
  }
}

function checkInDB(domain, db) {
  try {
    const stmt = db.prepare("SELECT * FROM greendomain WHERE url = ?");
    return !!stmt.get(domain).green;
  } finally {
    if (db) {
      db.close();
    }
  }
}

function greenDomainsFromResults(greenResults) {
  const entries = Object.entries(greenResults);
  let greenEntries = entries.filter(function ([key, val]) {
    return val.green;
  });

  return greenEntries.map(function ([key, val]) {
    return val.url;
  });
}

function checkDomainsInDB(domains, db) {
  try {
    const stmt = db.prepare(
      `SELECT * FROM greendomain WHERE url in (${getQ(domains)})`,
    );

    const res = stmt.all(domains);

    return greenDomainsFromResults(res);
  } finally {
    if (db) {
      db.close();
    }
  }
}

async function dumpDomains(dbName, filePath) {
  const db = getDatabase(dbName);

  const justThedomains = function (row) {
    return row.url;
  };

  try {
    const stmt = db.prepare("SELECT url FROM greendomain");

    const res = stmt.all();

    await writeFile(filePath, JSON.stringify(res.map(justThedomains)));
    return res.map(justThedomains);
  } finally {
    if (db) {
      db.close();
    }
  }
}

export default {
  check,
  dumpDomains,
};
