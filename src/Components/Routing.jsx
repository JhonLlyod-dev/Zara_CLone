import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

export default function Routing() {
  return (
    <div className=" ">
      <Header/>
      <main className="min-h-screen">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}