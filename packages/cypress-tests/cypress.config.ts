import { defineConfig } from 'cypress';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  projectId: 'Repro',
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000,
  screenshotsFolder: './dist/screenshots/',
  videosFolder: './dist/videos/',
  retries: 2,
  env: {
    'test-var': false
  },
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: false,
    specPattern: '**/*.feature',
    excludeSpecPattern: ['**/__snapshots__/*'],
  }
});
