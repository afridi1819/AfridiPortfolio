import './About.css';
import SectionTitle from "../SectionTitle/SectionTitle"
import { p } from 'framer-motion/client';
import { HiSparkles } from "react-icons/hi2"
import {
    FaUser,
    FaGraduationCap,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
    FaLinkedin
} from "react-icons/fa"
function About() {
    const details = [
        {
            label: "Name",
            value: "Shaikh Afridi Ismail",
            icon: FaUser
        },
        {
            label: "Course",
            value: "PG-DAC",
            icon: FaGraduationCap
        },
        {
            label: "Email",
            value: "shaikh19afridi@gmail.com",
            icon: FaEnvelope,
            link: "mailto:shaikh19afridi@gmail.com"
        },
        {
            label: "Location",
            value: "Kaij, Beed, Maharashtra",
            icon: FaMapMarkerAlt
        },
        {
            label: "Phone",
            value: "7083027874",
            icon: FaPhone,
            link: "tel:+917083027874"
        },
        {
            label: "LinkedIn",
            value: "Afridi Shaikh",
            icon: FaLinkedin,
            link: "YOUR_LINKEDIN_PROFILE_URL"
        }
    ]
    return (
        <section id="about" className="about">
            <div className="about-container">

                <div className="about-intro">
                    <div className="about-label">
                        <span className="about-label-icon">
                            <HiSparkles />
                        </span>

                        <span>GET TO KNOW ME</span>
                    </div>

                    <h2>About Me</h2>

                    <p>
                        I am a passionate Full Stack Java Developer currently pursuing
                        PG-DAC at CDAC. I enjoy building enterprise-grade web applications
                        using Java, Spring Boot, React, Hibernate, REST APIs and MySQL.
                    </p>

                    <p>
                        I love solving real-world problems and continuously learning
                        new technologies.
                    </p>
                </div>

                <div className="about-details">
                    {details.map((detail) => {
                        const Icon = detail.icon

                        return (
                            <div className="about-detail-item" key={detail.label}>
                                <div className="detail-icon">
                                    <Icon />
                                </div>

                                <div className="detail-content">
                                    <span className="detail-label">
                                        {detail.label}
                                    </span>

                                    {detail.link ? (
                                        <a
                                            href={detail.link}
                                            className="detail-value detail-link"
                                            target={detail.label === "LinkedIn" ? "_blank" : undefined}
                                            rel={detail.label === "LinkedIn" ? "noreferrer" : undefined}
                                        >
                                            {detail.value}
                                        </a>
                                    ) : (
                                        <span className="detail-value">
                                            {detail.value}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
export default About