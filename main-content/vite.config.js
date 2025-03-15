// main-content/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main_content',
      filename: 'remoteEntry.js',
      exposes: {
        './HomePage': './src/components/HomePage.jsx',
        './AboutPage': './src/components/AboutPage.jsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5001,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});