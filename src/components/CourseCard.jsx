import webDesign from "../../public/img/coursecard/card1.svg";
import uiuxDesign from "../../public/img/coursecard/card2.svg";
import mobileApp from "../../public/img/coursecard/card3.svg";
import graphicDesign from "../../public/img/coursecard/card4.svg";
import frontendDev from "../../public/img/coursecard/card5.svg";
import advancedJs from "../../public/img/coursecard/card6.svg";

const courses = [
    {
        title: "Web Design Fundamentals",
        duration: "4 Weeks",
        level: "Beginner",
        author: "John Smith",
        description:
            "Learn the basics of web design: HTML, CSS, and responsive layouts. Great for beginners.",
        image: webDesign,
    },
    {
        title: "UI/UX Design",
        duration: "6 Weeks",
        level: "Intermediate",
        author: "Emily Johnson",
        description:
            "Learn how to create user-friendly interfaces with UI/UX design principles like wireframing and testing.",
        image: uiuxDesign,
    },
    {
        title: "Mobile App Development",
        duration: "8 Weeks",
        level: "Intermediate",
        author: "David Brown",
        description:
            "Learn how to build Android & iOS apps using real projects and modern tools.",
        image: mobileApp,
    },
    {
        title: "Graphic Design for Beginners",
        duration: "10 Weeks",
        level: "Beginner",
        author: "Sarah Thompson",
        description:
            "Understand the basics of graphic design: typography, color theory, branding, and more.",
        image: graphicDesign,
    },
    {
        title: "Front-End Web Development",
        duration: "10 Weeks",
        level: "Intermediate",
        author: "Michael Adams",
        description:
            "Build websites using HTML, CSS, JavaScript, and front-end frameworks.",
        image: frontendDev,
    },
    {
        title: "Advanced JavaScript",
        duration: "8 Weeks",
        level: "Advanced",
        author: "Jennifer Wilson",
        description:
            "Take your JavaScript skills further with ES6+, async/await, closures, and more.",
        image: advancedJs,
    },
];

// Bitta kurs kartasi
const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
        <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="text-sm text-gray-500 mb-1">
            {course.duration} • {course.level}
        </div>
        <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
        <p className="text-sm text-gray-700 flex-grow">{course.description}</p>
        <div className="mt-4 text-sm text-gray-600 font-medium">By {course.author}</div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-fit self-start">
            Get it Now
        </button>
    </div>
);

// Kurslar grid holatda chiqariladi
const CourseGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
        ))}
    </div>
);

export default CourseGrid;