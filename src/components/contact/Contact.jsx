import { useState } from "react"
import "./Contact.css"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL


function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })


    const [status, setStatus] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [errors, setErrors] = useState({})


    const handleChange = (event) => {

        const { name, value } = event.target

        setFormData((currentData) => ({
            ...currentData,
            [name]: value
        }))


        // Remove the error for this field
        // when the user starts typing again

        setErrors((currentErrors) => ({
            ...currentErrors,
            [name]: ""
        }))

    }


    const handleSubmit = async (event) => {

        event.preventDefault()

        setIsSubmitting(true)

        setStatus("")

        setErrors({})


        const contactData = {

            name: formData.name,

            email: formData.email,

            subject: `Portfolio Contact from ${formData.name}`,

            message: formData.message

        }


        try {

            const response = await fetch(
                `${API_BASE_URL}/api/contacts`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(contactData)
                }
            )


            // Backend validation error

            if (response.status === 400) {

                const validationErrors =
                    await response.json()

                setErrors(validationErrors)

                return
            }


            // Other server errors

            if (!response.ok) {

                throw new Error(
                    "Failed to send message"
                )

            }


            setStatus(
                "Message sent successfully!"
            )


            setFormData({
                name: "",
                email: "",
                message: ""
            })


        } catch (error) {

            console.error(error)

            setStatus(
                "Unable to send message. Please try again."
            )


        } finally {

            setIsSubmitting(false)

        }

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


                        {/* NAME */}

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            autoComplete="name"
                            required
                        />


                        {
                            errors.name && (

                                <p className="contact-error">
                                    {errors.name}
                                </p>

                            )
                        }


                        {/* EMAIL */}

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            autoComplete="email"
                            required
                        />


                        {
                            errors.email && (

                                <p className="contact-error">
                                    {errors.email}
                                </p>

                            )
                        }


                        {/* MESSAGE */}

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Your Message"
                            required
                        />


                        {
                            errors.message && (

                                <p className="contact-error">
                                    {errors.message}
                                </p>

                            )
                        }


                        {/* SUBMIT BUTTON */}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                        >

                            {
                                isSubmitting
                                    ? "Sending..."
                                    : "Send Message"
                            }

                        </button>


                        {/* SUCCESS / SERVER ERROR MESSAGE */}

                        {
                            status && (

                                <p className="contact-status">
                                    {status}
                                </p>

                            )
                        }


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