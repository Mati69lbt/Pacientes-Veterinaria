import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Pacientes-Veterinaria/", // Nombre de tu repositorio
  plugins: [react()],
});
