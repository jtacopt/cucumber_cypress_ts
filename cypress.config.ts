import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: '*.ts',
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    experimentalStudio: true,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    execTimeout: 120000,
  },
})
