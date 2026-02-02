import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'light') {
            setIsDark(false);
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            setIsDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    const navLinks = [
        { name: "About", to: "#about" },
        { name: "Skills", to: "#skills" },
        { name: "Experience", to: "#experience" },
        { name: "Projects", to: "#work" },
        { name: "Contact", to: "#contact" },
        { name: "Resume", to: "/Avinash_Bansode_Resume.pdf", download: "Avinash_Bansode_Resume.pdf" },
    ];

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="nav-container">
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span>&lt;Avinash /&gt;</span>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.to}
                                onClick={(e) => {
                                    if (link.to.startsWith('#')) {
                                        e.preventDefault();
                                        scrollToSection(link.to);
                                    }
                                }}
                                className="nav-link"
                                {...(link.download ? { download: link.download } : {})}
                            >
                                <span className="nav-text">{link.name}</span>
                            </a>
                        </li>
                    ))}
                    {/* Theme Toggle */}
                    <li className="theme-toggle" onClick={toggleTheme}>
                        {isDark ? <FiSun /> : <FiMoon />}
                    </li>
                </ul>

                <div className="nav-actions">
                    <button className="menu-toggle mobile-only" onClick={() => setIsOpen(!isOpen)}>
                        <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.to}
                                onClick={(e) => {
                                    if (link.to.startsWith('#')) {
                                        e.preventDefault();
                                        scrollToSection(link.to);
                                    } else {
                                        setIsOpen(false);
                                    }
                                }}
                                className="mobile-link"
                                {...(link.download ? { download: link.download } : {})}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
