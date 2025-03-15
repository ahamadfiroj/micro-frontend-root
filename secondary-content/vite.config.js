// secondary-content/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'secondary_content',
      filename: 'remoteEntry.js',
      exposes: {
        './ContactPage': './src/components/ContactPage.jsx',
        './PrivacyPage': './src/components/PrivacyPage.jsx',
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
    port: 5002,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});