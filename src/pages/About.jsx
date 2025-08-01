import React from 'react'
import TestimonialsGrid from '../components/TestimonialCard'

const About = () => {
  return (
    <div id='about'>
      <div className="flex flex-col mt-12 md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Testimonials</h2>
          <p className="text-gray-600 max-w-xl text-sm">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <a
          href="#"
          className="bg-white text-sm  rounded-md px-4 py-2 hover:bg-gray-100 transition"
        >
          View All
        </a>
      </div>
      <TestimonialsGrid />
    </div>
  )
}

export default About