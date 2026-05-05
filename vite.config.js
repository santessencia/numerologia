import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:             'index.html',
        captacao:         'captacao.html',
        obrigado:         'obrigado.html',
        aguarde:          'aguarde.html',
        pagamentoSucesso: 'pagamento-sucesso.html',
        resultado:        'resultado.html',
      },
    },
  },
});
