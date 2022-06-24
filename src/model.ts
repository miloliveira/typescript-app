export interface Todo{
    id:number;
    todo:string;
    isDone: boolean
}


/* type Actions = 
| {type:"add", payload:string} 
| {type:"remove", payload:number}
| {type:"done", payload:number}

import { useReducer } from "react";
import React from 'react'

const TodoReducer = (state:Todo[],action:Actions) => {
  
  const [state, dispatch] = useReducer(TodoReducer, [])
  
    return (
    <div>model</div>
  )
}

export default model */