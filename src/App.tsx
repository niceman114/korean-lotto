import React, { useState } from 'react';
import './App.css';
import Balls from './components/Balls'; // 새로운 Balls 컴포넌트 import

const generateRandomNumbers = (): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers);
};

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers());
  const [animationKey, setAnimationKey] = useState<number>(0);

  const onRetryButtonClicked = () => {
    setNumbers(generateRandomNumbers());
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>로또 번호 나와라!</h1>
        </header>
        <main>
          <Balls numbers={numbers} animationKey={animationKey} />
          <button onClick={onRetryButtonClicked}>다시!</button>
        </main>
      </div>
  );
};

export default App;
