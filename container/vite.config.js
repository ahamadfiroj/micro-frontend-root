// container/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        main_content: 'https://f79nn5-5001.csb.app/assets/remoteEntry.js',
        secondary_content: 'https://f79nn5-5002.csb.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5000,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});