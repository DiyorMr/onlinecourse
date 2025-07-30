import Courses from "./Courses"
import Hero from "./Hero"

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Courses />
    </div>
  )
}

export default Home