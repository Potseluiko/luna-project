import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import store from "./store"
import "./styles/index.scss"
import App from "./components/App/App.jsx"

const queryClient = new QueryClient()

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //     return
  // }

  const { worker } = await import("./mocks/browser")

  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  )
})
