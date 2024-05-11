import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://30-seconds-test.s3-website.eu-north-1.amazonaws.com',
    supportFile: false,
    specPattern: 'tests/e2e-test/**/*.cy.js',
  }
})
