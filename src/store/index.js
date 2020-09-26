import {configureStore,createAction,createReducer} from "@reduxjs/toolkit";
let initialState={};
export const increment=createAction('ICREMENT');
export const decrement= createAction('DECREMENT');

const counter =createReducer(0,{
    [increment.type]:(store)=>store+1,
    [decrement.type]:(store)=>store-1
})

const store =configureStore({
    reducer:counter,
};
initialState
)