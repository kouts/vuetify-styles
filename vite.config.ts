import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
// https://vitejs.dev/config/#conditional-config
export default defineConfig(({ command, mode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isDev = command === 'serve' && mode === 'development'

  return {
    plugins: [
      vue(),

      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        styles: 'expose',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    // https://vitejs.dev/guide/dep-pre-bundling.html#customizing-the-behavior
    // https://vitejs.dev/config/#dep-optimization-options
    optimizeDeps: {
      include: ['vue', 'vue-router', 'vuetify'],
    },
  }
})
