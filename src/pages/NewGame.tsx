import React, {useState} from "react";
import Balls from "../components/Balls";
import FloatingButton from "../components/FloatingButton";
import './NewGame.css';

const generateRandomNumbers = (): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers);
};

const NewGame = () => {
  const [numbersList, setNumbersList] = useState<number[][]>([generateRandomNumbers()]);

  const onClickAddButton = () => {
    let newNumbers: number[];
    do {
      newNumbers = generateRandomNumbers();
      // eslint-disable-next-line no-loop-func
    } while (numbersList.some((numbers: number[]) => JSON.stringify(numbers) === JSON.stringify(newNumbers)));

    setNumbersList(prevNumbersList => [newNumbers, ...prevNumbersList]);
  };

  return (
    <>
      {numbersList.map((numbers) => (
        <Balls key={numbers.join(':')} numbers={numbers} />
      ))}
      <FloatingButton onClick={onClickAddButton} text="+" />
    </>
  );
}

export default NewGame;