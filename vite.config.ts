import { defineConfig } from 'vite';
import webExtension, { readJsonFile } from 'vite-plugin-web-extension';

function generateManifest () {
  const manifest = readJsonFile('src/manifest.json');
  const pkg = readJsonFile('package.json');
  return {
    name: '__MSG_appName__',
    description: '__MSG_appDescription__',
    version: pkg.version,
    ...manifest
  };
}

export default defineConfig({
  plugins: [
    webExtension({
      manifest: generateManifest,
      watchFilePaths: ['package.json', 'manifest.json']
    })
  ],
  resolve: {
    alias: {
      '~bootstrap': 'node_modules/bootstrap'
    }
  }
});
