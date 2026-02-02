import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Globe,
    ShieldCheck,
    Layers,
    ChevronRight,
    Mail,
    Github,
    Linkedin,
    Menu,
    X,
    Zap,
    Layout,
    Smartphone
} from 'lucide-react';
import './App.css';

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [formStatus, setFormStatus] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            e.target.reset();
            setTimeout(() => setFormStatus(''), 3000);
        }, 1500);
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = {
        github: 'https://github.com/avinashbansode08',
        linkedin: 'https://www.linkedin.com/in/avinash-bansode-08',
        email: 'mailto:avinashbansode08@gmail.com'
    };

    return (
        <div className="app-container">
            {/* Interactive Mouse Glow */}
            <div
                className="mouse-glow"
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`
                }}
            ></div>


            {/* Navbar */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="logo"
                        onClick={() => scrollToSection('#home')}
                        style={{ cursor: 'pointer' }}
                    >
                        <Zap className="logo-icon" />
                        <span className="logo-text">JM <span className="gradient-text">TechnoSpece</span></span>
                    </motion.div>

                    <div className="desktop-nav">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="btn-primary" onClick={() => scrollToSection('#contact')}>Get Started</button>
                    </div>

                    <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-nav"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="btn-primary" onClick={() => scrollToSection('#contact')}>Get Started</button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">
                            Engineering the <br />
                            <span className="gradient-text">Future of Tech</span>
                        </h1>
                        <p className="hero-subtitle">
                            We create bespoke digital experiences that blend cutting-edge technology
                            with world-class design. Elevate your business with JM TechnoSpece.
                        </p>
                        <div className="hero-btns">
                            <button className="btn-primary" onClick={() => scrollToSection('#contact')}>
                                Transform Now <ChevronRight size={18} />
                            </button>
                            <button className="btn-secondary" onClick={() => scrollToSection('#services')}>
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Background Elements */}
                <div className="hero-visual">
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="blob blob-1"
                    ></motion.div>
                    <div className="blob blob-2"></div>
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="glass-shape"
                    >
                        <Cpu size={120} className="floating-icon" />
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <div className="section-header">
                    <h2 className="section-title">Our <span className="gradient-text">Expertise</span></h2>
                    <p className="section-desc">Innovative solutions tailored for the next generation of industry leaders.</p>
                </div>

                <div className="services-grid">
                    {[
                        { icon: <Globe />, title: 'Web Architecture', desc: 'Scalable, high-performance web applications built for the modern era.' },
                        { icon: <Smartphone />, title: 'Mobile Innovation', desc: 'Sleek, intuitive mobile experiences that keep users engaged.' },
                        { icon: <ShieldCheck />, title: 'Cyber Security', desc: 'Advanced protection for your digital assets and user data.' },
                        { icon: <Layers />, title: 'UI/UX Design', desc: 'Premium, user-centric designs that prioritize both form and function.' }
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{
                                y: -15,
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                            }}
                            className="service-card glass-card"
                        >
                            <div className="service-icon-box">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <motion.div
                                className="card-shine"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-image-container"
                    >
                        <div className="about-image glass-card">
                            <Layout size={200} className="about-placeholder-icon" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-text"
                    >
                        <h2 className="section-title">Redefining <br /><span className="gradient-text">Technical Excellence</span></h2>
                        <p className="section-desc">
                            Founded on the principles of innovation and precision, JM TechnoSpece
                            is an IT firm dedicated to pushing the boundaries of what's possible.
                        </p>
                        <div className="stat-grid">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <h4 className="gradient-text">99%</h4>
                                <span>Client Satisfaction</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <h4 className="gradient-text">250+</h4>
                                <span>Projects Delivered</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="contact-card glass-card"
                >
                    <div className="contact-header">
                        <h2 className="section-title">Ready to <span className="gradient-text">Start?</span></h2>
                        <p>Let's build something extraordinary together.</p>
                    </div>
                    <form className="contact-form" onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
                        <button
                            type="submit"
                            className={`btn-primary ${formStatus}`}
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending' ? 'Sending...' :
                                formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-info">
                        <div className="logo" onClick={() => scrollToSection('#home')} style={{ cursor: 'pointer' }}>
                            <Zap className="logo-icon" />
                            <span className="logo-text">JM <span className="gradient-text">TechnoSpece</span></span>
                        </div>
                        <p>Elevating digital experiences since 2024.</p>
                    </div>
                    <div className="footer-links">
                        <div className="social-links">
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><Github className="social-icon" /></a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="social-icon" /></a>
                            <a href={socialLinks.email}><Mail className="social-icon" /></a>
                        </div>
                        <p className="copyright">&copy; 2026 JM TechnoSpece. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
