import React, { useState } from "react";

const faqs = [
    {
        question: "Can I enroll in multiple courses at once?",
        answer:
            "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
    },
    {
        question: "What kind of support can I expect from instructors?",
        answer:
            "You can expect timely responses, feedback on your assignments, and scheduled Q&A sessions with instructors."
    },
    {
        question: "Are the courses self-paced or do they have specific start and end dates?",
        answer:
            "Most courses are self-paced, allowing you to learn at your own speed. However, some have fixed schedules."
    },
    {
        question: "Are there any prerequisites for the courses?",
        answer:
            "Each course has different prerequisites. Please check the course description for specific requirements."
    },
    {
        question: "Can I download the course materials for offline access?",
        answer:
            "Yes, many courses offer downloadable resources such as PDFs, videos, and assignments."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="max-w-full mx-auto py-16 my-40 p-8 bg-white">
            <div className="flex flex-col lg:flex-row lg:items-start gap-12">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 mb-4">
                        Still have any questions? Contact our team via
                        <a href="mailto:support@skillbridge.com" className="text-blue-500 hover:underline"> support@skillbridge.com</a>
                    </p>
                    <button className="mt-2 px-5 py-2 text-sm  rounded bg-blue-50 transition">
                        See All FAQ's
                    </button>
                </div>

                <div className="lg:w-1/2 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-gray-50"
                            >
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-5 text-gray-600 text-sm">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
