import React from 'react';
import { motion } from "framer-motion";

interface BallProps {
    number: number;
    index: number;
}

const getBallType = (number: number): number => {
    if (number < 1 || number > 45) {
        return 0;
    }
    return Math.ceil(number / 10);
};

const Ball: React.FC<BallProps> = ({ number, index }) => {
    const ballType = getBallType(number);

    return (
        <motion.div
            className={`ball type${ballType}`}
            initial={{ y: 50, opacity: 0, rotate: 0 }}
            animate={{ y: 0, opacity: 1, rotate: 360 }}
            transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
                damping: 5,
            }}
        >
            {number}
        </motion.div>
    );
};

export default Ball;
