import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../action/action';
export const Component1 = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.count)
    console.log("data",data)
  return (
     <>
     <div>Your counter App is ready Click on Pluius and Minus button and plays</div>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
     <p>{data}</p>

     </>
  )
}
