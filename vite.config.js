import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Force restart to pick up Tailwind CSS v4 changes
export default defineConfig({
  plugins: [react()],
})
