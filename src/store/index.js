import {configureStore,createAction,createReducer} from "@reduxjs/toolkit";

let initialState={};
export const increment=createAction('ICREMENT');
export const decrement= createAction('DECREMENT');

const counter =createReducer(0,{
    [increment.type]:(state)=>state+1,
    [decrement.type]:(state)=>state-1,
})

const store =configureStore(
{
    reducer:{counter}
},
initialState
)

export default store