import React from "react";
import Todo from "./Todo";

function TodoList({ isActive, todos, setTodos }) {
  return (
   <>
    <h3>{isActive === true ? ' 🔥Working🔥' : '✅Done✅'}</h3>
    {todos
    .filter(item => item.isDone === !isActive)
    .map(item => {
     return (
      <Todo 
      item={item} 
      isActive={isActive} 
      setTodos={setTodos} 
      key={item.id}
      />
     );
   })}
   </>
  );
}

export default TodoList;