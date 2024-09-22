import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="px-10 py-6 font-nasa">
      <Navbar />
      <Hero />
      {/* <h1 className="text-5xl font-nasa">Hello World</h1> */}
    </div>
  )
}

export default App
