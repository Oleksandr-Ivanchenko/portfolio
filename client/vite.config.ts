import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages at https://<user>.github.io/portfolio
  // the base must be the repository name root so assets load from
  // /portfolio/assets/... instead of /assets/...
  base: '/portfolio/',
})
