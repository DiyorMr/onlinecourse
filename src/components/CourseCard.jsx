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
        description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        image: webDesign,
    },
    {
        title: "UI/UX Design",
        duration: "6 Weeks",
        level: "Intermediate",
        author: "Emily Johnson",
        description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        image: uiuxDesign,
    },
    {
        title: "Mobile App Development",
        duration: "8 Weeks",
        level: "Intermediate",
        author: "David Brown",
        description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        image: mobileApp,
    },
    {
        title: "Graphic Design for Beginners",
        duration: "10 Weeks",
        level: "Beginner",
        author: "Sarah Thompson",
        description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        image: graphicDesign,
    },
    {
        title: "Front-End Web Development",
        duration: "10 Weeks",
        level: "Intermediate",
        author: "Michael Adams",
        description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        image: frontendDev,
    },
    {
        title: "Advanced JavaScript",
        duration: "8 Weeks",
        level: "Advanced",
        author: "Jennifer Wilson",
        description: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
        image: advancedJs,
    },
];

const CourseCard = ({ course }) => (
    <div className="bg-white w-full shadow p-3 flex flex-col gap-2">
        <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover rounded-lg mb-4"
        />
        <div className="text-sm text-gray-500 mb-1">
            {course.duration} • {course.level}
        </div>
        <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
        <p className="text-sm text-gray-700 flex-grow">{course.description}</p>
        <div className="mt-4 text-sm text-gray-600 font-medium">By {course.author}</div>
        <a href="#" className="mx-auto flex items-center justify-center mt-4 px-4 py-2 mb-2 w-full bg-gray-200 rounded cursor-pointer font-semibold">
            Get it Now
        </a>
    </div>
);

const CourseGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
        ))}
    </div>
);

export default CourseGrid;