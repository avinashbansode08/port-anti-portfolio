import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "Full-Stack Developer",
        "MERN Stack Developer",
        "UI/UX Designer",
        "Freelancer"
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    return (
        <section className="hero-container" id="home">
            <div className="hero-content">
                <motion.div
                    className="profile-img-container"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="profile-img-wrapper">
                        <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Avinash Bansode" className="profile-img" />
                    </div>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Hi, I'm <span className="highlight-name">Avinash Bansode</span>
                </motion.h1>

                <motion.h2
                    className="hero-subtitle"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {text}<span className="blinking-cursor">|</span>
                </motion.h2>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    I create high-performance web applications that blend clean code, intuitive design,
                    and modern technologies — turning ideas into elegant digital products.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <a href="/resume.pdf" download="Avinash_Bansode_Resume.pdf" className="btn btn-resume">
                        <FiDownload className="btn-icon" /> Resume
                    </a>
                    <a href="#contact" className="btn btn-hire">
                        Hire Me
                    </a>
                    <a href="#work" className="btn btn-work">
                        View Work
                    </a>
                </motion.div>

                <motion.div
                    className="social-icons"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                    <a href="mailto:avinashbansode813@gmail.com"><FiMail /></a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
