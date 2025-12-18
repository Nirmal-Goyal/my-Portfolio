import Hero from "./sections/Hero"
import Navbar from "./layout/Navbar"
import About from "./sections/About"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
