const testimonials = [
    {
        name: "Sarah L",
        image: "../../public/img/about/sara.svg",
        story:
            "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    },
    {
        name: "Jason M",
        image: "../../public/img/about/jason.svg",
        story:
            "The UI/UX design course exceeded my expectations. The instructor’s expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    },
    {
        name: "Emily R",
        image: "../../public/img/about/emily.svg",
        story:
            "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I’m now building my own app. Great course!",
    },
    {
        name: "Michael K",
        image: "../../public/img/about/micheal.svg",
        story:
            "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor’s guidance and feedback improved my design abilities significantly. I’m grateful for this course!",
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
        <p className="text-gray-700 text-sm mb-6">{testimonial.story}</p>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium text-gray-800 text-sm">
                    {testimonial.name}
                </span>
            </div>
            <button className="text-sm px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                Read Full Story
            </button>
        </div>
    </div>
);

const TestimonialsGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
        ))}
    </div>
);

export default TestimonialsGrid;
