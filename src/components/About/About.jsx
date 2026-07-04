import './About.css';
import SectionTitle from "../SectionTitle/SectionTitle"
import { p } from 'framer-motion/client';
function About() {
    const details = [
        {
            label: "Education",
            value: "Civil Engineering"
        },
        {
            label: "Current Focus",
            value: "Full Stack Development"
        },
        {
            label: "Location",
            value: "Maharashtra, India"
        }
    ]
    return (
        <section id="about" className='about'>
            <SectionTitle title="About Me" />

            <div className='about-content'>
                <div className='about-text'>
                    <p>
                        I am a Full Stack Developer with a background in Civil Engineering.
                        I enjoy building practical web applications and learning modern
                        technologies.
                    </p>
                    <p>
                        My current focus is on building full-stack applications using
                        Java, Spring Boot, React, and databases.
                    </p>
                </div>
                <div className='about-details'>
                    {details.map((detail) => (
                        <p key={detail.label}><strong>{detail.label}:{detail.value}</strong></p>
                    ))}
                </div>
            </div>

        </section>
    )
}
export default About