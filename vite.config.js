import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/coding-Marathon-team4/",
  plugins: [react()],
});
