import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


// I will use inline styles for simplicity with framer motion or separate css. 
// Let's use internal styles here for the cursor to keep it self-contained.

const Cursor = ({ mousePosition }) => {
    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{ x: mousePosition.x - 5, y: mousePosition.y - 5 }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'var(--accent-secondary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />
            <motion.div
                className="cursor-outline"
                animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
                transition={{ type: "spring", mass: 0.5, damping: 20, stiffness: 100 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    border: '1px solid var(--accent-secondary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    mixBlendMode: 'difference'
                }}
            />
        </>
    );
};

export default Cursor;
