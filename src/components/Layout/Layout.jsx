import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import GetInTouch from '../GetInTouch/GetInTouch'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>

      <Header />
      <Hero />
      <Outlet /> {/* This is where each page’s unique content appears */}
      <GetInTouch />
      <Footer />
    </>
  )
}
