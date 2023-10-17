import {
    mobile, backend, creator, web, javascript, typescript,
    html, css, reactjs, redux, tailwind, nodejs,
    mongodb, git, figma, docker, meta, starbucks,
    tesla, carrent, threejs, traveladvisor, denver, singi, threads, chess, binary_tree
} from '../assets';

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Voluntary React.JS Developer",
        company_name: "St. Matthew's Church",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Dec 2019 - Sept 2021",
        points: [
            "Developing and maintaining web applications for the church media using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, and other developers, making church media online and available",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "FiveCore",
        icon: starbucks,
        iconBg: "#383E56",
        date: "June 2023 - Present",
        points: [
            "Developing and maintaining web applications using popular frontend development technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "Samson was my student, one of the best, the most serious, and at the same time the most creative.\n" +
            "Exceptional. Also, by far the youngest in the generation, which shows enough of his progress!\n" +
            "Follow his step of development!",
        name: "Petar Biševac",
        designation: "Assistant Professor",
        company: "Singidunum University",
        image: singi,
    },
    {
        testimonial:
            "I met Samson in the course “Software Specification and Modeling”, which I teach in the second year at\n" +
            "the Faculty of Technical Sciences, study program Software, and Data Engineering.\n" +
            "Samson is a hardworking student, very focused, creative, and eager to learn new technologies.",
        name: "Angelina Njeguš",
        designation: "Professor",
        company: "Singidunum University",
        image: singi,
    },
    {
        testimonial:
            "From our first encounter, Samson has consistently exhibited exceptional progress and expertise in his domain.\n" +
            "Transitioning from a novice seeking direction to a seasoned professional, his notable achievements bear witness to his capabilities.\n" +
            "I strongly recommend him for forthcoming opportunities, confident that he will prove indispensable wherever he applies his talents.\n",
        name: "David Praise",
        designation: "Project Manager",
        company: "Paymentology",
        image: singi,
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/korisnik-samson/car-octo-system",
        weblink: "https://car-octo-system.vercel.app/"
    },
    {
        name: "Denver",
        description:
            "Web application that enables users to live stream songs and music albums, view artist information, and listen to available content based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "blue-text-gradient",
            },
            {
                name: "rapidapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: denver,
        source_code_link: "https://github.com/korisnik-samson/denver",
        weblink: "https://denver-sand.vercel.app"
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to explore restaurants, hotels, monuments and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "MaterialUI",
                color: "green-text-gradient",
            },
            {
                name: "rapidapi",
                color: "pink-text-gradient",
            },
        ],
        image: traveladvisor,
        source_code_link: "https://github.com/korisnik-samson/travel-booking",
        weblink: "https://traveladviserr.netlify.app/"
    },
    {
        name: "Modern Threads",
        description:
            "A well tailored Full stack social media application, that makes connection and chatting seamlessly easy with user personalisations and many more",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "NextJS",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "pink-text-gradient",
            },
        ],
        image: threads,
        source_code_link: "https://github.com/korisnik-samson/urban-threads-sans",
        weblink: "https://urban-threads-sans.vercel.app/"
    },
    {
        name: "Console Chess",
        description:
            "A well tailored Console chess project, using all various C++ libraries to make a miniature chess engine, making it possible to play chess on the console window",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient",
            },
            {
                name: "Windows Lib",
                color: "blue-text-gradient",
            },
        ],
        image: chess,
        source_code_link: "https://github.com/korisnik-samson/console-chess-sans",
        weblink: "https://github.com/korisnik-samson/console-chess-sans"
    },
    {
        name: "Generic Binary Tree",
        description:
            "A modified yet well structured algorithm, based off of the original data structures, this utilizes all algorithms possible for every datatype",
        tags: [
            {
                name: "Java",
                color: "pink-text-gradient",
            },
        ],
        image: binary_tree,
        source_code_link: "https://github.com/samson-offorjindu/Generic-Binary-Tree",
        weblink: "https://github.com/samson-offorjindu/Generic-Binary-Tree"
    }
];

export { services, technologies, experiences, testimonials, projects };