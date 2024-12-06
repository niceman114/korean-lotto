import React, { useState } from 'react';
import './App.css';
import Balls from './components/Balls';

const generateRandomNumbers = (): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers);
};

const App: React.FC = () => {
  const [numbersList, setNumbersList] = useState<number[][]>([generateRandomNumbers()]);

  const onClickAddButton = () => {
    setNumbersList(prevNumbersList => [...prevNumbersList, generateRandomNumbers()]);
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>대충 로또 생성기</h1>
          <button onClick={onClickAddButton}>더 나와라!</button>
        </header>
        <main>
          {numbersList.map((numbers, index) => (
              <Balls numbers={numbers} animationKey={index} />
          ))}
        </main>
      </div>
  );
};

export default App;
