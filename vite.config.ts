import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// A prototype build (VITE_PROTOTYPE=1) is hosted away from the official site,
// so it asks search engines not to index it.
function prototypeNoindex(enabled: boolean): Plugin {
  return {
    name: 'prototype-noindex',
    transformIndexHtml(html) {
      if (!enabled) return html
      return html.replace('</head>', '    <meta name="robots" content="noindex">\n  </head>')
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // The official site is served from the domain root. GitHub Pages serves this
    // repository under /d-hacks-web/, so its workflow sets BASE_PATH.
    base: env.BASE_PATH || '/',
    plugins: [vue(), prototypeNoindex(env.VITE_PROTOTYPE === '1')],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      // The research list comes from the lab server's API, which only answers
      // same-origin requests. In development, pass /api through to it.
      proxy: {
        '/api': { target: 'https://d-hacks.jn.sfc.keio.ac.jp', changeOrigin: true }
      }
    }
  }
})
