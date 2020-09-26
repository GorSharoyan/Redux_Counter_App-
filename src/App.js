import React from 'react';
// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import store,{ decrement, increment } from './store/index';


function App() {
 const {counter}=useSelector((store)=>{
   return store;
 })

 const dispatch=useDispatch();
 
 const handleInc=()=>{
    dispatch(increment());
    console.log('INCREMENT')
 }

const handleDec=()=>{
   dispatch(decrement());
   console.log('DECREMENT')
 }


  return (
    <div className="App">
      <header>
        <h1>Counter</h1>
        <p>Count:{counter}</p>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </header>
    </div>
  );
}

export default App;
