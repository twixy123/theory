module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint", "import", "etc"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "plugin:vue-scoped-css/vue3-recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error", "debug"] }],
    "etc/no-commented-out-code": "warn",
    "no-duplicate-imports": "error",
    "no-extra-boolean-cast": 0,
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: false,
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
      },
    ],
    "vue/custom-event-name-casing": [
      "error",
      "camelCase",
      {
        ignores: [],
      },
    ],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/order-in-components": [
      "error",
      {
        order: [
          "name",
          "components",
          "inheritAttrs",
          "props",
          "emits",
          "setup",
        ],
      },
    ],
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/v-on-event-hyphenation": [
      "error",
      "always",
      {
        autofix: true,
      },
    ],
    "vue/prefer-true-attribute-shorthand": ["error"],
    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "ts",
        },
      },
    ],
    "vue/no-v-html": "off",
    "vue/valid-v-slot": [
      "error",
      {
        allowModifiers: true,
      },
    ],
    "vue-scoped-css/enforce-style-type": ["error", { allows: ["scoped"] }],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "@/**/**",
            group: "parent",
            position: "before",
          },
        ],
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "vue/dist/vue",
          },
        ],
      },
    ],
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["src/*"],
            message: "The path must not begin with 'src'",
          },
        ],
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["app", "wrapper"],
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  ignorePatterns: ["**/*.css"],
};
