import "./Projects.css";

import {
    LuExternalLink,
    LuGithub,
    LuArrowRight,
    LuSparkles,
} from "react-icons/lu";

import {
    SiSpringboot,
    SiReact,
    SiMysql,
    SiMongodb,
    SiBootstrap,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";


const projectsData = [
    {
        id: 1,

        title: "Golden Agro ERP",

        description:
            "A full-stack ERP management system designed for a beverage manufacturing company to manage inventory, production, sales, employees and financial operations.",

        technologies: [
            "Java",
            "Spring Boot",
            "React",
            "MySQL",
        ],

        github: "https://github.com/afridi1819",

        demo: "#",

        featured: true,
    },

    {
        id: 2,

        title: "Industrial Machine Marketplace",

        description:
            "A specialized marketplace platform for buying and selling used industrial machinery with product listings, search, categories and seller communication features.",

        technologies: [
            "React",
            "Spring Boot",
            "MySQL",
            "Bootstrap",
        ],

        github: "https://github.com/afridi1819",

        demo: "#",

        featured: true,
    },

    {
        id: 3,

        title: "Library Management System",

        description:
            "A web-based application for managing books, members and library operations with database integration and complete CRUD functionality.",

        technologies: [
            "Java",
            "Hibernate",
            "JSP",
            "MySQL",
        ],

        github: "https://github.com/afridi1819",

        demo: "#",

        featured: false,
    },
];


const techIcons = {
    Java: FaJava,
    "Spring Boot": SiSpringboot,
    React: SiReact,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    Bootstrap: SiBootstrap,
};


function Projects() {

    return (
        <section
            className="projects-section"
            id="projects"
        >

            {/* SECTION HEADING */}

            <div className="projects-heading">

                <p className="projects-subtitle">
                    What I Have Built
                </p>

                <h2>
                    My Projects
                    <LuSparkles />
                </h2>

                <p className="projects-heading-description">
                    Here are some projects that demonstrate my experience
                    in full-stack development and problem solving.
                </p>

            </div>


            {/* PROJECT GRID */}

            <div className="projects-grid">

                {projectsData.map((project) => (

                    <article
                        className="project-card"
                        key={project.id}
                    >

                        {/* CARD TOP */}

                        <div className="project-card-top">

                            <div className="project-number">
                                0{project.id}
                            </div>

                            {project.featured && (
                                <span className="featured-badge">
                                    Featured
                                </span>
                            )}

                        </div>


                        {/* PROJECT CONTENT */}

                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <p>
                                {project.description}
                            </p>

                        </div>


                        {/* TECHNOLOGIES */}

                        <div className="project-technologies">

                            {project.technologies.map((technology) => {

                                const TechIcon =
                                    techIcons[technology];

                                return (

                                    <span
                                        className="technology-tag"
                                        key={technology}
                                    >

                                        {TechIcon && (
                                            <TechIcon />
                                        )}

                                        {technology}

                                    </span>

                                );
                            })}

                        </div>


                        {/* PROJECT LINKS */}

                        <div className="project-links">

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link github-link"
                            >

                                <LuGithub />

                                Code

                            </a>


                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link demo-link"
                            >

                                Live Demo

                                <LuExternalLink />

                            </a>

                        </div>

                    </article>

                ))}

            </div>


            {/* VIEW MORE */}

            <div className="projects-more">

                <a
                    href="https://github.com/afridi1819"
                    target="_blank"
                    rel="noreferrer"
                >

                    View More Projects

                    <LuArrowRight />

                </a>

            </div>

        </section>
    );
}


export default Projects;