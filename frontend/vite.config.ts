import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  cacheDir: '.vite_cache',
  resolve: {
    alias: {
      'react-router-dom': path.resolve(__dirname, './src/demo/mocks/react-router-dom.tsx'),
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ScriptiaCardSystem',
      fileName: 'scriptia-card-system'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
