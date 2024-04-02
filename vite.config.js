import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/movie-effect-with-linear-gradient",
  plugins: [react()],
})
