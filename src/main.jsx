import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import store from "./store"
import "./styles/index.scss"
// import App from "./components/App/App"

import { AdminLayout } from "./controllers/AdminLayout/AdminLayout"
import { AppLayout } from "./controllers/AppLayout/AppLayout"
import { AuthLayout } from "./controllers/AuthLayout/AuthLayout"
import { Home } from "./controllers/Home/Home"
import { About } from "./controllers/About/About"
import { LoginController } from "./controllers/LoginController/LoginController"
import { RegisterController } from "./controllers/RegisterController/RegisterController"
import { Articles } from "./controllers/Articles/Articles"
import { Article } from "./controllers/Article/Article"

// const queryClient = new QueryClient()

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
        {/*<QueryClientProvider client={queryClient}>*/}
        {/*</QueryClientProvider>*/}
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="login" element={<LoginController />} />
              <Route path="register" element={<RegisterController />} />
            </Route>

            <Route path="articles" element={<AdminLayout />}>
              <Route index element={<Articles />} />
              <Route path=":id" element={<Article />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  )
})
