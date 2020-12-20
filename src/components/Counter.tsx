import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../action';

interface Props {
  name: string;
}
const Counter: React.FC<Props> = ({ name }) => {
  const dispatch = useDispatch();
  const [votes, setVotes] = useState<number>(0);

  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };
  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  return (
    <div>
      <h2>{name}</h2>
      <h3>{`Votes: ${votes}`}</h3>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
