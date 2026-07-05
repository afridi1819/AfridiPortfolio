import "./Education.css"

function Education() {

    const educationData = [
        {
            year: "2025 - Present",
            degree: "PG-DAC (Aug25 Batch)",
            institute: "C-DAC ACTS, Pune"
        },
        {
            year: "2023",
            degree: "Bachelor of Engineering (Civil)",
            institute: "MBES College of Engineering, Ambajogai",
            university: "Dr. Babasaheb Ambedkar Technological University, Lonere"
        },
        {
            year: "2019",
            degree: "Higher Secondary (Science)",
            institute: "Shri Tripura Jr. Science College, Latur",
            university: "Maharashtra State Board"
        },
        {
            year: "2017",
            degree: "Secondary School (SSC)",
            institute: "Swami Vivekanand Vidyamandir, Kaij",
            university: "Maharashtra State Board"
        }
    ]

    return (
        <section id="education" className="education-section">

            <div className="education-container">

                <div className="education-heading">
                    <span className="education-icon">🎓</span>
                    <h2>Education</h2>
                </div>

                <div className="education-timeline">

                    {educationData.map((education, index) => (

                        <div className="education-item" key={index}>

                            <div className="timeline-marker">
                                <span className="timeline-dot"></span>
                            </div>

                            <div className="education-year">
                                {education.year}
                            </div>

                            <div className="education-details">

                                <h3>{education.degree}</h3>

                                <p>{education.institute}</p>

                                {education.university && (
                                    <p>{education.university}</p>
                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Education