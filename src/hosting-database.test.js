"use strict";

import hosting from "./hosting-database";
import path from "path";
import fs from "fs";
import { promisify } from "util";
const readFile = promisify(fs.readFile);

describe("hostingDatabase", function () {
  const jsonPath = path.resolve(__dirname, "..", "url2green.test.json");
  const dbPath = path.resolve(
    __dirname,
    "..",
    "data",
    "fixtures",
    "url2green.test.db",
  );

  describe("generating a dump of green domains #dump", function () {
    test("serialised as a JSON file", async function () {
      // generate json
      await hosting.dumpDomains(dbPath, jsonPath);

      // parse the json
      const jsonBuffer = await readFile(jsonPath);

      const parsedDomains = JSON.parse(jsonBuffer);

      expect(parsedDomains.length).toBe(1);
    });
    // tidy up database dump created after tests
    afterAll(function () {
      return unlink(jsonPath);
    });
  });
  describe("checking a single domain with #check", function () {
    test("tries to use a local database if available ", async function () {
      const res = await hosting.check("google.com", dbPath);
      expect(res).toEqual(true);
    });
  });
  describe("implicitly checking multiple domains with #check", function () {
    test("tries to use a local database if available", async function () {
      const res = await hosting.check(
        ["google.com", "kochindustries.com"],
        dbPath,
      );
      expect(res).toContain("google.com");
    });
  });
});
