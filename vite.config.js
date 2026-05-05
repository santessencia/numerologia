import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        captacao: 'captacao.html',
        resultado: 'resultado.html',
      },
    },
  },
});
