import './App.css';
import React from 'react';
import { useStore } from '@satha/react';
import { numberStore } from './store';

function App() {
  const numValue = useStore(numberStore);

  const onDecrement = () => {
    numberStore.set((state: number) => state - 1);
  };

  const onIncrement = () => {
    numberStore.set((state: number) => state + 1);
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <div>LocalStorage: {numValue}</div>
      <button onClick={onDecrement}>-</button> <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default App;
