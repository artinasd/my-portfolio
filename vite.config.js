import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Changed from '/my-portfolio/' to '/' for custom domain / standard root deployment
  base: '/',
})