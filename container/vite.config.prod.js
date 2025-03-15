// container/vite.config.prod.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// Update these URLs with your actual Vercel deployment URLs once deployed
const MAIN_CONTENT_URL = 'https://home-page-lime-three.vercel.app/';
const SECONDARY_CONTENT_URL = 'https://privacy-policy-lyart-nu.vercel.app/';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        main_content: `${MAIN_CONTENT_URL}/assets/remoteEntry.js`,
        secondary_content: `${SECONDARY_CONTENT_URL}/assets/remoteEntry.js`,
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});