import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addtodo, deletetodo } from "../action/action";
export const Component1 = () => {
  const [userInput, setUserInput] = useState("");
  const [isHovered, setIsHovered] = useState(null)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.count);
  const todoList = useSelector((state) => state.todos);
  console.log(todoList);
  console.log("data", data);

  const addToDo = () => {
    dispatch(addtodo(userInput));
    setUserInput("");
  };
  return (
    <>
      <div>
        Your counter App is ready Click on Pluius and Minus button and plays
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{data}</p>

      <h1>Add ToDo</h1>
      <div style={{marginBottom:"1rem"}}>
      <input
        type="text"
        placeholder="Add todo"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={addToDo}>Add todo</button>
      </div>
     
      <ul
        style={{
          display: "flex",
          flexDirection:"column",
          width: "300px",
          justifyContent: "space-around",
          margin:"0 auto",
          height:"30px"
        }}
      >
        {todoList?.map((ele) => {
          return (
            <li key={ele.id}
            style={{
              display: "flex",
              justifyContent: "space-between", 
              alignItems: "center",
              width: "100%",
              height:"100%",
              margin:"0.5rem 0",
              padding:"0 0.5rem",
              borderRadius:"7rem",
              boxShadow:"1px 3px 7px rgba(0,0,0,0.3)"
            }}
            >
              <p>{ele.text}</p>
              <button onClick={() => dispatch(deletetodo(ele.id))} style={{
                border:"none",
                borderRadius:"25px",
                boxShadow:"1px 3px 7px rgba(0,0,0,0.2)",
                cursor:"pointer",
                backgroundColor: isHovered === ele.id ? "#f0f0f0" : "transparent", // Example hover effect
                transition: "background-color 0.3s ease" // Optional transition effect
              }}
              onMouseEnter={() => setIsHovered(ele.id)}
      onMouseLeave={() => setIsHovered(null)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
