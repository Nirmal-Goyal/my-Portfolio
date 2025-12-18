import Hero from "./sections/Hero"
import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Projects from "./sections/Projects"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
