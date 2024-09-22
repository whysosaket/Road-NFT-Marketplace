import Hero from "./components/Hero/Hero"
import Mission from "./components/Mission/Mission"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="px-10 py-6 font-nasa">
      <Navbar />
      <Hero />
      <Mission />
    </div>
  )
}

export default App
