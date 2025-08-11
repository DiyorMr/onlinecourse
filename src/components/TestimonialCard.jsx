const testimonials = [
    {
        name: "Sarah L",
        image: "/img/about/sara.svg",
        story:
            "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    },
    {
        name: "Jason M",
        image: "/img/about/jason.svg",
        story:
            "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    },
    {
        name: "Emily R",
        image: "/img/about/emily.svg",
        story:
            "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I’m now building my own app. Great course!",
    },
    {
        name: "Michael K",
        image: "/img/about/micheal.svg",
        story:
            "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor’s guidance and feedback improved my design abilities significantly. I’m grateful for this course!",
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 h-full">
        <p className="text-gray-600 text-base leading-relaxed mb-6">
            {testimonial.story}
        </p>
        <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <span className="font-medium text-gray-800 text-sm">
                    {testimonial.name}
                </span>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700 transition">
                Read More
            </button>
        </div>
    </div>
);

const TestimonialsGrid = () => {
    return (
        <section className="w-full py-12  bg-gray-50">
            <div className="max-w-full mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
                    What Our Students Say
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsGrid;
