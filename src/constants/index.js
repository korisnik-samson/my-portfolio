import { mobile, backend, creator, web, javascript, typescript,
    html, css, reactjs, redux, tailwind, nodejs,
    mongodb, git, figma, docker, meta, starbucks,
    tesla, shopify, carrent, jobit, tripguide, threejs, traveladvisor, denver
} from "../assets";

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
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
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
        source_code_link: "https://github.com/korisnik-samson/travel-static",
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
        weblink: "https://teoplay.netlify.app/"
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
];

export { services, technologies, experiences, testimonials, projects };