import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '/src')}/` // import HelloWorld from '@/components/HelloWorld.vue'
    }
  },
  plugins: [vue()]
});
