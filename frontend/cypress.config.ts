import { defineConfig } from "cypress";

export default defineConfig({
  cucumber: {
    features: "./features",
    stepDefinitions: "./stepDefinitions",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
