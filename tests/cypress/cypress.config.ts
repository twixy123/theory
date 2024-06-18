import {defineConfig} from "cypress";

module.exports = defineConfig<{env: {FRONT_URL: string}}>({
  env: {
    FRONT_URL: "http://localhost:8080"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
