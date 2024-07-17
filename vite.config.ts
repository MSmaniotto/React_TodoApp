import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import { fileURLToPath } from 'url';

const projectRootDir = resolve(__dirname!);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      //[{find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))!}],
      '@': resolve(projectRootDir, "src"),//npm install @types/node --save-dev
      
      '@/context': resolve(projectRootDir, "src/context")
    },
  },
})
