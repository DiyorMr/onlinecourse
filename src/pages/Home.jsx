import About from "./About"
import Courses from "./Courses"
import Hero from "./Hero"
import Pricing from "./Pricing"

const Home = () => {
  return (
    <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Courses />
      <About />
      <Pricing />
    </div>
  )
}

export default Home