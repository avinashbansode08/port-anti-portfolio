import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="image-frame">
                        {/* Premium Placeholder Image */}
                        <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Profile" />
                        <div className="frame-glow"></div>
                    </div>
                </motion.div>

                <div className="about-content">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        ABOUT ME
                    </motion.h2>
                    <motion.div
                        className="text-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="highlight-text">
                            I don't just write code; I architect digital experiences.
                        </p>
                        <p className="description">
                            As a <span className="text-highlight">Full Stack Developer</span>, I dance on the fine line between logical precision and creative chaos.
                            My passion lies in breathing life into static designs and building robust, scalable systems that solve real-world problems.
                            <br /><br />
                            Every line of code I write is a step towards perfection. Whether it's a complex backend architecture or a pixel-perfect frontend interface,
                            I pour my soul into crafting solutions that are not only functional but also intuitive and beautiful.
                        </p>
                    </motion.div>

                    <motion.div
                        className="stats-grid"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Dedication</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-actions"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <a href="/avi.resume.pdf" download="avi.resume.pdf" className="btn btn-resume">
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
