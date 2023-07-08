import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tailwindcss('./tailwind.config.js')],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/fylo-dark-theme-landing-page/'
  }

  return config
})
