import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ED/', // this is crucial for GitHub Pages to resolve paths
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
