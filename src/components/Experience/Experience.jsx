import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Senior Full Stack Developer",
            company: "TechSolutions Inc.",
            period: "2023 - Present",
            description: "Leading the development of scalable web applications using React, Node.js, and Cloud services. Mentoring junior developers and optimizing system architecture.",
            tech: ["React", "Node.js", "AWS", "TypeScript"]
        },
        {
            id: 2,
            role: "Frontend Developer",
            company: "Creative Digital Agency",
            period: "2021 - 2023",
            description: "Built interactive and responsive user interfaces for high-profile clients. Collaborated with designers to implement pixel-perfect designs.",
            tech: ["React", "GSAP", "Sass", "Figma"]
        },
        {
            id: 3,
            role: "Web Developer Intern",
            company: "StartUp Hub",
            period: "2020 - 2021",
            description: "Assisted in developing client websites and maintaining existing codebases. Learned modern web development practices.",
            tech: ["HTML", "CSS", "JavaScript", "WordPress"]
        }
    ];

    return (
        <section className="experience-container" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="section-header"
            >
                <h2 className="section-title">Experience</h2>
                <div className="title-line"></div>
            </motion.div>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <div className="timeline-marker"></div>
                        <div className="timeline-content glass-panel">
                            <div className="timeline-header">
                                <h3 className="role">{exp.role}</h3>
                                <span className="company">{exp.company}</span>
                                <span className="period">{exp.period}</span>
                            </div>
                            <p className="description">{exp.description}</p>
                            <div className="tech-stack">
                                {exp.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
