import "./header.scss";
import { useRef, useEffect } from "react";

function Header() {
    const headerRef = useRef(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (headerRef.current) {
                if (currentScrollY > lastScrollY.current && currentScrollY > 0) {
                    headerRef.current.style.transform = 'translate(-50%, -100%)';
                } else {
                    headerRef.current.style.transform = 'translate(-50%, 0)';
                }
            }

            lastScrollY.current = currentScrollY;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header ref={headerRef}>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="32px"
                                height="32px"
                                fill="#fff"
                                id="home"
                            >
                                <path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="28px"
                                height="34px"
                                fill="#fff"
                                id="mail"
                            >
                                <path d="M21,4H3A3,3,0,0,0,0,7V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V7A3,3,0,0,0,21,4ZM2,9.822,7.933,13.6,2,18.683Zm7.651,4.937c.015-.013.021-.032.036-.046l1.239.789a2.01,2.01,0,0,0,2.148,0l1.24-.789c.014.014.02.033.036.046L20.464,20H3.537ZM22,18.683,16.067,13.6,22,9.822ZM3,6H21a1,1,0,0,1,1,1v.451L12,13.814,2,7.451V7A1,1,0,0,1,3,6Z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32px"
                                height="32px"
                                fill="none"
                                viewBox="0 0 125 125"
                                id="profile"
                            >
                                <circle cx="64" cy="49" r="18" stroke="#fff" strokeWidth="12"></circle>
                                <path stroke="#fff" strokeWidth="12" d="M97 109V109C97 105.285 97 103.427 96.7858 101.868C95.3815 91.6515 87.3485 83.6185 77.1318 82.2142C75.5732 82 73.7155 82 70 82H58C54.2845 82 52.4268 82 50.8682 82.2142C40.6515 83.6185 32.6185 91.6515 31.2142 101.868C31 103.427 31 105.285 31 109V109"></path>
                                <rect width="96" height="96" x="16" y="16" stroke="#fff" strokeWidth="12" rx="23"></rect>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="33px"
                                height="33px"
                                fill="#fff"
                                id="open-folder"
                            >
                                <path d="M22.78 10.37A1 1 0 0 0 22 10h-2V9a3 3 0 0 0-3-3h-6.28l-.32-1a3 3 0 0 0-2.84-2H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14.4a3 3 0 0 0 2.92-2.35L23 11.22a1 1 0 0 0-.22-.85ZM5.37 18.22a1 1 0 0 1-1 .78H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.56a1 1 0 0 1 1 .68l.54 1.64A1 1 0 0 0 10 8h7a1 1 0 0 1 1 1v1H8a1 1 0 0 0-1 .78Zm14 0a1 1 0 0 1-1 .78H7.21a1.42 1.42 0 0 0 .11-.35L8.8 12h12Z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#tools">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="32px"
                                height="32px"
                                fill="#fff"
                                id="shovel"
                            >
                                <path d="M21.71,7.38,16.62,2.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L17,5.54,11.58,11l-1-1h0a3,3,0,0,0-4.25,0L2.88,13.42A3,3,0,0,0,2,15.55V19a3,3,0,0,0,3,3H8.45a3,3,0,0,0,2.13-.88L14,17.69a3,3,0,0,0,0-4.25l-1-1L18.46,7l1.83,1.83a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,7.38ZM12.6,16.27,9.16,19.71a1,1,0,0,1-.71.29H5a1,1,0,0,1-1-1V15.55a1,1,0,0,1,.29-.71L7.73,11.4a1,1,0,0,1,1.41,0l1,1-.89.9a1,1,0,0,0,0,1.41A1,1,0,0,0,10,15a1,1,0,0,0,.7-.29l.9-.89,1,1A1,1,0,0,1,12.6,16.27Z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;