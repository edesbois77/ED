import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ED/', // ✅ This is the key line to add
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
