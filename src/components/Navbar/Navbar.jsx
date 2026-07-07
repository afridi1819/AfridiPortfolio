import { useEffect, useState } from "react"
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"
import "./Navbar.css"

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLightMode, setIsLightMode] = useState(false)


    useEffect(() => {

        if (isLightMode) {
            document.body.classList.add("light-mode")
        } else {
            document.body.classList.remove("light-mode")
        }

    }, [isLightMode])


    const closeMenu = () => {
        setIsMenuOpen(false)
    }


    return (
        <nav className="navbar">

            <div className="navbar-container">


                {/* NAME */}

                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    Afridi Shaikh
                </a>


                {/* NAVIGATION LINKS */}

                <div
                    className={
                        isMenuOpen
                            ? "navbar-menu active"
                            : "navbar-menu"
                    }
                >

                    <a
                        href="#home"
                        onClick={closeMenu}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        onClick={closeMenu}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        onClick={closeMenu}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        onClick={closeMenu}
                    >
                        Projects
                    </a>

                    <a
                        href="#education"
                        onClick={closeMenu}
                    >
                        Education
                    </a>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </a>

                </div>


                {/* RIGHT SIDE ACTIONS */}

                <div className="navbar-actions">


                    {/* THEME TOGGLE */}

                    <button
                        className="theme-toggle"
                        onClick={() =>
                            setIsLightMode(!isLightMode)
                        }
                        aria-label="Toggle light and dark mode"
                    >

                        {
                            isLightMode
                                ? <FiSun />
                                : <FiMoon />
                        }

                    </button>


                    {/* MOBILE MENU BUTTON */}

                    <button
                        className="menu-toggle"
                        onClick={() =>
                            setIsMenuOpen(!isMenuOpen)
                        }
                        aria-label="Toggle navigation menu"
                    >

                        {
                            isMenuOpen
                                ? <FiX />
                                : <FiMenu />
                        }

                    </button>

                </div>

            </div>

        </nav>
    )
}

export default Navbar