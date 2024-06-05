import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/muslewski/",
  server: {
    host: "0.0.0.0", // Nasłuchuj na wszystkich interfejsach
    port: 3000, // Możesz ustawić dowolny port, np. 3000
  },
});
