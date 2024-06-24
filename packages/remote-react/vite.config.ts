import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import federation from '@originjs/vite-plugin-federation'
import externalGlobals from "rollup-plugin-external-globals"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions:{
      external:['react','react-dom'],
      plugins: [
        externalGlobals({
          react: 'React',
          'react-dom': 'ReactDOM'
        })
      ]
    }
  },
  plugins: [
    react(),
    reactRefresh(),
    federation({
      name: 'remoteReactComponents',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.tsx',
      },
      shared:['react','react-dom',"antd"]
    })
  ],
})
