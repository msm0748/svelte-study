import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import styleX from 'vite-plugin-stylex';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), styleX()],
});
