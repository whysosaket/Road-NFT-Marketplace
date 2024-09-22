import { useEffect, useState } from "react"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Impact from "./components/Impact/Impact"
import Mission from "./components/Mission/Mission"
import Navbar from "./components/Navbar"
import Products from "./components/Products/Products"
import Services from "./components/Sevices/Services"
import Loading from "./components/Loading"
import { Decoy } from "./components/Decoy"


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
      window.scrollTo(0, 0)
    },500)
  }, [])
  return (
    loading?<>
    <Loading />
    <Decoy />
    </>:
    <div className="my-div px-4 md:px-10 py-6 font-nasa">
    <Navbar />
    <Hero />
    <Mission />
    <Products />
    <Services />
    <Impact />
    <Footer />
  </div>
  )
}

export default App
