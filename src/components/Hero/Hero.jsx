import "./Hero.css"
function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-intro">  Hello, I'm</p>


                <h1 className="hero-name">   Afridi Shaikh     </h1>

                <h2 className="hero-rounded-end-pill">Full Stack Developer</h2>

                <p className="hero-description">
                    I build responsive and user-friendly web applications
                    using modern technologies.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="public\resume.pdf" download className="btn btn-secondary">Download Resume</a>
                </div>
                <div className="hero-socials">
                    <a
                        href="https://github.com/afridi1819"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="#YOUR_LINKEDIN_PROFILE_URL"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="hero-image">
                <img src="public\profile.png" alt="My_Profile" />
            </div>
        </section>

    )
}
export default Hero