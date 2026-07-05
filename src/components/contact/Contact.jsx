import "./Contact.css"

function Contact() {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <section id="contact" className="contact-section">

            <div className="contact-container">

                {/* HEADING */}

                <div className="contact-heading">

                    <span className="contact-heading-icon">
                        ✉
                    </span>

                    <h2>Contact Me</h2>

                </div>


                <div className="contact-content">


                    {/* CONTACT FORM */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            required
                        ></textarea>

                        <button type="submit">
                            Send Message
                        </button>

                    </form>


                    {/* CONTACT INFORMATION */}

                    <div className="contact-info">


                        {/* EMAIL */}

                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                ✉
                            </div>

                            <div className="contact-info-text">

                                <h4>Email</h4>

                                <a href="mailto:shaikh19afridi@gmail.com">
                                    shaikh19afridi@gmail.com
                                </a>

                            </div>

                        </div>


                        {/* PHONE */}

                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                ☎
                            </div>

                            <div className="contact-info-text">

                                <h4>Phone</h4>

                                <a href="tel:+917083027874">
                                    +91 70830 27874
                                </a>

                            </div>

                        </div>


                        {/* LOCATION */}

                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                📍
                            </div>

                            <div className="contact-info-text">

                                <h4>Location</h4>

                                <p>
                                    Kaij, Beed, Maharashtra, India
                                </p>

                            </div>

                        </div>


                        {/* LINKEDIN */}

                        <div className="contact-info-item">

                            <div className="contact-info-icon linkedin-icon">
                                in
                            </div>

                            <div className="contact-info-text">

                                <h4>LinkedIn</h4>

                                <a
                                    href="https://www.linkedin.com/in/afridi-shaikh-a6b7a21b4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Afridi Shaikh
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact