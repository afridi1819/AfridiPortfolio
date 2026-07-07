import { useEffect, useState } from "react"
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"
import "./Navbar.css"


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    /* ===================================
       THEME STATE
    =================================== */

    const [isLightMode, setIsLightMode] = useState(() => {

        const savedTheme = localStorage.getItem("theme")

        return savedTheme === "light"

    })


    /* ===================================
       APPLY AND SAVE THEME
    =================================== */

    useEffect(() => {

        if (isLightMode) {

            document.body.classList.add("light-mode")

            localStorage.setItem("theme", "light")

        } else {

            document.body.classList.remove("light-mode")

            localStorage.setItem("theme", "dark")

        }

    }, [isLightMode])


    /* ===================================
       CLOSE MOBILE MENU
    =================================== */

    const closeMenu = () => {

        setIsMenuOpen(false)

    }


    /* ===================================
       TOGGLE THEME
    =================================== */

    const toggleTheme = () => {

        setIsLightMode((currentMode) => !currentMode)

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
                        onClick={toggleTheme}
                        aria-label={
                            isLightMode
                                ? "Switch to dark mode"
                                : "Switch to light mode"
                        }
                        title={
                            isLightMode
                                ? "Dark mode"
                                : "Light mode"
                        }
                    >

                        {
                            isLightMode
                                ? <FiMoon />
                                : <FiSun />
                        }

                    </button>


                    {/* MOBILE MENU BUTTON */}

                    <button
                        className="menu-toggle"
                        onClick={() =>
                            setIsMenuOpen((currentState) => !currentState)
                        }
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
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