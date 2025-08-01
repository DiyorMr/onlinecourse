import Benefits from '../components/Benefits'
import Partners from '../components/Partners'

const Hero = () => {
  return (
    <div>
      <section className="text-center py-20 px-4">
        <div className="inline-block bg-white px-6 py-3 rounded-full text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
          <span className="text-orange-500 font-semibold">⚡ Unlock</span> Your Creative Potential
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          with Online Design and Development Courses.
        </h1>

        <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Learn from Industry Experts and Enhance Your Skills.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/courses"
            className="bg-orange-500 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-orange-600 transition duration-300"
          >
            Explore Courses
          </a>

          <a
            href="/pricing"
            className="bg-white border border-gray-300 px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            View Pricing
          </a>
        </div>
      </section>
      <Partners />
      <div className="w-full max-w-[1300px] my-20 aspect-video mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/2ePf9rue1Ao"
          title="Online Course Introduction"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Benefits />
    </div>
  )
}

export default Hero