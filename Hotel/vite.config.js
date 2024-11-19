import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hotel-booking/',  // Set this to your repo name or subfolder path
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensures Vite outputs the build files to the dist folder
  },
})
