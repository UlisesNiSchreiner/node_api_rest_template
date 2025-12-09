const js = require("@eslint/js");
const ts = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const importPlugin = require("eslint-plugin-import");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: ["dist", "coverage", "docs"],
  },

  js.configs.recommended,

  // ---------- TypeScript (código de la librería) ----------
  {
  files: ["test/**/*.ts"],
  languageOptions: {
    parser: tsParser,
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
      // Vitest + Node
      describe: "readonly",
      it: "readonly",
      test: "readonly",
      expect: "readonly",
      beforeAll: "readonly",
      beforeEach: "readonly",
      afterAll: "readonly",
      afterEach: "readonly",
      vi: "readonly",
      process: "readonly",
      console: "readonly",
    },
  },
  plugins: {
    import: importPlugin,
    "@typescript-eslint": ts,
  },
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
},
  // ---------- Tests (Vitest) ----------
  {
    files: ["test/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        // Vitest + Node
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        afterAll: "readonly",
        afterEach: "readonly",
        vi: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      import: importPlugin,
      "@typescript-eslint": ts,
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  // ---------- Scripts Node (init-template, etc.) ----------
  {
    files: ["scripts/**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
];
