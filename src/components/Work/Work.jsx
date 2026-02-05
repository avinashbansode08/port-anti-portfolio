import React, { useRef, useState } from 'react';
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import './Work.css';

const projects = [


    {
        title: "STATE CHAMPION",
        category: "Sports Excellence",
        image: `${import.meta.env.BASE_URL}netball-cert.jpg`,
        year: "2023-24",
        description: "Recognized for outstanding performance in state-level Netball championship."
    },
    {
        title: "HSC EXCELLENCE",
        category: "Academic Achievement",
        image: `${import.meta.env.BASE_URL}hsc-cert.jpg`,
        year: "2024",
        description: "Achieved distinction in Higher Secondary Certificate examination."
    },
    {
        title: "VERIFICATION",
        category: "Official Credential",
        image: `${import.meta.env.BASE_URL}verification-doc.jpg`,
        year: "2024",
        description: "Officially verified documentation of achievements."
    },
    {
        title: "SSC EXCELLENCE",
        category: "Academic Foundation",
        image: `${import.meta.env.BASE_URL}ssc-cert.jpg`,
        year: "2022",
        description: "Secondary School Certificate with distinction marks."
    }
];

const Work = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section ref={targetRef} className="work-section" id="work">
            <div className="sticky-container">
                <motion.div style={{ x }} className="project-list">
                    <div className="work-heading">
                        <h2>SELECTED <br /> <span className="highlight-text">ACHIEVEMENTS</span></h2>
                        <div className="work-actions">
                            <a href="/Avinash_Bansode_Resume.pdf" download="Avinash_Bansode_Resume.pdf" className="btn btn-resume">
                                Download Resume
                            </a>
                        </div>
                    </div>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            onClick={() => setSelectedImage(project.image)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="card-border"></div>
                            <div className="card-glow"></div>
                            <div className="image-container">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="overlay">
                                    <FiZoomIn className="zoom-icon" />
                                    <span>View Certificate</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="info-header">
                                    <h3>{project.title}</h3>
                                    <span className="year">{project.year}</span>
                                </div>
                                <p className="category">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="close-btn"
                            whileHover={{ rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FiX />
                        </motion.button>
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        >
                            <img src={selectedImage} alt="Enlarged view" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Work;
