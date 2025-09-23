import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // keeps service worker fresh
      includeAssets: ["favicon.ico", "icon.png"], // include your icon
      manifest: {
        id: "/",
        name: "Eventify",
        short_name: "Eventify",
        description:
          "Manage events with Eventify. Create, manage, and discover events with powerful analytics and seamless registration.",
        theme_color: "#6d28d9", // purple brand color
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
})
