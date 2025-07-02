// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ED/', // Important for GitHub Pages
  root: '.',     // This ensures Vite knows index.html is in the root
});
