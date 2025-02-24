import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Use relative paths so assets load correctly
  plugins: [react()],
})