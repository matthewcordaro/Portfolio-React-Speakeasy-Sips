import React from "react"
import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function HomeLayout() {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === "loading"
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? <div className='loading' /> : <Outlet />}
      </section>
      <Footer />
    </>
  )
}

export default HomeLayout
