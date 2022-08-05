import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import presetUno from "@unocss/preset-uno";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno()],
    }),
  ],
});
