import React from 'react';
import Ball from './Ball'; // 새로운 Ball 컴포넌트 import

interface BallsProps {
    numbers: number[];
}

const Balls: React.FC<BallsProps> = ({ numbers }) => {
    return (
        <div className="balls">
            {numbers.map((number, index) => (
                <Ball number={number} index={index} />
            ))}
        </div>
    );
};

export default Balls;
