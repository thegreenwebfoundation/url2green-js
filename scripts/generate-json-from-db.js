#!/usr/bin/env node

/*eslint no-console: 0*/

import path from "path";
import { fileURLToPath } from "url";
import hostingDB from "../src/hosting-database.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dbPath = path.resolve(__dirname, "..", "data", "url2green.db");

const jsonPath = path.resolve(__dirname, "..", "data", "url2green.json");

hostingDB.dumpDomains(dbPath, jsonPath);
