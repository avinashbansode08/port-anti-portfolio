import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ paddingTop: '80px', minHeight: '100vh' }}
            >
                {children}
            </motion.main>
            <Footer />
        </>
    );
};

export default Layout;
