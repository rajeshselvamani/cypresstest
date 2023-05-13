const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      config.env = config.env || {}

      // you could extract only specific variables
      // and rename them if necessary
     
      config.env.testvar = process.env.testvar
      
      return config
    },
    specPattern:'cypress/integration/examples/*.js',
   // screenshotsFolder: 'cypress/screenshots',

  },
  projectId: "7n337z",
  video: false,

  "env": {
    "username": "samp",
    "password": "",
    "samp": ""
  }
});
