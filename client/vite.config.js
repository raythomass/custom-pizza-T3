import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'https://api.render.com/deploy/srv-cn65252cn0vc73dam70g?key=bAiTciQ5hlo',
        secure: false,
        changeOrigin: true
      }
    }
  }
});
