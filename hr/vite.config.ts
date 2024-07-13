import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // Adicione aqui o plugin @babel/plugin-proposal-decorators
          [
            '@babel/plugin-proposal-decorators',
            {
              version: '2023-05'
            }
          ]
        ]
      }
    })
  ]

})

