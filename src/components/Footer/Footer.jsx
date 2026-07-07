import { FiArrowUp, FiHeart } from "react-icons/fi"
import "./Footer.css"


function Footer() {

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }


    return (

        <footer className="footer">

            <div className="footer-container">


                {/* LOGO */}

                <a
                    href="#home"
                    className="footer-logo"
                >
                    <span>A</span>fridi<span>&lt;/&gt;</span>
                </a>


                {/* COPYRIGHT */}

                <p className="footer-copyright">
                    © 2026 Shaikh Afridi Ismail. All rights reserved.
                </p>


                {/* BUILT WITH */}

                <p className="footer-built">
                    Built with

                    <FiHeart className="footer-heart" />

                    using

                    <span>React</span>
                </p>

            </div>


            {/* SCROLL TO TOP */}

            <button
                className="scroll-top-btn"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                title="Back to top"
            >
                <FiArrowUp />
            </button>

        </footer>

    )

}


export default Footer