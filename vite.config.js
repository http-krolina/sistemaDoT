import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    fastRefresh: true, // Garante que o HMR funcione corretamente
  })],
  server: {
    hmr: {
      overlay: false // Desativa overlays de erro se estiverem atrapalhando
    }
  }
});
