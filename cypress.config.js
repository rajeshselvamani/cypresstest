const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      config.env = config.env || {}

      // you could extract only specific variables
      // and rename them if necessary
     
      config.env.THEME_ID = process.env.THEME_ID
      
      return config
    },
    specPattern:'cypress/integration/examples/*.js',
   // screenshotsFolder: 'cypress/screenshots',

  },
  projectId: "7n337z",
  video: true,

  "env": {
    "username": "samp",
    "password": "",
    "THEME_ID": ""
  }
});
