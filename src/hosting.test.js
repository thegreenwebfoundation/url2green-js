"use strict";

import path from "path";
import hosting from "./hosting";

const dbPath = path.resolve(
  __dirname,
  "..",
  "data",
  "fixtures",
  "url2green.test.db",
);

describe("hosting", function () {
  describe("checking a single domain with #check", function () {
    it("tries to use a local database", async function () {
      const res = await hosting.check("google.com", dbPath);
      expect(res).toEqual(true);
    });
  });
  describe("implicitly checking multiple domains with #check", function () {
    it("tries to use a local database if available", async function () {
      const res = await hosting.check(
        ["google.com", "kochindustries.com"],
        dbPath,
      );
      expect(res).toContain("google.com");
    });
  });
  describe("explicitly checking multiple domains with #checkMulti", function () {
    it("tries to use a local database if available", async function () {
      const res = await hosting.check(
        ["google.com", "kochindustries.com"],
        dbPath,
      );
      expect(res).toContain("google.com");
    });
  });
});
