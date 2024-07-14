import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist', // Diretório de saída para os arquivos construídos
    emptyOutDir: true, // Limpa o diretório de saída antes de construir
  },
  server: {
    open: true,
  },
});
