import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// in plugins add react() and tailwindcss() also import react from vitejs pluglin react and tailwind from tailwindcss vite
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
