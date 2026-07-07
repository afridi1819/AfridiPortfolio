import { useState } from "react"
import "./Contact.css"


function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })


    const handleChange = (event) => {

        const { name, value } = event.target

        setFormData((currentData) => ({
            ...currentData,
            [name]: value
        }))

    }


    const handleSubmit = (event) => {

        event.preventDefault()


        const subject =
            `Portfolio Contact from ${formData.name}`


        const body =
            `Name: ${formData.name}\n\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`


        const gmailUrl =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            `&to=${encodeURIComponent("shaikh19afridi@gmail.com")}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`


        window.open(
            gmailUrl,
            "_blank",
            "noopener,noreferrer"
        )

    }


    return (

        <section
            id="contact"
            className="contact-section"
        >

            <div className="contact-container">


                {/* HEADING */}

                <div className="contact-heading">

                    <span className="contact-heading-icon">
                        ✉
                    </span>

                    <h2>
                        Contact Me
                    </h2>

                </div>


                <div className="contact-content">


                    {/* CONTACT FORM */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            autoComplete="name"
                            required
                        />


                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            autoComplete="email"
                            required
                        />


                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Your Message"
                            required
                        />


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

                                <h4>
                                    Email
                                </h4>

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shaikh19afridi@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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

                                <h4>
                                    Phone
                                </h4>

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

                                <h4>
                                    Location
                                </h4>

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

                                <h4>
                                    LinkedIn
                                </h4>

                                <a
                                    href="https://www.linkedin.com/in/afridi-shaikh-137659261"
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