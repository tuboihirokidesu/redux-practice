import React from 'react';
import { useSelector } from 'react-redux';
import { CounterState } from './reducer';
import Counter from './components/Counter';
import AppCSS from './App.module.css';

type VoteManga = string[];

const App = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const votesManga: VoteManga = ['鬼滅の刃', 'ONE PIECE', 'ハイキュー!!!'];
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <h1>Redux made easy</h1>
        <h2>Total Votes:{count}</h2>
      </div>
      {votesManga.map((vote, i) => (
        <Counter key={i} name={vote} />
      ))}
    </div>
  );
};

export default App;
