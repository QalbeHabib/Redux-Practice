import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

 
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen : {counter} </p>
      <button
        onClick={() => {
          dispatch({ type: 'INC' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DEC' });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'ADD', payload: 10 });
        }}
      >
        Add By 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'RED', payload: 10 });
        }}
      >
        Dec By 10
      </button>
    </div>
  );
}
