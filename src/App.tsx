import Hero from "./components/Hero/Hero"
import Mission from "./components/Mission/Mission"
import Navbar from "./components/Navbar"
import Products from "./components/Products/Products"


function App() {

  return (
    <div className="px-10 py-6 font-nasa">
      <Navbar />
      <Hero />
      <Mission />
      <Products />
    </div>
  )
}

export default App
