import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-bg-glow"></div>
            <div className="contact-content">
                <motion.p
                    className="contact-label"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    WHAT'S NEXT?
                </motion.p>

                <motion.h2
                    className="contact-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    LET'S WORK <br />
                    <span className="hollow-text">TOGETHER</span>
                </motion.h2>

                <motion.div
                    className="cta-wrapper"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="mailto:avinashbansode813@gmail.com" className="email-link">
                        <span className="link-text">AVINASHBANSODE813@GMAIL.COM</span>
                        <div className="link-bg"></div>
                    </a>
                </motion.div>

                <motion.div
                    className="cta-wrapper"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ marginTop: '1.5rem', display: 'block' }}
                >
                    <a href="tel:+917822054093" className="email-link" style={{ fontSize: '1.5rem', padding: '1rem 3rem' }}>
                        <span className="link-text">+91 7822054093</span>
                        <div className="link-bg"></div>
                    </a>
                </motion.div>

                {/* Social links could be moved to global footer or kept here as 'Contact Methods' */}
            </div>
        </section>
    );
};

export default Contact;
