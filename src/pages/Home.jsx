import React from 'react'

const Home = () => {
  return (
    <div>
      <section className="text-center py-20 px-4">
        <div className="inline-block bg-white px-4 py-2 rounded-full text-5xl mb-4">
          <span className="text-orange-500 font-semibold">⚡ Unlock</span> Your Creative Potential
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          with Online Design and Development Courses.
        </h1>
        <p className="text-gray-500 mb-6">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/courses"
            className="bg-orange-500 text-white px-6 py-2 rounded-xl text-lg cursor-pointer hover:bg-orange-600 transition"
          >
            Explore Courses
          </a>

          <a
            href="/pricing"
            className="bg-white  px-6 py-2 rounded-xl text-lg cursor-pointer hover:bg-gray-100 transition ml-4"
          >
            View Pricing
          </a>

        </div>
      </section>
    </div>
  )
}

export default Home