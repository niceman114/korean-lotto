import React, { useState } from 'react';
import './App.css';
import { motion } from "framer-motion";

const generateRandomNumbers = (): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers);
};

const getBallType = (number: number): number => {
  if (number < 1 || number > 45) {
    return 0;
  }

  return Math.ceil(number / 10);
}

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers());
  const [animationKey, setAnimationKey] = useState<number>(0);

  const handleClick = () => {
    setNumbers(generateRandomNumbers());
    setAnimationKey(prevKey => prevKey + 1); // 키를 변경하여 애니메이션 재적용
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>로또 번호 나와라!</h1>
      </header>
      <main>
      <div className="balls">
          {numbers.map((number, index) => (
            <motion.div
              key={`${animationKey}-${index}`}
              className={`ball type${getBallType(number)}`}
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
          ))}
        </div>
        <button onClick={handleClick}>다시!</button>
      </main>
    </div>
  );
};

export default App;
