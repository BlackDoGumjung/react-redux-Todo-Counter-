import React from 'react';
import './style.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

export default function App() {
  return (
    <div>
      <CounterContainer />
      <hr/>
      <TodosContainer />
    </div>
  );
}

