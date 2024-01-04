// import { useState } from "react"

export default function ToDoItem({ id, todo, onTodoClick }) {

  const handleTodoDoneClick = (e) => {
    e.preventDefault();
    onTodoClick(e.target.id);
  }
  return (
    <div className="TodoItem">
      {todo.completed ? <li><strike>{todo.todo}</strike></li> :
        <li>{todo.todo}</li>}

      <button className="TodoItemButton" id={id} onClick={handleTodoDoneClick}>
        {todo.completed ? "Not Done ?" : "Done"} 
      </button>
    </div>
  )
}