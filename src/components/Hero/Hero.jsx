import "./Hero.css";

import {
    LuDownload,
    LuSend,
    LuFileText,
} from "react-icons/lu";

import {
    FaGithub,
    FaLinkedinIn,
    FaJava,
    FaReact,
} from "react-icons/fa";

import {
    SiGmail,
    SiSpring,
    SiMysql,
} from "react-icons/si";


function Hero() {

    return (

        <section className="hero" id="home">


            {/* LEFT SIDE */}

            <div className="hero-content">


                <p className="hero-intro">
                    Hi, I’m
                </p>


                <h1 className="hero-name">
                    Shaikh <span>Afridi</span> Ismail
                </h1>


                <h2 className="hero-role">
                    Full Stack
                    <span> Java Developer</span>
                </h2>


                {/* TAGS */}

                <div className="hero-tags">

                    <span>PG-DAC Student</span>

                    <span>Java Developer</span>

                    <span>Spring Boot Developer</span>

                    <span>React Developer</span>

                </div>


                {/* DESCRIPTION */}

                <p className="hero-description">
                    Building scalable, secure and high-performance web applications
                    using Java, Spring Boot, React, MySQL and modern technologies.
                </p>


                {/* BUTTONS */}

                <div className="hero-actions">


                    {/* DOWNLOAD RESUME */}

                    <a
                        href="/resume.pdf"
                        download
                        className="hero-btn resume-btn"
                    >
                        <LuDownload />

                        Download Resume
                    </a>


                    {/* CONTACT */}

                    <a
                        href="#contact"
                        className="hero-btn contact-btn"
                    >
                        <LuSend />

                        Contact Me
                    </a>


                </div>


                {/* SOCIAL ICONS */}

                <div className="hero-socials">


                    {/* GITHUB */}

                    <a
                        href="https://github.com/afridi1819"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>


                    {/* LINKEDIN */}

                    <a
                        href="https://www.linkedin.com/in/afridi-shaikh-137659261"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>


                    {/* GMAIL */}

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=shaikh19afridi@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Send Email"
                        title="Send Email"
                    >
                        <SiGmail />
                    </a>


                    {/* VIEW RESUME */}

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Resume"
                        title="View Resume"
                    >
                        <LuFileText />
                    </a>


                </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="hero-visual">


                {/* JAVA ICON */}

                <div className="tech-card java-card">
                    <FaJava />
                </div>


                {/* SPRING ICON */}

                <div className="tech-card spring-card">
                    <SiSpring />
                </div>


                {/* REACT ICON */}

                <div className="tech-card react-card">
                    <FaReact />
                </div>


                {/* MYSQL ICON */}

                <div className="tech-card mysql-card">
                    <SiMysql />
                </div>


                {/* PROFILE IMAGE */}

                <div className="profile-glow">

                    <div className="profile-ring">

                        <img
                            src="/profile.png"
                            alt="Afridi profile"
                            className="profile-image"
                        />

                    </div>

                </div>


            </div>


        </section>

    );

}


export default Hero;