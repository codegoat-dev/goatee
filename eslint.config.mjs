import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginJsonc from "eslint-plugin-jsonc";

export default [
  {
    files: [
      "**/*.js",
      "**/*.json"
    ],
    languageOptions: {
      sourceType: "module"
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
  {
    ignores: [
      ".vscode/*",
      "build/*",
      "temp/*",
      "*.md",
      "package*.json"
    ]
  },
  {
    rules: {
      "no-unused-vars": 0,
      "no-redeclare": 1,
      "no-dupe-keys": 1,
      "no-self-assign": 1,
      "no-await-in-loop": 0,
      "no-useless-escape": 1,
      "no-unexpected-multiline": 1,
      "no-mixed-spaces-and-tabs": 1,
      "no-extra-semi": 1,
      "quotes": [
        "error",
        "double"
      ],
      "indent": [
        "error",
        2
      ],
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "comma-dangle": [
        "error",
        "never"
      ],
      "array-element-newline": [
        "error",
        "always"
      ],
      "newline-per-chained-call": [
        "error",
        {
          ignoreChainWithDepth: 1
        }
      ],
      "no-trailing-spaces": [
        "error",
        {
          skipBlankLines: false,
          ignoreComments: false
        }
      ],
      "linebreak-style": [
        "error",
        "windows"
      ],
      "semi": [
        "error",
        "always"
      ],
      "semi-style": [
        "error",
        "last"
      ]
    }
  }
];
