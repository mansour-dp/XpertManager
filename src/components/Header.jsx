import { useState, useEffect, useRef } from "react";
import Logo from "../assets/images/logo.png";
import { WA_BUSINESS_NUMBER } from "../constants/info";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const menuRef = useRef(null);

    const whatsApp = WA_BUSINESS_NUMBER + "?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage";

    // Fonction pour faire défiler vers une section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsOpen(false); // Fermer le menu mobile après clic
    };

    // Classe pour les liens de navigation desktop
    const navLinkStyles = "font-medium hover:text-txtLight hover:border-b-2 hover:border-primary transition-colors duration-200 px-2 py-1.5 md:px-3 md:py-2 cursor-pointer";

    // Style pour les liens du menu mobile
    const mobileNavLinkStyles = "block text-lg font-medium hover:text-txtLight hover:border-b-2 hover:border-primary transition-colors duration-200 py-1 cursor-pointer";

    // Détecter le scroll pour appliquer l'ombre
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setHasScrolled(scrollTop > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Ferme le menu si l'écran devient plus grand que md ou si on clique en dehors
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, menuRef]);

    // Empêcher le défilement du body quand le menu est ouvert sur mobile
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <header
            className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md px-4 sm:px-6 md:px-8 lg:px-14 py-2 md:py-3 transition-shadow duration-300 ${
                hasScrolled ? "shadow-md" : "shadow-none"
            }`}
        >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="flex items-center hover:scale-105 transition-transform duration-200"
                    >
                        <img
                            className="w-12 sm:w-14 md:w-16 h-auto mr-2"
                            src={Logo}
                            alt="Logo XpertManager"
                        />
                        <span className="hidden sm:block text-lg font-bold text-primary">XpertManager</span>
                    </button>
                </div>

                {/* Navigation desktop - Centré */}
                <div className="hidden md:flex flex-1 justify-center">
                    <nav className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-gray-200">
                        <ul className="flex items-center space-x-8">
                            <li>
                                <button 
                                    onClick={() => scrollToSection('hero')} 
                                    className={`${navLinkStyles} hover:text-primary transition-colors duration-200`}
                                >
                                    Accueil
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('about')} 
                                    className={`${navLinkStyles} hover:text-primary transition-colors duration-200`}
                                >
                                    À propos
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('services')} 
                                    className={`${navLinkStyles} hover:text-primary transition-colors duration-200`}
                                >
                                    Fonctionnalités
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('contact')} 
                                    className={`${navLinkStyles} hover:text-primary transition-colors duration-200`}
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* CTA Button - À droite */}
                <div className="flex items-center flex-shrink-0">
                    <a 
                        href={whatsApp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex font-semibold bg-gradient-to-r from-primary to-primary/80 text-white px-4 lg:px-6 py-2.5 rounded-full hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 items-center gap-2 text-sm lg:text-base"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 2.002c5.516 0 9.983 4.468 9.983 9.983 0 1.75-.456 3.398-1.253 4.833L24 24l-7.232-1.253c-1.434.796-3.082 1.253-4.833 1.253-5.516 0-9.983-4.467-9.983-9.983C2.034 6.484 6.502 2.002 12.017 2.002zm5.123 14.127c-.22-.037-.635-.156-.89-.278-.255-.119-1.475-.726-1.704-.81-.228-.084-.394-.125-.561.125-.166.25-.646.81-.793.976-.147.166-.293.187-.549.062-.255-.125-1.077-.397-2.053-1.266-.759-.676-1.271-1.511-1.42-1.766-.148-.255-.016-.394.11-.521.112-.112.255-.293.383-.439.125-.147.167-.255.25-.424.084-.166.042-.312-.02-.439-.063-.125-.561-1.351-.77-1.851-.203-.49-.408-.424-.561-.432-.146-.007-.312-.009-.479-.009-.166 0-.439.063-.67.312-.23.25-.876.855-.876 2.083 0 1.229.897 2.417 1.021 2.583.125.166 1.754 2.679 4.25 3.757.594.257 1.057.41 1.418.525.596.189 1.139.162 1.568.098.479-.072 1.475-.603 1.682-1.185.208-.583.208-1.082.146-1.185-.063-.104-.23-.167-.479-.293z"/>
                        </svg>
                        <span className="hidden lg:inline">PARLER À UN EXPERT</span>
                        <span className="lg:hidden">EXPERT</span>
                    </a>
                </div>

                {/* Navigation mobile */}
                {isOpen && (
                    <div
                        ref={menuRef}
                        className="fixed inset-0 top-0 bg-background z-50 md:hidden"
                    >
                        <div className="flex justify-between items-center px-4 py-2 md:py-3">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="flex items-center"
                            >
                                <img
                                    className="w-12 sm:w-14 h-auto"
                                    src={Logo}
                                    alt="Logo Luna Soulage"
                                />
                            </button>
                            <button
                                className="flex items-center cursor-pointer justify-center w-10 h-10"
                                onClick={() => setIsOpen(false)}
                                aria-label="Fermer le menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-txtLight"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="container mx-auto h-full">
                            <ul className="w-screen h-screen flex flex-col space-y-6 text-txt bg-background px-6 pt-6">
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('hero')} 
                                        className={mobileNavLinkStyles}
                                    >
                                        Accueil
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('about')} 
                                        className={mobileNavLinkStyles}
                                    >
                                        À propos
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('services')} 
                                        className={mobileNavLinkStyles}
                                    >
                                        Fonctionnalités
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('contact')} 
                                        className={mobileNavLinkStyles}
                                    >
                                        Contact
                                    </button>
                                </li>
                                <li>
                                    <a 
                                        href={whatsApp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-full hover:from-primary/90 hover:to-primary/70 transition-all duration-200 text-center mt-6 shadow-lg"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 2.002c5.516 0 9.983 4.468 9.983 9.983 0 1.75-.456 3.398-1.253 4.833L24 24l-7.232-1.253c-1.434.796-3.082 1.253-4.833 1.253-5.516 0-9.983-4.467-9.983-9.983C2.034 6.484 6.502 2.002 12.017 2.002zm5.123 14.127c-.22-.037-.635-.156-.89-.278-.255-.119-1.475-.726-1.704-.81-.228-.084-.394-.125-.561.125-.166.25-.646.81-.793.976-.147.166-.293.187-.549.062-.255-.125-1.077-.397-2.053-1.266-.759-.676-1.271-1.511-1.42-1.766-.148-.255-.016-.394.11-.521.112-.112.255-.293.383-.439.125-.147.167-.255.25-.424.084-.166.042-.312-.02-.439-.063-.125-.561-1.351-.77-1.851-.203-.49-.408-.424-.561-.432-.146-.007-.312-.009-.479-.009-.166 0-.439.063-.67.312-.23.25-.876.855-.876 2.083 0 1.229.897 2.417 1.021 2.583.125.166 1.754 2.679 4.25 3.757.594.257 1.057.41 1.418.525.596.189 1.139.162 1.568.098.479-.072 1.475-.603 1.682-1.185.208-.583.208-1.082.146-1.185-.063-.104-.23-.167-.479-.293z"/>
                                        </svg>
                                        PARLER À UN EXPERT
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

                {/* Icône menu hamburger */}
                <div className="flex items-center gap-3 sm:gap-5 relative z-20">
                    <button
                        className="md:hidden flex items-center cursor-pointer justify-center w-8 h-8 bg-primary/20 rounded-full"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Menu principal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-5 h-5 text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
