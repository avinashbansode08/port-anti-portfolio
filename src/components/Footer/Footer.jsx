import React from 'react';
import './Footer.css';
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // Assuming react-icons is installed

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>&lt;Avinash /&gt;</h2>
                </div>
                <div className="copyright">
                    <p>© {new Date().getFullYear()} Avinash Bansode. All rights reserved.</p>
                    <p className="credit">Designed & Built with <span style={{ color: 'var(--accent-secondary)' }}>♥</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
