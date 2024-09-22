import Hero from "./components/Hero/Hero"
import Impact from "./components/Impact/Impact"
import Mission from "./components/Mission/Mission"
import Navbar from "./components/Navbar"
import Products from "./components/Products/Products"
import Services from "./components/Sevices/Services"


function App() {

  return (
    <div className="px-10 py-6 font-nasa">
      <Navbar />
      <Hero />
      <Mission />
      <Products />
      <Services />
      <Impact />
    </div>
  )
}

export default App
