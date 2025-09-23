import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

// 👉 Import PWA service worker register helper
import { registerSW } from "virtual:pwa-register"

// 👉 Register the service worker (auto-update)
registerSW({
  onNeedRefresh() {
    console.log("New content is available, please refresh.")
  },
  onOfflineReady() {
    console.log("App is ready to work offline.")
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
