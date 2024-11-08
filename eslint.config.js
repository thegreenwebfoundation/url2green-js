import prettier from "eslint-plugin-prettier";
import jest from "eslint-plugin-jest";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("eslint:recommended"),
  {
    plugins: {
      prettier,
      jest,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...jest.environments.globals.globals,
      },

      ecmaVersion: 2020,
    },

    rules: {
      "prettier/prettier": ["error", { trailingComma: "all" }],
      "no-unused-vars": "off",
    },
  },
];
