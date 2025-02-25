import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "$lib/colors.scss";`
      }
    }
  }
});