import React from 'react';
import './style.css';

// Redux Method
import { useSelector, useDispatch } from 'react-redux';

// redux-Toolkit Method
import { actions } from './store/redux_Toolkit.js';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  return (
    // Simple Redux Method
    // <div>
    //   <h1>Hello StackBlitz!</h1>
    //   <p>Start editing to see some magic happen : {counter} </p>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: 'INC' });
    //     }}
    //   >
    //     Increment
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: 'DEC' });
    //     }}
    //   >
    //     Decrement
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: 'ADD', payload: 10 });
    //     }}
    //   >
    //     Add By 10
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: 'RED', payload: 10 });
    //     }}
    //   >
    //     Dec By 10
    //   </button>
    // </div>

    // Redux Toolkit
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>
        Start editing to see some magic happen : {counter} {name}{' '}
      </p>
      <button
        onClick={() => {
          dispatch(actions.increment(2));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(actions.decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(actions.addBy(10));
        }}
      >
        Add By 10
      </button>
      <button
        onClick={() => {
          dispatch(actions.decBy(10));
        }}
      >
        Dec By 10
      </button>
    </div>
  );
}
