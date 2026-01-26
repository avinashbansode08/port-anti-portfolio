import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiTool } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
    {
        name: "Frontend",
        icon: <FiLayout />,
        skills: [
            { name: "React", level: "90%", desc: "Building complex SPAs with Redux/Context API." },
            { name: "Next.js", level: "85%", desc: "SSR/SSG for high-performance web apps." },
            { name: "TypeScript", level: "80%", desc: "Type-safe scalability for large codebases." },
            { name: "Tailwind", level: "95%", desc: "Rapid UI development with utility-first CSS." },
            { name: "Framer Motion", level: "85%", desc: "Advanced animations and micro-interactions." },
        ]
    },
    {
        name: "Backend",
        icon: <FiDatabase />,
        skills: [
            { name: "Node.js", level: "85%", desc: "Scalable REST APIs and microservices." },
            { name: "Express", level: "90%", desc: "Middleware architecture and routing." },
            { name: "MongoDB", level: "80%", desc: "NoSQL schema design and aggregation pipelines." },
            { name: "PostgreSQL", level: "75%", desc: "Relational database management." },
        ]
    },
    {
        name: "Tools & Others",
        icon: <FiTool />,
        skills: [
            { name: "Git/GitHub", level: "90%", desc: "Version control and CI/CD workflows." },
            { name: "Docker", level: "70%", desc: "Containerization for consistent environments." },
            { name: "Figma", level: "85%", desc: "UI/UX design and prototyping." },
            { name: "VS Code", level: "95%", desc: "Productivity mastery with extensions." },
        ]
    }
];

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(skillCategories[0].skills[0]);

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>TECHNICAL <span className="highlight-text">ARSENAL</span></h2>
                    <p>Hover over any skill to reveal details.</p>
                </motion.div>

                <div className="skills-content">
                    {/* Left: Interactive List */}
                    <div className="skills-list">
                        {skillCategories.map((cat, catIndex) => (
                            <motion.div
                                key={catIndex}
                                className="skill-category"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: catIndex * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="category-title">
                                    {cat.icon}
                                    <h3>{cat.name}</h3>
                                </div>
                                <div className="pills-container">
                                    {cat.skills.map((skill, index) => (
                                        <motion.button
                                            key={index}
                                            className={`skill-pill ${activeSkill.name === skill.name ? 'active' : ''}`}
                                            onMouseEnter={() => setActiveSkill(skill)}
                                            onClick={() => setActiveSkill(skill)} // For mobile touch
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {skill.name}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Output Console */}
                    <motion.div
                        className="skills-output"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="console-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                            <span>output.js</span>
                        </div>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeSkill.name}
                                className="console-body"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="code-line">
                                    <span className="purple">const</span> <span className="blue">skill</span> = <span className="yellow">"{activeSkill.name}"</span>;
                                </div>
                                <div className="code-line">
                                    <span className="purple">let</span> <span className="blue">proficiency</span> = <span className="green">{activeSkill.level}</span>;
                                </div>
                                <div className="code-line comment">
                                    // {activeSkill.desc}
                                </div>
                                <div className="progress-bar-container">
                                    <motion.div
                                        className="progress-bar"
                                        initial={{ width: 0 }}
                                        animate={{ width: activeSkill.level }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
