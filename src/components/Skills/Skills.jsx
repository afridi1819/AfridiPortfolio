import "./Skills.css";

import {
    LuCodeXml,
    LuMonitor,
    LuServer,
    LuDatabase,
    LuWrench,
    LuBrainCircuit,
} from "react-icons/lu";


const skillsData = [
    {
        title: "Languages",
        icon: LuCodeXml,
        skills: [
            { name: "Java", Level: 70 },
            { name: "C++", Level: 65 },
            { name: "JavaScript", Level: 80 },
            { name: "SQL", Level: 80 },
        ],
    },
    {
        title: "FrontEnd",
        icon: LuMonitor,
        skills: [
            { name: "HTML5", Level: 90 },
            { name: "CSS", Level: 65 },
            { name: "Bootstrap", Level: 80 },
            { name: "React", Level: 80 },
        ],
    },
    {
        title: "Backend",
        icon: LuServer,
        skills: [
            { name: "Spring Boot", Level: 80 },
            { name: "Spring MVC", Level: 85 },
            { name: "Hibernate", Level: 70 },
            { name: "REST API", Level: 70 },
            { name: "Servlets", Level: 80 },
            { name: "JSP", Level: 75 },
            { name: "JDBC", Level: 75 },
        ],
    },
    {
        title: "Database",
        icon: LuDatabase,
        skills: [
            { name: "MySQL", Level: 85 },
            { name: "MongoDB", Level: 65 },
        ],
    },
    {
        title: "Tools",
        icon: LuWrench,
        skills: [
            { name: "VS Code", Level: 95 },
            { name: "Eclipse", Level: 90 },
            { name: "Postman", Level: 70 },
            { name: "Maven", Level: 75 },
            { name: "Git", Level: 70 },
            { name: "GitHub", Level: 70 },
        ],
    },
    {
        title: "Core Concepts",
        icon: LuBrainCircuit,
        skills: [
            { name: "Data Structures", Level: 60 },
            { name: "OOP", Level: 80 },
            { name: "DBMS", Level: 70 },
            { name: "Operating System", Level: 90 },
            { name: "SDLC", Level: 65 },
        ],
    },
];
function Skills() {
    return (
        <section className="skills-section" id="skills">

            <h2 className="skills-heading">
                My Skills <span>✦</span>
            </h2>

            <div className="skills-grid">

                {skillsData.map((category) => {

                    const Icon = category.icon;

                    return (
                        <div
                            className="skill-card"
                            key={category.title}
                        >

                            <div className="skill-card-title">
                                <Icon className="skill-icon" />
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skill-list">

                                {category.skills.map((skill) => (

                                    <div
                                        className="skill-item"
                                        key={skill.name}
                                    >

                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span>{skill.Level}%</span>
                                        </div>

                                        <div className="progress-track">
                                            <div
                                                className="progress-fill"
                                                style={{
                                                    width: `${skill.Level}%`
                                                }}
                                            ></div>
                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default Skills;
