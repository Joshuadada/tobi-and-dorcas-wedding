import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

function socialMetadataPlugin(): Plugin {
  return {
    name: 'wedding-social-metadata',
    transformIndexHtml(html) {
      const configuredUrl =
        process.env.VITE_SITE_URL ??
        process.env.VERCEL_PROJECT_PRODUCTION_URL ??
        process.env.URL ??
        process.env.VERCEL_URL

      if (!configuredUrl) return html.replaceAll('__SITE_URL__', '')

      const normalizedUrl = configuredUrl.startsWith('http')
        ? configuredUrl
        : `https://${configuredUrl}`
      const siteUrl = new URL(normalizedUrl).toString().replace(/\/+$/, '')

      return html.replaceAll('__SITE_URL__', siteUrl)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), socialMetadataPlugin()],
})
