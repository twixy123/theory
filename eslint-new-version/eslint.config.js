import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import myrule from "./custom-eslint-plugin/require-computed-type.js";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    plugins: {
      custom: {
        rules: {
          myrule
        }
      }
    },
    rules: {
      "custom/myrule": "warn"
    }
  }
];
