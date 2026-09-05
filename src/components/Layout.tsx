import { Outlet } from "react-router-dom"
import { BlobBackground } from "./BlobBackground"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BlobBackground />
      <Header />
      <main className="flex-1 relative z-10 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
