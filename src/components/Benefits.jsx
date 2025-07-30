import { ArrowUpRight } from "lucide-react";

const benefits = [
    {
        id: "01",
        title: "Flexible Learning Schedule",
        description:
            "Fit your coursework around your existing commitments and obligations.",
    },
    {
        id: "02",
        title: "Expert Instruction",
        description:
            "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
        id: "03",
        title: "Diverse Course Offerings",
        description:
            "Explore a wide range of design and development courses covering various topics.",
    },
    {
        id: "04",
        title: "Updated Curriculum",
        description:
            "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
        id: "05",
        title: "Practical Projects and Assignments",
        description:
            "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
        id: "06",
        title: "Interactive Learning Environment",
        description:
            "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
];

export default function Benefits() {
    return (
        <section className="bg-gray-50 px-6 py-12 md:px-12 lg:px-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Benefits</h2>
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

            {/* Cards Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition relative"
                    >
                        <div className="text-4xl font-bold text-gray-800 absolute top-5 right-5">
                            {item.id}
                        </div>

                        <h3 className="text-base font-semibold text-gray-900 mt-12">
                            {item.title}
                        </h3>

                        <p className="text-sm text-gray-600 mb-16">{item.description}</p>

                        <a
                            href="#"
                            className="absolute bottom-5 right-5 text-orange-500 size-9 text-lg flex items-center justify-center hover:bg-gray-100 rounded-lg transition"
                        >
                            <ArrowUpRight className="size-8" />
                        </a>
                    </div>
                ))}
            </div>

        </section>
    );
}
