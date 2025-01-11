import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/react_practise/simple-todo-list/', // Set the base path for GitHub Pages
  plugins: [react()],
});
